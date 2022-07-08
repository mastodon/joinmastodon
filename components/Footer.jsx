import React from "react"
import Link from "next/link"
import { FormattedMessage } from "react-intl"
import mastodonLogo from "../public/logos/logo-white.svg"
import Image from "next/image"

export const Footer = () => (
  <>
    <footer className="Footer">
      <nav className="container">
        <div className="Footer__grid grid">
          <div className="Footer__logo">
            <Image
              src={mastodonLogo}
              alt="Mastodon"
              className="footer-grid__brand"
            />
          </div>
          <div className="Footer__menus">
            <div className="Footer__menu">
              <h4 className="Footer__menu-heading h6">
                <FormattedMessage id="nav.product" defaultMessage="Product" />
              </h4>
              <ul className="b2">
                <li>
                  <Link href="/communities">
                    <a>
                      <FormattedMessage
                        id="home.get_started"
                        defaultMessage="Get started"
                      />
                    </a>
                  </Link>
                </li>
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
                      <FormattedMessage
                        id="nav.sponsors"
                        defaultMessage="Sponsors"
                      />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="Footer__menu">
              <h4 className="Footer__menu-heading h6">
                <FormattedMessage
                  id="nav.resources"
                  defaultMessage="Resources"
                />
              </h4>
              <ul className="b2">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/mastodon/mastodon"
                  >
                    <FormattedMessage id="nav.code" defaultMessage="Code" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://docs.joinmastodon.org"
                  >
                    <FormattedMessage
                      id="nav.docs"
                      defaultMessage="Documentation"
                    />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/mastodon/mastodon/discussions"
                  >
                    <FormattedMessage
                      id="nav.support"
                      defaultMessage="Support"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="Footer__menu">
              <h4 className="Footer__menu-heading h6">
                <FormattedMessage id="nav.company" defaultMessage="Company" />
              </h4>
              <ul className="b2">
                <li>
                  <Link href="/imprint">
                    <a>
                      <FormattedMessage
                        id="contact_us"
                        defaultMessage="Contact us"
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://blog.joinmastodon.org/"
                  >
                    <FormattedMessage id="nav.blog" defaultMessage="Blog" />
                  </a>
                </li>
                <li>
                  <a href="/press-kit.zip">
                    <FormattedMessage
                      id="credits.press_kit"
                      defaultMessage="Press kit"
                    />
                  </a>
                </li>
                <li>
                  <Link href="/privacy-policy">
                    <a>
                      <FormattedMessage
                        id="privacy_policy"
                        defaultMessage="Privacy policy"
                      />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </footer>
    <style jsx>{`
      .Footer {
        background: var(--eggplant);
        color: var(--white);
        padding: 6rem 0;
        text-align: center;
      }
      .Footer__menu-heading {
        line-height: 1.5rem;
        padding: 0.5rem 0;
      }
      .Footer__grid {
        row-gap: 2.5rem;
      }
      .Footer__menu ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .Footer__menus {
        display: grid;
        gap: 2.5rem;
      }
      .Footer__menu {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      .Footer__menu a {
        display: inline-block;
        padding-block: 0.5rem;
      }
      .Footer__logo {
        width: 5.5rem;
        max-width: 100%;
        justify-self: center;
      }
      @media (min-width: 576px) {
        .Footer {
          text-align: left;
        }
        .Footer__logo {
          grid-column: 1 / 2;
          justify-self: center;
        }
        .Footer__menus {
          grid-column: 2 / 5;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--gutter-width);
        }
      }
      @media (min-width: 768px) {
        .Footer__logo {
          grid-column: 1 / 4;
        }
        .Footer__menus {
          grid-column: 4 / 13;
        }
      }
      @media (min-width: 992px) {
        .Footer__logo {
          grid-column: 2 / 5;
        }
        .Footer__menus {
          grid-column: 6 / 12;
        }
      }
    `}</style>
  </>
)

export default Footer
