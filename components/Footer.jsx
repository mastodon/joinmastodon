import React from "react"
import Link from "next/link"
import { FormattedMessage } from "react-intl"
import mastodonLogo from "../public/logos/logo-white.svg"
import Image from "next/image"

export const Footer = () => (
  <>
    <footer className="relative text-white pb-24 md:pt-24 mt-72 text-center md:text-left">
      <div className="full-width-bg bg-nightshade">
        {/* TODO(daniel): tighten up sizing of swoosh */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-full h-48 md:h-72 translate-y-[1px] [background-position:90%_bottom] [background-size:MAX(64rem,100vw)_auto] bg-no-repeat bg-[url(/illustrations/swoosh.svg)]"></div>
      </div>
      <nav>
        <div className="grid gap-x-4 md:gap-x-5 gap-y-16 md:grid-cols-12">
          <div className="justify-self-center max-w-full w-20 md:col-start-1 md:col-end-4 lg:col-start-2 lg:col-end-5">
            <Image
              src={mastodonLogo}
              alt="Mastodon"
              className="footer-grid__brand"
            />
          </div>
          <div className="grid gap-10 md:grid-cols-3 gap-x-4 md:col-start-4 md:col-end-13 md:gap-x-5 lg:col-start-6 lg:col-end-12" >
            {[
              {
                heading: (
                  <FormattedMessage id="nav.product" defaultMessage="Product" />
                ),
                links: [
                  <Link key="communities" href="/communities">
                    <a className="py-2 inline-block">
                      <FormattedMessage
                        id="home.get_started"
                        defaultMessage="Get started"
                      />
                    </a>
                  </Link>,
                  <Link key="apps" href="/apps">
                    <a className="py-2 inline-block">
                      <FormattedMessage id="nav.apps" defaultMessage="Apps" />
                    </a>
                  </Link>,
                  <Link key="sponsors" href="/sponsors">
                    <a className="py-2 inline-block">
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
                    className="py-2 inline-block"
                    key="mastodon/mastodon"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/mastodon/mastodon"
                  >
                    <FormattedMessage id="nav.code" defaultMessage="Code" />
                  </a>,
                  <a
                    className="py-2 inline-block"
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
                    className="py-2 inline-block"
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
                    <a className="py-2 inline-block">
                      <FormattedMessage
                        id="contact_us"
                        defaultMessage="Contact us"
                      />
                    </a>
                  </Link>,
                  <a
                    className="py-2 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                    key="https://blog.joinmastodon.org"
                    href="https://blog.joinmastodon.org/"
                  >
                    <FormattedMessage id="nav.blog" defaultMessage="Blog" />
                  </a>,
                  <a
                    className="py-2 inline-block"
                    key="/press-kit.zip"
                    href="/press-kit.zip"
                  >
                    <FormattedMessage
                      id="credits.press_kit"
                      defaultMessage="Press kit"
                    />
                  </a>,
                  <Link key="/privacy-policy" href="/privacy-policy">
                    <a className="py-2 inline-block">
                      <FormattedMessage
                        id="privacy_policy"
                        defaultMessage="Privacy policy"
                      />
                    </a>
                  </Link>,
                ],
              },
            ].map((menu) => (
              <div className="flex flex-col gap-2" key={menu.heading}>
                <h4 className="py-1 h6">{menu.heading}</h4>
                <ul className="b2 flex flex-col m-0 p-0 gap-2">
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
