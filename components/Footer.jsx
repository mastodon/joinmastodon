import React from "react"
import Link from "next/link"
import { FormattedMessage } from "react-intl"
import mastodonLogo from "../public/logos/logo-white.svg"
import Image from "next/image"

export const Footer = () => (
  <>
    <footer className="relative mt-72 pb-24 text-center text-white md:pt-24 md:text-left">
      <div className="full-width-bg absolute top-0 bottom-0 z-[-10] bg-nightshade">
        {/* TODO(daniel): tighten up sizing of swoosh */}
        <div className="absolute bottom-full left-1/2 h-48 w-full -translate-x-1/2 translate-y-[1px] bg-[url(/illustrations/swoosh.svg)] bg-no-repeat [background-position:90%_bottom] [background-size:MAX(64rem,100vw)_auto] md:h-72"></div>
      </div>
      <nav>
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
                  <FormattedMessage id="nav.product" defaultMessage="Product" />
                ),
                links: [
                  <Link key="communities" href="/communities">
                    <a className="inline-block py-2">
                      <FormattedMessage
                        id="home.get_started"
                        defaultMessage="Get started"
                      />
                    </a>
                  </Link>,
                  <Link key="apps" href="/apps">
                    <a className="inline-block py-2">
                      <FormattedMessage id="nav.apps" defaultMessage="Apps" />
                    </a>
                  </Link>,
                  <Link key="sponsors" href="/sponsors">
                    <a className="inline-block py-2">
                      <FormattedMessage
                        id="nav.sponsors"
                        defaultMessage="Sponsors"
                      />
                    </a>
                  </Link>,
                ],
              },
              {
                heading: (
                  <FormattedMessage
                    id="nav.resources"
                    defaultMessage="Resources"
                  />
                ),
                links: [
                  <a
                    className="inline-block py-2"
                    key="mastodon/mastodon"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/mastodon/mastodon"
                  >
                    <FormattedMessage id="nav.code" defaultMessage="Code" />
                  </a>,
                  <a
                    className="inline-block py-2"
                    key="joinmastodon.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://docs.joinmastodon.org"
                  >
                    <FormattedMessage
                      id="nav.docs"
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
                      id="nav.support"
                      defaultMessage="Support"
                    />
                  </a>,
                ],
              },
              {
                heading: (
                  <FormattedMessage id="nav.company" defaultMessage="Company" />
                ),
                links: [
                  <Link key="/imprint" href="/imprint">
                    <a className="inline-block py-2">
                      <FormattedMessage
                        id="contact_us"
                        defaultMessage="Contact us"
                      />
                    </a>
                  </Link>,
                  <a
                    className="inline-block py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    key="https://blog.joinmastodon.org"
                    href="https://blog.joinmastodon.org/"
                  >
                    <FormattedMessage id="nav.blog" defaultMessage="Blog" />
                  </a>,
                  <a
                    className="inline-block py-2"
                    key="/press-kit.zip"
                    href="/press-kit.zip"
                  >
                    <FormattedMessage
                      id="credits.press_kit"
                      defaultMessage="Press kit"
                    />
                  </a>,
                  <Link key="/privacy-policy" href="/privacy-policy">
                    <a className="inline-block py-2">
                      <FormattedMessage
                        id="privacy_policy"
                        defaultMessage="Privacy policy"
                      />
                    </a>
                  </Link>,
                ],
              },
            ].map((menu, i) => (
              <div className="flex flex-col gap-2" key={i}>
                <h4 className="h6 py-1">{menu.heading}</h4>
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
  </>
)

export default Footer
