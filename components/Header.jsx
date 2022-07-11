import React from "react"
import Link from "next/link"
import { FormattedMessage } from "react-intl"

// import LanguageSelectContainer from "./LanguageSelectContainer"
// import Dropdown from "./Dropdown"

import mastodonLogo from "../public/logos/logo-full-purple.svg"
import Image from "next/image"
import { Dropdown } from "./Dropdown"

const options = [
  {
    value: "https://blog.joinmastodon.org/",
    label: <FormattedMessage id="nav.blog" defaultMessage="Blog" />,
  },
  {
    value: "https://github.com/mastodon/mastodon/discussions",
    label: <FormattedMessage id="nav.support" defaultMessage="Support" />,
  },
  {
    value: "https://docs.joinmastodon.org",
    label: <FormattedMessage id="nav.docs" defaultMessage="Documentation" />,
  },
]

const Header = () => (
  <div className="container flex items-center justify-between bg-eggplant pt-12 text-white">
    <div>
      <Link className="brand" href="/">
        <a className="block max-w-[11.375rem] md:max-w-[12.625rem]">
          <Image className="link-logo" src={mastodonLogo} alt="Mastodon" />
        </a>
      </Link>
    </div>

    <ul className="flex gap-4">
      <li>
        <Link href="/apps">
          <a>
            <FormattedMessage id="nav.apps" defaultMessage="Apps" />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/sponsors">
          <a>
            <FormattedMessage id="nav.sponsors" defaultMessage="Sponsors" />
          </a>
        </Link>
      </li>
      <li>
        <a href="https://github.com/mastodon/mastodon">
          <FormattedMessage id="nav.code" defaultMessage="Code" />
        </a>
      </li>
      <li>
        <Dropdown
          asLinks
          label={
            <FormattedMessage id="nav.resources" defaultMessage="Resources" />
          }
          options={options}
        />
      </li>
      <li>{/* <LanguageSelectContainer /> */}</li>
    </ul>
  </div>
)

export default Header
