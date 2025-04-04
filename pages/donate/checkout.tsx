import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js"
import { z } from "zod"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe("pk_test_f3duw0VsAEM2TJFMtWQ90QAT")

export default function DonateCheckoutPage({
  clientSecret,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <h1>Donate Checkout</h1>
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
  frequency: z.enum(["one-time", "monthly", "yearly"]),
  amount: z.coerce.number().int().positive().gt(100),
  currency: z.enum(["EUR", "USD"]),
})

export const getServerSideProps: GetServerSideProps<
  DonateCheckoutPageProps
> = async ({ query, locale }) => {
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
    // method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify({
    //   platform: "web",
    //   frequency,
    //   amount,
    //   currency,
    //   locale,
    //   source: "menu",
    //   environment: "staging",
    // }),
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
}
