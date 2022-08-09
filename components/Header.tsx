import Link from "next/link"
import { FormattedMessage } from "react-intl"

import mastodonLogo from "../public/logos/logo-full-purple.svg"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import classNames from "classnames"
import { locales } from "../data/locales"
import MenuToggle from "./MenuToggle"
import SVG from "react-inlinesvg"
import { useRouter } from "next/router"

/** Sitewide header and navigation */
const Header = () => {
  const router = useRouter()
  const [pageScrolled, setPageScrolled] = useState(false)

  // prettier-ignore
  const navigationItems = [
    {
      value: "/servers",
      label: <FormattedMessage id="servers" defaultMessage="Servers" />,
    }, {
      value: "/apps",
      label: <FormattedMessage id="nav.apps" defaultMessage="Apps" />,
    }, {
      value: "/sponsors",
      label: <FormattedMessage id="nav.sponsors" defaultMessage="Sponsors" />,
    }, {
      key: "resources",
      label: <FormattedMessage id="nav.resources" defaultMessage="Resources" />,
      childItems: [
        {
          value: "https://blog.joinmastodon.org/",
          label: <FormattedMessage id="nav.blog.title" defaultMessage="Blog" />,
          description: <FormattedMessage id="nav.blog.description" defaultMessage="Description for the blog" />,
        }, {
          value: "https://github.com/mastodon/mastodon/discussions",
          label: <FormattedMessage id="nav.support.title" defaultMessage="Support" />,
          description: <FormattedMessage id="nav.support.description" defaultMessage="Description for support" />,
        }, {
          value: "https://github.com/mastodon/mastodon",
          label: <FormattedMessage id="nav.code.title" defaultMessage="Code" />,
          description: <FormattedMessage id="nav.code.description" defaultMessage="Code on GitHub. Description for code" />,
        }, {
          value: "https://docs.joinmastodon.org",
          label: <FormattedMessage id="nav.docs.title" defaultMessage="Documentation" />,
          description: <FormattedMessage id="nav.docs.description" defaultMessage="Description for documentation" />,
        }
      ],
    }, {
      key: "locale",
      label: <>文A</>,
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
    primaryMenuItemIndex,
    secondaryMenuItemIndex,
    secondaryMenuOpen,
    bindToggle,
    bindPrimaryMenu,
    bindPrimaryMenuItem,
    bindSecondaryMenu,
    bindSecondaryMenuItem,
  } = useMenu({ navigationItems })

  const checkPageScroll = () => {
    setPageScrolled(window.scrollY > 0)
  }
  useEffect(() => {
    window.addEventListener("scroll", checkPageScroll)
    checkPageScroll()
  }, [])

  return (
    <header
      // background needs to be on the ::before for now to get around nested compositing bug in chrome
      className={classNames(
        'full-width-bg sticky -top-[var(--header-offset)] z-10 -mb-[var(--header-area)] pt-[var(--header-offset)] text-white before:absolute before:inset-0 before:bg-black-transparent before:backdrop-blur-sm before:transition-opacity before:content-[""]',
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
              "fixed inset-0 w-screen flex-col overflow-auto bg-black px-1 pt-[calc(var(--header-area)_+_1rem)] pb-8 focus-visible-within:outline md:relative md:w-auto md:flex-row md:gap-1 md:overflow-visible md:rounded-md md:bg-[transparent] md:p-1 md:-mie-1 md:mis-0",
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
                          "rotate-180":
                            primaryMenuItemIndex === itemIndex &&
                            secondaryMenuOpen,
                        })}
                      />
                    </button>

                    <ul
                      {...bindSecondaryMenu()}
                      className={classNames(
                        "top-full flex flex-col rounded-md  inline-end-0 md:absolute md:max-h-[calc(100vh_-_var(--header-height))] md:bg-black-transparent md:shadow md:backdrop-blur-sm",
                        primaryMenuItemIndex !== itemIndex || !secondaryMenuOpen
                          ? "sr-only"
                          : "overflow-auto",
                        item.compact ? "md:p-4" : "min-w-[20ch] py-2 md:px-2"
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
                              {...bindSecondaryMenuItem(
                                itemIndex,
                                childIndex,
                                child
                              )}
                              className={classNames(
                                "block rounded hover:bg-eggplant hover:md:bg-gray-0",
                                item.compact
                                  ? "px-5 md:px-2"
                                  : "py-3 px-5 font-600 md:px-4",
                                child.active && "font-800"
                              )}
                              aria-current={child.active ? "page" : undefined}
                            >
                              <span className="block">{child.label}</span>
                              <span className="b3 block text-gray-2">
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
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/disclosure/disclosure-navigation-hybrid.html
 */
const useMenu = ({ navigationItems }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [primaryMenuItemIndex, setPrimaryMenuItemIndex] = useState<number>(0)
  /** `null` means the secondary menu is closed */
  const [secondaryMenuItemIndex, setSecondaryMenuItemIndex] = useState<
    number | null
  >(null)
  const rootElement = useRef<HTMLUListElement>(null)
  const secondaryMenuOpen = secondaryMenuItemIndex !== null

  // Navigation Callbacks
  const navigateHorizontally = (direction: -1 | 1) => {
    setPrimaryMenuItemIndex(
      (primaryMenuItemIndex + direction + navigationItems.length) %
        navigationItems.length
    )
    setSecondaryMenuItemIndex(null)
  }
  const navigateVertically = (direction: -1 | 1) => {
    const secondaryItems = navigationItems[primaryMenuItemIndex].childItems
    if (secondaryItems) {
      const isDropdownOpen = secondaryMenuItemIndex !== null
      if (isDropdownOpen) {
        // Select the next/previous item
        setSecondaryMenuItemIndex(
          ((secondaryMenuItemIndex || 0) + direction + secondaryItems.length) %
            secondaryItems.length
        )
      } else {
        // Select the first/last item
        setSecondaryMenuItemIndex(
          direction === 1 ? 0 : secondaryItems.length - 1
        )
      }
    }
  }

  // Ensuring document.activeElement follows the menu's roving tabindex
  useEffect(() => {
    if (rootElement.current) {
      // only update focus if we're in the menu's focus already
      const focusInMenu = rootElement.current.contains(document.activeElement)
      if (focusInMenu) {
        const activeTabIndexElement =
          rootElement.current.querySelector<HTMLElement>(`[tabindex="0"]`)
        activeTabIndexElement?.focus({ preventScroll: true })
      }
    }
  }, [primaryMenuItemIndex, secondaryMenuItemIndex])

  // check for clicks outside of the menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!rootElement.current.contains(e.target as Node)) {
        setSecondaryMenuItemIndex(null)
      }
    }
    if (rootElement.current) {
      document.addEventListener("click", handleClickOutside)
    }
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  // Element attributes / listeners
  const bindToggle = () => ({
    open: mobileMenuOpen,
    onClick: () => setMobileMenuOpen(!mobileMenuOpen),
  })
  const bindPrimaryMenu = () => {
    return {
      role: "menubar",
      ref: rootElement,
      onBlur: (e) => {
        const focusLeftMenu = !rootElement.current.contains(e.relatedTarget)
        if (focusLeftMenu) {
          setSecondaryMenuItemIndex(null)
        }
      },
      onKeyDown: (e) => {
        const isRTL = Boolean(e.target?.closest("[dir='rtl']"))
        if (e.key === "Escape") {
          if (!secondaryMenuOpen) {
            setMobileMenuOpen(false)
          }
        }
        if (
          ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)
        ) {
          e.preventDefault()
          // prettier-ignore
          switch (e.key) {
            case "ArrowLeft":  navigateHorizontally(isRTL ? +1 : -1); break;
            case "ArrowRight": navigateHorizontally(isRTL ? -1 : +1); break;
            case "ArrowUp":    navigateVertically(-1); break;
            case "ArrowDown":  navigateVertically(+1); break;
          }
        }
      },
    }
  }
  const bindPrimaryMenuItem = (
    itemIndex: number,
    { hasPopup } = { hasPopup: false }
  ) => {
    const isActive = itemIndex === primaryMenuItemIndex
    const isDropdownClosed = secondaryMenuItemIndex === null
    const isSelectable = isActive && isDropdownClosed
    const isExpanded = hasPopup && isActive && !isDropdownClosed
    return {
      role: "menuitem",
      "aria-haspopup": hasPopup,
      "aria-expanded": hasPopup ? isExpanded : undefined,
      tabIndex: isSelectable ? 0 : -1,
      onKeyDown: (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          if (hasPopup) {
            e.preventDefault()
          }
          setSecondaryMenuItemIndex(0)
        }
      },
      onClick: () => {
        if (!hasPopup) {
          setMobileMenuOpen(false)
        }
      },
      onMouseDown: () => {
        if (isActive && hasPopup) {
          setSecondaryMenuItemIndex(isDropdownClosed ? 0 : null)
        } else {
          setPrimaryMenuItemIndex(itemIndex)
          setSecondaryMenuItemIndex(0)
        }
      },
    }
  }
  const bindSecondaryMenu = () => ({ role: "menu" })
  const bindSecondaryMenuItem = (
    parentIndex: number,
    itemIndex: number,
    child
  ) => {
    const isSelectable =
      parentIndex === primaryMenuItemIndex &&
      itemIndex === secondaryMenuItemIndex
    return {
      tabIndex: isSelectable ? 0 : -1,
      onKeyDown: (e) => {
        if (e.key === "Escape") {
          setSecondaryMenuItemIndex(null)
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
    primaryMenuItemIndex,
    secondaryMenuItemIndex,
    bindToggle,
    bindPrimaryMenu,
    bindPrimaryMenuItem,
    bindSecondaryMenu,
    bindSecondaryMenuItem,
    secondaryMenuOpen,
  }
}

export default Header
