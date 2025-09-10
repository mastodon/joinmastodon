import * as cookie from "cookie"
import type { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { useRouter } from "next/navigation"
import { useCallback, useEffect } from "react"
import { z } from "zod"

import { OnDonateFn, DonateWidget } from "../../components/donate/DonateWidget"
import { sendMessage, themeSchema } from "../../donate/utils"
import {
  CampaignResponse,
  CURRENCIES,
  DONATION_FREQUENCIES,
} from "../../types/api"
import { fetchEndpoint } from "../../utils/api"
import { DonateFooter } from "../../components/donate/DonateFooter"
import { DonateWrapper } from "../../components/donate/DonateWrapper"

export default function DonatePage({
  theme,
  default_currency,
  donation_message,
  donation_button_text,
  donation_url,
  amounts,
  frequency: defaultFrequency,
  amount: defaultAmount,
  currency: defaultCurrency,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  const handleDonate: OnDonateFn = useCallback(
    async (amount, frequency, currency) => {
      const params = new URLSearchParams({
        url: donation_url,
        frequency,
        amount: amount.toFixed(0),
        currency,
      })
      router.push(`/donate/checkout?${params.toString()}`)
    },
    [donation_url, router]
  )

  useEffect(() => {
    sendMessage("widget-loaded")
  }, [])

  return (
    <DonateWrapper theme={theme}>
      <DonateWidget
        defaultCurrency={defaultCurrency ?? default_currency}
        className="p-8 pb-2 grow"
        messages={{ donation_message, donation_button_text }}
        amounts={amounts}
        onDonate={handleDonate}
        defaultAmount={defaultAmount}
        defaultFrequency={defaultFrequency}
      />
      <DonateFooter />
    </DonateWrapper>
  )
}

type DonatePageProps = DonatePageQuery & CampaignResponse

const querySchema = z.object({
  theme: themeSchema,
  campaign: z.string().optional(),
  callback: z.string().optional(),
  frequency: z.enum(DONATION_FREQUENCIES).optional(),
  amount: z.coerce.number().int().positive().gte(100).optional(),
  currency: z.enum(CURRENCIES).optional(),
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
    return_url: `${req.headers.host}/sponsor`,
  })
  if (process.env.APP_ENV !== "production") {
    queryParams.set("environment", "staging")
  }

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
