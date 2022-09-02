import React from "react"
import Link from "next/link"
import { FormattedMessage } from "react-intl"
import mastodonLogo from "../public/logos/logo-white.svg"
import Image from "next/image"

/** Sitewide footer component */
export const Footer = () => (
  <footer className="full-width-bg relative mt-footer-offset bg-nightshade pb-24 text-center text-white md:pt-24 md:text-start">
    <div className="absolute bottom-full left-1/2 h-48 w-full -translate-x-1/2 translate-y-[1px] bg-[url(/illustrations/swoosh.svg)] bg-no-repeat [background-position:90%_bottom] [background-size:MAX(64rem,100vw)_auto] md:h-[MAX(18vw,12rem)]"></div>
    <nav className="full-width-bg__inner">
      <div className="grid gap-x-4 gap-y-16 md:grid-cols-12 md:gap-x-5">
        <div className="w-20 max-w-full justify-self-center md:col-start-1 md:col-end-4 lg:col-start-2 lg:col-end-5">
          <Image
            src={mastodonLogo}
            alt="Mastodon"
            className="footer-grid__brand"
          />
        </div>
        <div className="grid gap-10 gap-x-4 md:col-start-4 md:col-end-13 md:grid-cols-3 md:gap-x-5 lg:col-start-6 lg:col-end-12">
          {[
            {
              heading: (
                <FormattedMessage
                  id="nav.product.title"
                  defaultMessage="Product"
                />
              ),
              links: [
                <Link key="servers" href="/servers">
                  <a className="inline-block py-2">
                    <FormattedMessage
                      id="nav.servers.title"
                      defaultMessage="Servers"
                    />
                  </a>
                </Link>,
                <Link key="apps" href="/apps">
                  <a className="inline-block py-2">
                    <FormattedMessage
                      id="nav.apps.title"
                      defaultMessage="Apps"
                    />
                  </a>
                </Link>,
                <Link key="sponsors" href="/sponsors">
                  <a className="inline-block py-2">
                    <FormattedMessage
                      id="nav.sponsors.title"
                      defaultMessage="Sponsors"
                    />
                  </a>
                </Link>,
              ],
            },
            {
              heading: (
                <FormattedMessage
                  id="nav.resources.title"
                  defaultMessage="Resources"
                />
              ),
              links: [
                <a
                  className="inline-block py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  key="https://blog.joinmastodon.org"
                  href="https://blog.joinmastodon.org/"
                >
                  <FormattedMessage id="nav.blog.title" defaultMessage="Blog" />
                </a>,
                <a
                  className="inline-block py-2"
                  key="mastodon/mastodon"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/mastodon/mastodon"
                >
                  <FormattedMessage id="nav.code.title" defaultMessage="Code" />
                </a>,
                <a
                  className="inline-block py-2"
                  key="joinmastodon.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.joinmastodon.org"
                >
                  <FormattedMessage
                    id="nav.docs.title"
                    defaultMessage="Documentation"
                  />
                </a>,
                <a
                  className="inline-block py-2"
                  key="mastodon/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/mastodon/mastodon/discussions"
                >
                  <FormattedMessage
                    id="nav.support.title"
                    defaultMessage="Support"
                  />
                </a>,
              ],
            },
            {
              heading: (
                <FormattedMessage
                  id="nav.company.title"
                  defaultMessage="Company"
                />
              ),
              links: [
                <Link key="/imprint" href="/imprint">
                  <a className="inline-block py-2">
                    <FormattedMessage
                      id="nav.contact_us.title"
                      defaultMessage="Contact us"
                    />
                  </a>
                </Link>,
                <a
                  className="inline-block py-2"
                  key="/brand"
                  href="/brand"
                >
                  <FormattedMessage
                    id="nav.press_kit.title"
                    defaultMessage="Press kit"
                  />
                </a>,
                <Link key="/privacy-policy" href="/privacy-policy">
                  <a className="inline-block py-2">
                    <FormattedMessage
                      id="nav.privacy_policy.title"
                      defaultMessage="Privacy policy"
                    />
                  </a>
                </Link>,
              ],
            },
          ].map((menu, i) => (
            <div className="flex flex-col gap-2" key={i}>
              <h2 className="h6 py-1">{menu.heading}</h2>
              <ul className="b2 m-0 flex flex-col gap-2 p-0">
                {menu.links.map((link) => (
                  <li key={link.key}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </nav>
  </footer>
)

export default Footer
