import { CheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { useRouter } from "next/navigation"
import { useCallback, useEffect, useMemo } from "react"
import { z } from "zod"

import { DonateCheckout } from "../../components/DonateCheckout"
import { sendMessage } from "../../donate/utils"
import { CURRENCIES, DONATION_FREQUENCIES } from "../../types/api"
import classNames from "classnames"
import { themeSchema } from "."

export default function DonateCheckoutPage({
  clientSecret,
  stripePublicKey,
  theme,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const loadStripePromise = useMemo(
    () => loadStripe(stripePublicKey),
    [stripePublicKey]
  )
  const fetchClientSecret = useCallback(
    async () => clientSecret,
    [clientSecret]
  )
  const router = useRouter()

  useEffect(() => {
    sendMessage("checkout-loaded")
  }, [])

  return (
    <CheckoutProvider
      stripe={loadStripePromise}
      options={{
        fetchClientSecret,
        elementsOptions: {
          appearance: {
            theme: "flat",
            variables: {
              colorPrimary: "#563acc",
              colorBackground: "#d4d4d4",
              colorText: "#000000",
              borderRadius: "0.5rem",
            },
          },
        },
      }}
    >
      <DonateCheckout
        onComplete={() => router.push("/donate/complete")}
        className={classNames(theme, "bg-white dark:bg-black p-8")}
      />
    </CheckoutProvider>
  )
}

interface DonateCheckoutPageProps {
  clientSecret: string
  stripePublicKey: string
  theme: z.infer<typeof themeSchema>
}

const querySchema = z.object({
  url: z.string().url(),
  frequency: z.enum(DONATION_FREQUENCIES),
  amount: z.coerce.number().int().positive().gte(100),
  currency: z.enum(CURRENCIES),
  theme: themeSchema,
})

const responseSchema = z.promise(
  z.object({
    clientSecret: z.string(),
  })
)

export const getServerSideProps: GetServerSideProps<
  DonateCheckoutPageProps
> = async ({ query, locale }) => {
  try {
    const { url, frequency, amount, currency, theme } = querySchema.parse(query)

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
      throw new Error(
        `Failed to get donation URL: ${response.status} ${response.statusText}`
      )
    }
    const { clientSecret } = await responseSchema.parse(response.json())
    return {
      props: {
        clientSecret,
        stripePublicKey: process.env.STRIPE_PUBLIC_KEY ?? "",
        theme,
      },
    }
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
