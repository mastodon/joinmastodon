import Image from "next/image"
import { FormattedMessage } from "react-intl"

import { sendMessage, themeSchema } from "../../donate/utils"
import donatedImage from "../../public/illustrations/donation_successful.png"
import { Button } from "../../components/Button"
import { useCallback, useEffect } from "react"
import { DonateWrapper } from "../../components/donate/DonateWrapper"
import { Theme } from "../../donate/types"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import z from "zod"
import { useRouter } from "next/navigation"

export default function DonateCompletePage({
  theme,
  redirectUrl,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  const handleClose = useCallback(() => {
    sendMessage("close")
    if (redirectUrl) {
      router.push(redirectUrl)
    }
  }, [redirectUrl, router])
  useEffect(() => {
    sendMessage("complete-loaded")
  }, [])

  return (
    <DonateWrapper theme={theme}>
      <div className="p-8 gap-2 justify-between">
        <h1 className="sh1">
          <FormattedMessage
            id="donate_widget.success.header"
            defaultMessage="Thank you for your contribution!"
          />
        </h1>
        <p className="text-gray-1">
          <FormattedMessage
            id="donate_widget.success.subtitle"
            defaultMessage="You should receive an email confirming your donation soon."
          />
        </p>
        <Image
          src={donatedImage}
          alt=""
          className="w-full max-w-80 mx-auto my-4"
        />
        <Button onClick={handleClose} fullWidth dark>
          <FormattedMessage
            id="donate_widget.success.close"
            defaultMessage="Close"
          />
        </Button>
      </div>
    </DonateWrapper>
  )
}

interface DonateCompletePageProps {
  theme: Theme
  redirectUrl: string | null
}

const querySchema = z.object({
  theme: themeSchema,
  redirectUrl: z.string().url().nullable().default(null),
})

export const getServerSideProps: GetServerSideProps<
  DonateCompletePageProps
> = async ({ query }) => {
  const { theme, redirectUrl } = querySchema.parse(query)
  return {
    props: {
      theme,
      redirectUrl,
    },
  }
}
