import Link from "next/link"
import { FormattedMessage, useIntl } from "react-intl"

import mastodonLogo from "../public/logos/wordmark-white-text.svg"
import Image from "next/legacy/image"
import { useState, useEffect, useRef, useId } from "react"
import classNames from "classnames"
import { locales } from "../data/locales"
import MenuToggle from "./MenuToggle"
import DisclosureArrow from "../public/ui/disclosure-arrow.svg?inline"
import { useRouter } from "next/router"

type HeaderProps = {
  /** determines whether the header is transparent on load, before scrolling down */
  transparent?: boolean
}

/** Sitewide header and navigation */
const Header = ({ transparent = true }: HeaderProps) => {
  const intl = useIntl()
  const router = useRouter()
  const [pageScrolled, setPageScrolled] = useState(false)

  // prettier-ignore
  const navigationItems = [
    {
      value: "/servers",
      label: <FormattedMessage id="nav.servers.title" defaultMessage="Servers" />,
    }, {
      value: "/apps",
      label: <FormattedMessage id="nav.apps.title" defaultMessage="Apps" />,
    }, {
      value: "https://freshstore.co/collections/mastodon",
      label: <div className="flex gap-2 items-center"><FormattedMessage id="nav.merch.title" defaultMessage="Merch" /><span className="bg-goldenrod/[0.5] text-goldenrod c2 px-1.5 rounded border border-goldenrod"><FormattedMessage id='nav.new' defaultMessage='New' /></span></div>,
    }, {
      value: "/sponsors",
      label: <FormattedMessage id="nav.sponsors.title" defaultMessage="Donate" />,
    }, {
      key: "resources",
      label: <FormattedMessage id="nav.resources.title" defaultMessage="Resources" />,
      childItems: [
        {
          value: "https://blog.joinmastodon.org/",
          label: <FormattedMessage id="nav.blog.title" defaultMessage="Blog" />,
          description: <FormattedMessage id="nav.blog.description" defaultMessage="Get the latest news about the platform" />,
        }, {
          value: "https://docs.joinmastodon.org",
          label: <FormattedMessage id="nav.docs.title" defaultMessage="Documentation" />,
          description: <FormattedMessage id="nav.docs.description" defaultMessage="Learn how Mastodon works in-depth" />,
        }, {
          value: "https://github.com/mastodon/mastodon/discussions",
          label: <FormattedMessage id="nav.support.title" defaultMessage="Support" />,
          description: <FormattedMessage id="nav.support.description" defaultMessage="Get help or suggest a feature on GitHub" />,
        }, {
          value: "/branding",
          label: <FormattedMessage id="nav.branding.title" defaultMessage="Branding" />,
          description: <FormattedMessage id="nav.branding.description" defaultMessage="Download our logos and learn how to use them" />,
        },
      ],
      footer: {
        value: "https://github.com/mastodon/mastodon",
        label: <FormattedMessage id="nav.code.action" defaultMessage="Browse code" />,
        title: <FormattedMessage id="nav.code.title" defaultMessage="Source code" />,
        description: <FormattedMessage id="nav.code.description" defaultMessage="Mastodon is free and open-source software" />,
      },
    }, {
      value: "/verification",
      label: <FormattedMessage id="nav.verification.title" defaultMessage="Verification" />,
    }, {
      key: "locale",
      label: <span aria-label={intl.formatMessage({
        id: "translate_site",
        defaultMessage: "文A, Translate site",
      })}>文A</span>,
      compact: true,
      childItems: locales.map((locale) => ({
        key: locale.code,
        locale: locale.code,
        scroll: false,
        small: true,
        value: "", // current page
        label: locale.language,
        active: router.locale === locale.code,
      })),
    }
  ]
    // set active status on links
    .map((item) => ({ ...item, active: router.asPath === item.value }))

  const {
    mobileMenuOpen,
    openMenuIndex,
    bindToggle,
    bindPrimaryMenu,
    bindPrimaryMenuItem,
    bindSecondaryMenuItem,
  } = useMenu({ navigationItems })

  const checkPageScroll = () => {
    setPageScrolled(window.scrollY > 0)
  }
  useEffect(() => {
    window.addEventListener("scroll", checkPageScroll)
    checkPageScroll()
    return () => {
      window.removeEventListener("scroll", checkPageScroll)
    }
  }, [])

  return (
    <header
      // background needs to be on the ::before for now to get around nested compositing bug in chrome
      className={classNames(
        'full-width-bg sticky -top-[var(--header-offset)] z-20 -mb-[var(--header-area)] pt-[var(--header-offset)] text-white before:absolute before:inset-0 before:bg-nightshade-900/[0.9] before:backdrop-blur before:transition-opacity before:content-[""]',
        pageScrolled || !transparent ? "before:opacity-100" : "before:opacity-0"
      )}
    >
      <div className="full-width-bg__inner flex h-[var(--header-height)] items-center justify-between">
        <div>
          <Link
            href="/"
            className="relative z-10 flex max-w-[11.375rem] pt-[6%] md:max-w-[12.625rem]"
          >
            <Image src={mastodonLogo} alt="Mastodon" />
          </Link>
        </div>

        <nav>
          <MenuToggle {...bindToggle()} />
          <ul
            {...bindPrimaryMenu()}
            className={classNames(
              "md:ms-0 md:-me-1 fixed inset-0 w-screen flex-col overflow-auto bg-black px-1 pt-[calc(var(--header-area)_+_1rem)] pb-8 md:relative md:w-auto md:flex-row md:gap-1 md:overflow-visible md:rounded-md md:bg-[transparent] md:p-1",
              mobileMenuOpen ? "flex" : "hidden md:flex"
            )}
          >
            {navigationItems.map((item, itemIndex) => (
              <li className="relative" key={item.key || item.value}>
                {"childItems" in item ? (
                  // Top-level Dropdown
                  <>
                    <button
                      {...bindPrimaryMenuItem(itemIndex, { hasPopup: true })}
                      className="flex items-center gap-[0.125rem] whitespace-nowrap rounded-md p-3 px-5 text-h5 focus:outline-2 md:text-b2 md:font-medium"
                    >
                      {item.label}
                      <DisclosureArrow
                        className={classNames({
                          "rotate-180": openMenuIndex === itemIndex,
                        })}
                      />
                    </button>

                    <div
                      className={classNames(
                        "end-0 top-full rounded-md md:absolute md:max-h-[calc(100vh_-_var(--header-height))] md:bg-white md:text-black md:shadow-lg",
                        openMenuIndex === itemIndex ? "overflow-auto" : "hidden"
                      )}
                    >
                      <ul
                        role="menu"
                        className={classNames(
                          item.compact
                            ? "py-2 md:px-2"
                            : "w-screen max-w-md py-2 md:grid md:max-w-lg md:grid-cols-2 md:gap-6 md:px-3 md:py-4"
                        )}
                      >
                        {item.childItems.map((child, childIndex) => (
                          // Child Items
                          <li key={child.key || child.value} role="menu">
                            <Link
                              href={child.value}
                              locale={child.locale || undefined}
                              scroll={child.scroll ?? true}
                              {...bindSecondaryMenuItem(child)}
                              className={classNames(
                                "block rounded-md hover:md:bg-nightshade-50",
                                item.compact
                                  ? "py-2 px-5 md:px-4"
                                  : "py-3 px-5 md:px-4",
                                item.compact && child.active && "font-extrabold"
                              )}
                              aria-current={child.active ? "page" : undefined}
                            >
                              <span
                                className={classNames(
                                  "block",
                                  !item.compact && "font-extrabold"
                                )}
                              >
                                {child.label}
                              </span>
                              <span className="mt-1 block font-extranormal text-gray-1">
                                {child.description}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>

                      {item.footer && (
                        <div className="md:bg-gray-4 md:p-4">
                          <a
                            href={item.footer.value}
                            className="group flex items-center justify-between rounded-md px-5 py-3 md:p-2"
                          >
                            <span>
                              <span className="font-extrabold">
                                {item.footer.title}
                              </span>
                              <span className="mt-1 block font-extranormal text-gray-1">
                                {item.footer.description}
                              </span>
                            </span>

                            <span className="b3 hidden h-12 items-center justify-center rounded-md border-2 border-blurple-500 bg-blurple-500 p-4 !font-semibold text-white transition-colors group-hover:border-blurple-600 group-hover:bg-blurple-600 md:flex">
                              {item.footer.label}
                            </span>
                          </a>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  // Top-level Link
                  <Link
                    href={item.value}
                    className={classNames(
                      "block whitespace-nowrap rounded-md p-3 px-5 text-h5 font-medium md:text-b2",
                      item.active && "font-extrabold"
                    )}
                    aria-current={item.active ? "page" : undefined}
                    {...bindPrimaryMenuItem(itemIndex)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

/**
 * `useMenu` provides a React Hook for managing menu state and attributes for accessibility.
 */
const useMenu = ({ navigationItems }) => {
  const menuId = useId()
  const rootElement = useRef<HTMLUListElement>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  /** `null` means the secondary menu is closed */
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null)
  const secondaryMenuOpen = openMenuIndex !== null

  // check for clicks outside of the menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!rootElement.current.contains(e.target as Node)) {
        setOpenMenuIndex(null)
      }
    }
    if (rootElement.current) {
      document.addEventListener("click", handleClickOutside, false)
    }
    return () => {
      document.removeEventListener("click", handleClickOutside, false)
    }
  }, [])

  // Element attributes / listeners
  const bindToggle = () => ({
    open: mobileMenuOpen,
    attributes: {
      "aria-expanded": mobileMenuOpen,
      "aria-controls": menuId,
    },
    onClick: () => setMobileMenuOpen(!mobileMenuOpen),
  })
  const bindPrimaryMenu = () => {
    return {
      ref: rootElement,
      id: menuId,
      onBlur: (e) => {
        const focusLeftMenu = !rootElement.current.contains(e.relatedTarget)
        /*if (focusLeftMenu) {
          setOpenMenuIndex(null)
          setMobileMenuOpen(false)
        }*/
      },
      onKeyDown: (e) => {
        if (e.key === "Escape") {
          if (openMenuIndex) {
            setOpenMenuIndex(null)
          } else {
            setMobileMenuOpen(false)
          }
        }
      },
    }
  }
  const bindPrimaryMenuItem = (
    itemIndex: number,
    { hasPopup } = { hasPopup: false }
  ) => {
    const isDropdownOpen = openMenuIndex === itemIndex
    const isExpanded = hasPopup && isDropdownOpen
    return {
      "aria-haspopup": hasPopup,
      "aria-expanded": hasPopup ? isExpanded : undefined,
      onKeyDown: (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          if (hasPopup) {
            e.preventDefault()
          }
          setOpenMenuIndex(itemIndex)
        }
      },
      onClick: () => {
        if (!hasPopup) {
          setMobileMenuOpen(false)
        }
      },
      onMouseDown: () => {
        if (hasPopup) {
          setOpenMenuIndex(isDropdownOpen ? null : itemIndex)
        } else {
          setOpenMenuIndex(null)
        }
      },
    }
  }
  const bindSecondaryMenuItem = (child) => {
    return {
      onKeyDown: (e) => {
        if (e.key === "Escape") {
          setOpenMenuIndex(null)
        }
      },
      onClick: () => {
        setMobileMenuOpen(false)
      },
      hrefLang: child.locale || undefined,
      lang: child.locale || undefined,
      role: "menuitem",
    }
  }

  return {
    mobileMenuOpen,
    openMenuIndex,
    bindToggle,
    bindPrimaryMenu,
    bindPrimaryMenuItem,
    bindSecondaryMenuItem,
    secondaryMenuOpen,
  }
}

export default Header
