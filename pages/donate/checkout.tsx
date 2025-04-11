import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js"
import { z } from "zod"
import { loadStripe } from "@stripe/stripe-js"
import { useMemo } from "react"

import { CURRENCIES, DONATION_FREQUENCIES } from "../../types/api"

export default function DonateCheckoutPage({
  clientSecret,
  stripePublicKey,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const loadStripePromise = useMemo(
    () => loadStripe(stripePublicKey),
    [stripePublicKey]
  )
  return (
    <div>
      <EmbeddedCheckoutProvider
        stripe={loadStripePromise}
        options={{ clientSecret }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}

interface DonateCheckoutPageProps {
  clientSecret: string
  stripePublicKey: string
}

const querySchema = z.object({
  url: z.string().url(),
  frequency: z.enum(DONATION_FREQUENCIES),
  amount: z.coerce.number().int().positive().gte(100),
  currency: z.enum(CURRENCIES),
})

export const getServerSideProps: GetServerSideProps<
  DonateCheckoutPageProps
> = async ({ query, locale }) => {
  try {
    const { url, frequency, amount, currency } = querySchema.parse(query)

    const params = new URLSearchParams({
      platform: "web",
      frequency,
      amount: amount.toString(),
      currency,
      locale,
      source: "menu",
      environment: "staging",
    })
    const response = await fetch(`${url}?${params}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!response.ok) {
      throw new Error("Failed to get donation URL")
    }
    const body = await response.json()
    if ("clientSecret" in body) {
      return {
        props: {
          clientSecret: body.clientSecret,
          stripePublicKey: process.env.STRIPE_PUBLIC_KEY ?? "",
        },
      }
    }
    throw new Error("Invalid response from server: " + JSON.stringify(body))
  } catch (error) {
    console.error("Error with checkout:", error)
    return {
      redirect: {
        statusCode: 302,
        destination: "/donate",
      },
    }
  }
}
