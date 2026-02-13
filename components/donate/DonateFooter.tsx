import { FormattedMessage } from "react-intl"

import LogoPurple from "../../public/logos/logo-purple.svg?inline"

export function DonateFooter() {
  return (
    <footer className="flex gap-2 items-center mt-3 text-b4 bg-gray-3 dark:bg-black dark:text-gray-2 px-8 py-2">
      <LogoPurple className="size-6" />
      <FormattedMessage
        id="donate_widget.footer"
        defaultMessage="Donations go to Mastodon GmbH"
      />
    </footer>
  )
}
