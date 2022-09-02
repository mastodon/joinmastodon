import Link from "next/link"
import { FormattedMessage, useIntl } from "react-intl"

import mastodonLogo from "../public/logos/logo-full-purple.svg"
import Image from "next/image"
import { useState, useEffect, useRef, useId } from "react"
import classNames from "classnames"
import { locales } from "../data/locales"
import MenuToggle from "./MenuToggle"
import SVG from "react-inlinesvg"
import { useRouter } from "next/router"

/** Sitewide header and navigation */
const Header = () => {
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
      value: "/sponsors",
      label: <FormattedMessage id="nav.sponsors.title" defaultMessage="Sponsors" />,
    }, {
      key: "resources",
      label: <FormattedMessage id="nav.resources.title" defaultMessage="Resources" />,
      childItems: [
        {
          value: "https://blog.joinmastodon.org/",
          label: <FormattedMessage id="nav.blog.title" defaultMessage="Blog" />,
          description: <FormattedMessage id="nav.blog.description" defaultMessage="Mastodon news and updates" />,
        }, {
          value: "https://docs.joinmastodon.org",
          label: <FormattedMessage id="nav.docs.title" defaultMessage="Documentation" />,
          description: <FormattedMessage id="nav.docs.description" defaultMessage="API reference and technical overview" />,
        }, {
          value: "https://github.com/mastodon/mastodon/discussions",
          label: <FormattedMessage id="nav.support.title" defaultMessage="Support" />,
          description: <FormattedMessage id="nav.support.description" defaultMessage="Q&A and community discussions on GitHub" />,
        }, {
          value: "https://github.com/mastodon/mastodon",
          label: <FormattedMessage id="nav.code.title" defaultMessage="Code" />,
          description: <FormattedMessage id="nav.code.description" defaultMessage="Source code for Mastodon on GitHub" />,
        },
      ],
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
        'full-width-bg sticky -top-[var(--header-offset)] z-10 -mb-[var(--header-area)] pt-[var(--header-offset)] text-white before:absolute before:inset-0 before:bg-nightshade/[0.95] before:backdrop-blur before:transition-opacity before:content-[""]',
        pageScrolled ? "before:opacity-100" : "before:opacity-0"
      )}
    >
      <div className="full-width-bg__inner flex h-[var(--header-height)] items-center justify-between">
        <div>
          <Link href="/">
            <a className="relative z-10 flex max-w-[11.375rem] md:max-w-[12.625rem]">
              <Image src={mastodonLogo} alt="Mastodon" />
            </a>
          </Link>
        </div>

        <nav>
          <MenuToggle {...bindToggle()} />
          <ul
            {...bindPrimaryMenu()}
            className={classNames(
              "fixed inset-0 w-screen flex-col overflow-auto bg-black px-1 pt-[calc(var(--header-area)_+_1rem)] pb-8 md:relative md:w-auto md:flex-row md:gap-1 md:overflow-visible md:rounded-md md:bg-[transparent] md:p-1 md:-mie-1 md:mis-0",
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
                      className="flex items-center gap-[0.125rem] whitespace-nowrap rounded-md p-3 px-5 text-h5 focus:outline-2 md:text-b2 md:font-450"
                    >
                      {item.label}
                      <SVG
                        src={"/ui/disclosure-arrow.svg"}
                        className={classNames({
                          "rotate-180": openMenuIndex === itemIndex,
                        })}
                      />
                    </button>

                    <ul
                      className={classNames(
                        "top-full rounded-md inline-end-0 md:absolute md:max-h-[calc(100vh_-_var(--header-height))] md:text-black md:shadow-lg md:bg-white",
                        openMenuIndex === itemIndex
                          ? "md:grid overflow-auto"
                          : "hidden",
                        item.compact ? "py-2 md:px-2" : "py-2 md:px-3 md:py-4 w-screen max-w-md md:grid-cols-2 md:gap-6"
                      )}
                    >
                      {item.childItems.map((child, childIndex) => (
                        // Child Items
                        <li key={child.key || child.value}>
                          <Link
                            href={child.value}
                            locale={child.locale || undefined}
                            scroll={child.scroll ?? true}
                          >
                            <a
                              {...bindSecondaryMenuItem(child)}
                              className={classNames(
                                "block rounded-md hover:bg-eggplant hover:md:bg-nightshade-50",
                                item.compact
                                  ? "py-2 px-5 md:px-4"
                                  : "py-3 px-5 md:px-4",
                                (item.compact && child.active) && "font-800"
                              )}
                              aria-current={child.active ? "page" : undefined}
                            >
                              <span className={classNames("block", !item.compact && "font-800")}>{child.label}</span>
                              <span className="mt-1 block text-gray-1">
                                {child.description}
                              </span>
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  // Top-level Link
                  <Link href={item.value}>
                    <a
                      className={classNames(
                        "block whitespace-nowrap rounded-md p-3 px-5 text-h5 md:text-b2",
                        item.active && "font-800"
                      )}
                      aria-current={item.active ? "page" : undefined}
                      {...bindPrimaryMenuItem(itemIndex)}
                    >
                      {item.label}
                    </a>
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
