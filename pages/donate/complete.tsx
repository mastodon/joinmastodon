import Image from "next/image"
import { FormattedMessage } from "react-intl"

import { sendMessage } from "../../donate/utils"
import donatedImage from "../../public/illustrations/donation_successful.png"
import { Button } from "../../components/Button"
import { useEffect } from "react"

export default function DonateCompletePage() {
  const handleClose = () => {
    sendMessage("close")
  }
  useEffect(() => {
    sendMessage("complete-loaded")
  }, [])

  return (
    <div className="flex flex-col p-8 gap-2">
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
  )
}
