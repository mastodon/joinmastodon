import type { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { getIronSession } from "iron-session"
import { useRouter } from "next/navigation"
import { useCallback } from "react"
import { z } from "zod"

import { fetchEndpoint } from "../../utils/api"
import { CampaignResponse } from "../../types/api"
import DonateWidget, { OnDonateFn } from "../../components/DonateWidget"

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
    <DonateWidget
      theme={theme}
      defaultCurrency={default_currency}
      messages={{ donation_message, donation_button_text }}
      amounts={amounts}
      onDonate={handleDonate}
    />
  )
}

interface DonateSessionData {
  seed?: number
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
  const session = await getIronSession<DonateSessionData>(req, res, {
    cookieName: "session",
    password: process.env.SESSION_SECRET,
    ttl: 60 * 5, // Five minutes
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  })
  session.seed ??= Math.floor(Math.random() * 99)
  const queryParams = new URLSearchParams({
    locale,
    platform: "android",
    seed: session.seed.toString(),
    source: "menu",
  })
  if (process.env.NODE_ENV !== "production") {
    queryParams.append("environment", "staging")
  }

  await session.save()

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
