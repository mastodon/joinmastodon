import { CheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { useRouter } from "next/navigation"
import { useCallback, useEffect, useMemo } from "react"
import { z } from "zod"
import { FormattedMessage } from "react-intl"

import { DonateCheckout } from "../../components/donate/DonateCheckout"
import { isInIframe, sendMessage } from "../../donate/utils"
import { CURRENCIES, DONATION_FREQUENCIES } from "../../types/api"

import { themeSchema } from "../../donate/utils"
import { DonateFooter } from "../../components/donate/DonateFooter"
import { DonateWrapper } from "../../components/donate/DonateWrapper"
import { Theme } from "../../donate/types"

const primaryColor = "#6364ff"
const hoverColor = "#563acc"

export default function DonateCheckoutPage({
  clientSecret,
  stripePublicKey,
  theme,
  backUrl,
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
  const handleDonate = useCallback(() => {
    sendMessage("checkout-complete")
    router.push(`/donate/complete?theme=${theme}`)
  }, [router, theme])

  return (
    <DonateWrapper theme={theme} belowModal={<BelowModalLink />}>
      <CheckoutProvider
        stripe={loadStripePromise}
        options={{
          fetchClientSecret,
          elementsOptions: {
            appearance: {
              theme: "flat",
              variables: {
                colorPrimary: primaryColor,
                colorText: "#000000",
                colorBackground: "#ffffff",
                colorTextSecondary: primaryColor,
                borderRadius: "0.5rem",
                logoColor: theme,
              },
              rules: {
                ".AccordionItem": {
                  border: `1px solid ${primaryColor}`,
                  padding: "1rem",
                },
                ".AccordionItem:hover": {
                  color: hoverColor,
                  borderColor: hoverColor,
                },
                ".Input": {
                  border: `1px solid ${primaryColor}`,
                },
                ".Input::placeholder": {
                  color: "#9b9b9b",
                },
                ".Block": {
                  border: `1px solid #d4d4d4`,
                  boxShadow: "none",
                },
              },
            },
            loader: "always",
          },
        }}
      >
        <DonateCheckout
          onComplete={handleDonate}
          className="p-8 pb-2 grow"
          backUrl={backUrl}
        />
      </CheckoutProvider>
      <DonateFooter />
    </DonateWrapper>
  )
}

function BelowModalLink() {
  if (isInIframe()) {
    return null
  }
  return (
    <p className="text-center text-b3 dark:text-gray-2 my-4">
      <FormattedMessage
        id="donate_widget.checkout.footer"
        defaultMessage="For more options on how to donate, visit {link}"
        values={{
          link: (
            <a href="https://joinmastodon.org/donate" className="underline">
              joinmastodon.org/donate
            </a>
          ),
        }}
      />
    </p>
  )
}

interface DonateCheckoutPageProps {
  clientSecret: string
  stripePublicKey: string
  theme: Theme
  backUrl: string
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
    })
    if (process.env.APP_ENV !== "production") {
      params.set("environment", "staging")
    }
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
        backUrl: `/donate?${new URLSearchParams({ frequency, amount: amount.toString(), currency, theme }).toString()}`,
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
