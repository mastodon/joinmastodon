import React from "react"
import Link from "next/link"
import { FormattedMessage } from "react-intl"
import Image from "next/legacy/image"
import footerImage from "../public/illustrations/footer.png"
import LogoWhite from "../public/logos/logo-white.svg?inline"
import GitHub from "../public/ui/github.svg?inline"

/** Sitewide footer component */
export const Footer = () => (
  <footer className="full-width-bg relative mt-footer-offset bg-[#150118] pb-24 text-center text-white md:pt-24 md:text-start">
    <div className="pointer-events-none absolute bottom-full left-1/2 z-0 ml-[-1px] h-48 w-full -translate-x-1/2 translate-y-[1px] md:bottom-footer-offset md:h-full">
      <Image
        src={footerImage}
        alt=""
        layout="fill"
        objectFit="cover"
        objectPosition="center top"
        placeholder="empty"
        unoptimized
      />
    </div>

    <nav className="full-width-bg__inner relative z-10">
      <div className="grid gap-x-4 gap-y-16 md:grid-cols-12 md:gap-x-5">
        <div className="flex flex-col items-center gap-8 text-nightshade-50 md:col-start-1 md:col-end-5 md:items-start lg:col-start-1 lg:col-end-5">
          <LogoWhite className="w-20 max-w-full" fill="currentColor" />
          <p className="mt-2 max-w-[28ch]">
            <FormattedMessage
              id="footer.quip"
              defaultMessage="Free, open-source decentralized social media platform."
            />
          </p>
        </div>

        <div className="grid gap-10 gap-x-4 md:col-start-6 md:col-end-13 md:grid-cols-3 md:gap-x-5">
          {[
            {
              heading: (
                <FormattedMessage
                  id="nav.product.title"
                  defaultMessage="Product"
                />
              ),
              links: [
                <Link
                  key="servers"
                  href="/servers"
                  className="inline-block py-2 hover:underline"
                >
                  <FormattedMessage
                    id="nav.servers.title"
                    defaultMessage="Servers"
                  />
                </Link>,
                <Link
                  key="apps"
                  href="/apps"
                  className="inline-block py-2 hover:underline"
                >
                  <FormattedMessage id="nav.apps.title" defaultMessage="Apps" />
                </Link>,
                <Link
                  key="sponsors"
                  href="/sponsors"
                  className="inline-block py-2 hover:underline"
                >
                  <FormattedMessage
                    id="nav.sponsors.title"
                    defaultMessage="Donate"
                  />
                </Link>,
                <Link
                  key="roadmap"
                  href="/roadmap"
                  className="inline-block py-2 hover:underline"
                >
                  <FormattedMessage
                    id="nav.roadmap.title"
                    defaultMessage="Roadmap"
                  />
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
                  className="inline-block py-2 hover:underline"
                  key="mastodon/mastodon"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/mastodon/mastodon"
                >
                  <FormattedMessage
                    id="nav.code.title"
                    defaultMessage="Source code"
                  />
                </a>,
                <a
                  className="inline-block py-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  key="https://blog.joinmastodon.org"
                  href="https://blog.joinmastodon.org/"
                >
                  <FormattedMessage id="nav.blog.title" defaultMessage="Blog" />
                </a>,
                <a
                  className="inline-block py-2 hover:underline"
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
                  className="inline-block py-2 hover:underline"
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
                <Link
                  key="/about"
                  href="/about"
                  className="inline-block py-2 hover:underline"
                >
                  <FormattedMessage
                    id="nav.about_us.title"
                    defaultMessage="About us"
                  />
                </Link>,
                <Link
                  key="/branding"
                  href="/branding"
                  className="inline-block py-2 hover:underline"
                >
                  <FormattedMessage
                    id="nav.branding.title"
                    defaultMessage="Branding"
                  />
                </Link>,
                <Link
                  key="/careers"
                  href="/careers"
                  className="inline-block py-2 hover:underline"
                >
                  <FormattedMessage
                    id="nav.careers.title"
                    defaultMessage="Careers"
                  />
                </Link>,
                <Link
                  key="/impressum"
                  href="/about#impressum"
                  className="inline-block py-2 hover:underline"
                >
                  <FormattedMessage
                    id="nav.impressum.title"
                    defaultMessage="Impressum"
                  />
                </Link>,
              ],
            },
          ].map((menu, i) => (
            <div className="flex flex-col gap-2" key={i}>
              <h2 className="h6 py-1">{menu.heading}</h2>
              <ul className="b2 m-0 flex flex-col gap-2 p-0 text-nightshade-100">
                {menu.links.map((link) => (
                  <li key={link.key}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-6 border-nightshade-600 sm:mx-auto lg:my-8" />

      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-center text-nightshade-100 md:text-start">
          Copyright © 2023 Mastodon gGmbH.{" "}
          <Link
            href="/trademark"
            className="border-nightshade-600 hover:underline sm:ml-4 sm:border-l sm:pl-4"
          >
            <FormattedMessage
              id="nav.trademark_policy.title"
              defaultMessage="Trademark Policy"
            />
          </Link>
          <span aria-hidden>{" • "}</span>
          <Link href="/privacy-policy" className="hover:underline">
            <FormattedMessage
              id="nav.privacy_policy.title"
              defaultMessage="Privacy Policy"
            />
          </Link>
          <span aria-hidden>{" • "}</span>
          <Link
            href="https://joinmastodon.instatus.com"
            className="hover:underline"
          >
            <FormattedMessage id="nav.status.title" defaultMessage="Status" />
          </Link>
        </span>

        <div className="mt-4 flex justify-center space-x-2 md:mt-0 md:space-x-6">
          <a
            href="https://mastodon.social/@Mastodon"
            rel="me"
            className="text-nightshade-100 hover:text-nightshade-50"
          >
            <LogoWhite className="h-5 w-5" fill="currentColor" />
            <span className="sr-only">
              <FormattedMessage
                id="footer.follow_us_on_mastodon"
                defaultMessage="Follow us on Mastodon"
              />
            </span>
          </a>

          <a
            href="https://github.com/mastodon"
            rel="me"
            className="text-nightshade-100 hover:text-nightshade-50"
          >
            <GitHub className="h-5 w-5" fill="currentColor" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  </footer>
)

export default Footer
