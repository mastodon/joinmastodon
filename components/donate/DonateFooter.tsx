import { FormattedMessage } from "react-intl"

import LogoPurple from "../../public/logos/logo-purple.svg?inline"

export function DonateFooter() {
  return (
    <footer className="flex gap-2 items-center mt-3 text-b3">
      <LogoPurple className="size-8" />
      <FormattedMessage
        id="donate_widget.footer"
        defaultMessage="Donations go to Mastodon gGmbH"
      />
    </footer>
  )
}
