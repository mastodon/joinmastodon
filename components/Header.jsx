import Link from "next/link"
import { FormattedMessage } from "react-intl"

import LanguageSelect from "./LanguageSelect"
// import Dropdown from "./Dropdown"

import mastodonLogo from "../public/logos/logo-full-purple.svg"
import Image from "next/image"
import { Dropdown } from "./Dropdown"
import { useState } from "react"
import classNames from "classnames"

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

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="sticky top-0 mx-auto mt-12 flex items-center justify-between py-4 text-white">
      <div className="full-width-bg bg-nightshade" />
      <div>
        <Link className="brand" href="/">
          <a className="flex max-w-[11.375rem] md:max-w-[12.625rem]">
            <Image className="link-logo" src={mastodonLogo} alt="Mastodon" />
          </a>
        </Link>
      </div>

      <nav>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <svg
            width="27"
            height="19"
            viewBox="0 0 27 19"
            className="overflow-visible"
          >
            <line
              className={classNames(
                "origin-center stroke-white transition-all",
                open && "-translate-x-1 translate-y-[0.37rem] rotate-45"
              )}
              y1="1.5"
              x2="27"
              y2="1.5"
              strokeWidth="3"
            />
            <line
              className={classNames(
                "origin-center stroke-white transition-all",
                open && "opacity-0"
              )}
              y1="9.50002"
              x2="27"
              y2="9.50002"
              strokeWidth="3"
            />
            <line
              className={classNames(
                "origin-center stroke-white transition-all",
                open && "-translate-x-1 -translate-y-[0.37rem] -rotate-45"
              )}
              y1="17.5"
              x2="27"
              y2="17.5"
              strokeWidth="3"
            />
          </svg>
        </button>
        <ul
          className={classNames("gap-4 md:gap-10", {
            "hidden md:flex": !open,
            flex: open,
          })}
          role="menubar"
        >
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
                <FormattedMessage
                  id="nav.resources"
                  defaultMessage="Resources"
                />
              }
              options={options}
            />
          </li>
          <li>
            <LanguageSelect />
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Header
