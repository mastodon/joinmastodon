import * as cookie from "cookie"
import classNames from "classnames"
import type { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { useRouter } from "next/navigation"
import { useCallback } from "react"
import { z } from "zod"

import { fetchEndpoint } from "../../utils/api"
import { CampaignResponse } from "../../types/api"
import { OnDonateFn, DonateWidget } from "../../components/DonateWidget"

export default function DonatePage({
  theme,
  default_currency,
  donation_message,
  donation_button_text,
  donation_url,
  amounts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  const handleDonate: OnDonateFn = useCallback(
    async (amount, frequency, currency) => {
      const params = new URLSearchParams({
        url: donation_url,
        frequency,
        amount: amount.toString(),
        currency,
      })
      router.push(`/donate/checkout?${params.toString()}`)
    },
    [donation_url, router]
  )

  return (
    <div className={classNames(theme, "bg-white dark:bg-black min-h-screen")}>
      <DonateWidget
        className="max-w-[400px] mx-auto"
        defaultCurrency={default_currency}
        messages={{ donation_message, donation_button_text }}
        amounts={amounts}
        onDonate={handleDonate}
      />
    </div>
  )
}

type DonatePageProps = DonatePageQuery & CampaignResponse

const querySchema = z.object({
  theme: z.enum(["light", "dark"]).default("light"),
  campaign: z.string().optional(),
  callback: z.string().optional(),
})
type DonatePageQuery = z.infer<typeof querySchema>

export const getServerSideProps: GetServerSideProps<DonatePageProps> = async ({
  query,
  locale,
  req,
  res,
}) => {
  if (!process.env.STRIPE_PUBLIC_KEY) {
    throw new Error("No Stripe public key set")
  }

  let seed = req.cookies.seed
  if (!seed) {
    seed = Math.floor(Math.random() * 99).toString()
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("seed", seed, {
        httpOnly: true,
        maxAge: 60 * 15,
        secure: process.env.NODE_ENV === "production",
      })
    )
  }
  const queryParams = new URLSearchParams({
    locale,
    platform: "android",
    seed,
    source: "menu",
    environment: "staging",
  })

  try {
    const apiRes = await fetchEndpoint<CampaignResponse>(
      "v1/donations/campaigns/active",
      queryParams
    )
    return {
      props: {
        ...apiRes,
        ...querySchema.parse(query),
      },
    }
  } catch {
    return {
      notFound: true,
    }
  }
}
