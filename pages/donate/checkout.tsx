import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js"
import { z } from "zod"
import { loadStripe } from "@stripe/stripe-js"
import { CURRENCIES, DONATION_FREQUENCIES } from "../../types/api"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

export default function DonateCheckoutPage({
  clientSecret,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ clientSecret }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}

interface DonateCheckoutPageProps {
  clientSecret: string
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
        },
      }
    }
    throw new Error("Invalid response from server")
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
