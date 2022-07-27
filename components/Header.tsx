import Link from "next/link"
import { FormattedMessage } from "react-intl"

import mastodonLogo from "../public/logos/logo-full-purple.svg"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import classNames from "classnames"
import { locales } from "../data/locales"
import MenuToggle from "./MenuToggle"
import SVG from "react-inlinesvg"

/**
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/disclosure/disclosure-navigation-hybrid.html
 */
const Header = () => {
  const [pageScrolled, setPageScrolled] = useState(false)

  const navigationItems = [
    {
      value: "/servers",
      label: <FormattedMessage id="servers" defaultMessage="Servers" />,
    },
    {
      value: "/apps",
      label: <FormattedMessage id="nav.apps" defaultMessage="Apps" />,
    },
    {
      value: "/sponsors",
      label: <FormattedMessage id="nav.sponsors" defaultMessage="Sponsors" />,
    },
    {
      value: "https://github.com/mastodon/mastodon",
      label: <FormattedMessage id="nav.code" defaultMessage="Code" />,
    },
    {
      key: "resources",
      label: <FormattedMessage id="nav.resources" defaultMessage="Resources" />,
      childItems: [
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
          label: (
            <FormattedMessage id="nav.docs" defaultMessage="Documentation" />
          ),
        },
      ],
    },
    {
      key: "locale",
      label: <>文A</>,
      childItems: locales.map((locale) => ({
        key: locale.code,
        locale: locale.code,
        scroll: false,
        value: "", // current page
        label: locale.language,
      })),
    },
  ]

  const {
    mobileMenuOpen,
    menuBarHasFocus,
    primaryMenuItemIndex,
    secondaryMenuItemIndex,
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
      className={classNames(
        "full-width-bg sticky -top-[var(--header-offset)] z-10 -mb-[var(--header-area)] pt-[var(--header-offset)] text-white transition-colors",
        pageScrolled && "bg-black"
      )}
    >
      <div className="full-width-bg__inner flex h-[var(--header-height)] items-center justify-between">
        <div>
          <Link href="/">
            <a className="flex max-w-[11.375rem] md:max-w-[12.625rem]">
              <Image src={mastodonLogo} alt="Mastodon" />
            </a>
          </Link>
        </div>

        <nav>
          <MenuToggle {...bindToggle()} />
          <ul
            {...bindPrimaryMenu()}
            className={classNames(
              "absolute w-screen gap-4 rounded focus-within:outline md:relative md:w-auto md:gap-10 md:p-4",
              mobileMenuOpen ? "flex" : "hidden md:flex"
            )}
          >
            {navigationItems.map((item, itemIndex) => (
              <li className="relative" key={item.key || item.value}>
                {"childItems" in item ? (
                  <>
                    <button
                      {...bindPrimaryMenuItem(itemIndex, { hasPopup: true })}
                      className="flex items-center gap-[0.125rem] whitespace-nowrap focus:outline-2"
                    >
                      {item.label}
                      <SVG
                        src={"/ui/disclosure-arrow.svg"}
                        className={classNames({
                          "rotate-180":
                            menuBarHasFocus &&
                            primaryMenuItemIndex === itemIndex &&
                            secondaryMenuItemIndex !== null,
                        })}
                      />
                    </button>

                    <ul
                      {...bindSecondaryMenu()}
                      className={classNames(
                        "absolute top-[100%] flex flex-col rounded bg-eggplant p-4 -inline-end-4 md:shadow",
                        (!menuBarHasFocus ||
                          primaryMenuItemIndex !== itemIndex ||
                          secondaryMenuItemIndex === null) &&
                          "md:sr-only"
                      )}
                    >
                      {item.childItems.map((child, childIndex) => (
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
                            >
                              {child.label}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={item.value}>
                    <a
                      className="whitespace-nowrap"
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

const useMenu = ({ navigationItems }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [primaryMenuItemIndex, setPrimaryMenuItemIndex] = useState<number>(0)
  /** `null` means the secondary menu is closed */
  const [secondaryMenuItemIndex, setSecondaryMenuItemIndex] = useState<
    number | null
  >(null)
  const [menuBarHasFocus, setMenuBarHasFocus] = useState<boolean>(false)
  const rootElement = useRef<HTMLUListElement>(null)
  const wasFocusedAtStartOfClick = useRef(menuBarHasFocus)

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
    if (menuBarHasFocus && rootElement.current) {
      const activeTabIndexElement =
        rootElement.current.querySelector<HTMLElement>(`[tabindex="0"]`)
      activeTabIndexElement?.focus({ preventScroll: true })
    }
  }, [menuBarHasFocus, primaryMenuItemIndex, secondaryMenuItemIndex])

  // Element attributes / listeners
  const bindToggle = () => ({
    open: mobileMenuOpen,
    onClick: () => setMobileMenuOpen(!mobileMenuOpen),
  })
  const bindPrimaryMenu = () => {
    return {
      role: "menubar",
      ref: rootElement,
      onFocus: () => {
        setMenuBarHasFocus(true)
      },
      onBlur: (e) => {
        const focusLeftMenu = !rootElement.current.contains(e.relatedTarget)
        if (focusLeftMenu) {
          setMenuBarHasFocus(false)
        }
      },
      onKeyDown: (e) => {
        const isRTL = Boolean(e.target?.closest("[dir='rtl']"))
        if (e.key === "Escape") {
          setMobileMenuOpen(false)
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
    const isExpanded =
      hasPopup && isActive && !isDropdownClosed && menuBarHasFocus
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
      onMouseDown: () => {
        wasFocusedAtStartOfClick.current = menuBarHasFocus
      },
      onClick: () => {
        if (isActive && hasPopup && wasFocusedAtStartOfClick.current) {
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
      hrefLang: child.locale || undefined,
      lang: child.locale || undefined,
      role: "menuitem",
    }
  }

  return {
    mobileMenuOpen,
    menuBarHasFocus,
    primaryMenuItemIndex,
    secondaryMenuItemIndex,
    bindToggle,
    bindPrimaryMenu,
    bindPrimaryMenuItem,
    bindSecondaryMenu,
    bindSecondaryMenuItem,
  }
}

export default Header
