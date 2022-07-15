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

const useMenu = ({ navigationItems }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [primaryMenuItemIndex, setPrimaryMenuItemIndex] = useState(0)
  const [secondaryMenuItemIndex, setSecondaryMenuItemIndex] = useState(null)
  const rootElement = useRef(null)

  // Navigation
  const navigateHorizontally = (direction) => {
    setPrimaryMenuItemIndex(
      (primaryMenuItemIndex + direction + navigationItems.length) %
        navigationItems.length
    )
    setSecondaryMenuItemIndex(null)
  }
  const navigateVertically = (direction) => {
    const secondaryItems = navigationItems[primaryMenuItemIndex].childItems
    if (secondaryItems) {
      if (secondaryMenuItemIndex === null) {
        setSecondaryMenuItemIndex(
          direction === 1 ? 0 : secondaryItems.length - 1
        )
      } else {
        setSecondaryMenuItemIndex(
          ((secondaryMenuItemIndex || 0) + direction + secondaryItems.length) %
            secondaryItems.length
        )
      }
    }
  }

  // Ensuring document.activeElement follows the menu's roving tabindex
  useEffect(
    function updateFocus() {
      rootElement.current
        .querySelector(`[tabindex="0"]`)
        .focus({ preventScroll: true })
    },
    [primaryMenuItemIndex, secondaryMenuItemIndex]
  )

  // Element attributes / listeners
  const bindToggle = () => ({
    open: mobileMenuOpen,
    onClick: () => setMobileMenuOpen(!mobileMenuOpen),
  })
  const bindPrimaryMenu = () => {
    return {
      role: "menubar",
      ref: rootElement,
      onKeyDown: (e) => {
        if (e.key === "Escape") {
          setMobileMenuOpen(false)
        }
        if (
          ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)
        ) {
          e.preventDefault()
          // prettier-ignore
          switch (e.key) {
            case "ArrowLeft":  navigateHorizontally(-1); break;
            case "ArrowRight": navigateHorizontally(+1); break;
            case "ArrowUp":    navigateVertically(-1); break;
            case "ArrowDown":  navigateVertically(+1); break;
          }
        }
      },
    }
  }
  const bindPrimaryMenuItem = (
    itemIndex,
    { hasPopup } = { hasPopup: false }
  ) => {
    const isActive = itemIndex === primaryMenuItemIndex
    const isDropdownClosed = secondaryMenuItemIndex === null
    const isSelectable = isActive && isDropdownClosed
    const isExpanded = hasPopup && isActive && !isDropdownClosed
    return {
      role: "menuitem",
      "aria-haspopup": hasPopup,
      "aria-expanded": isExpanded,
      tabIndex: isSelectable ? 0 : -1,
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          setSecondaryMenuItemIndex(0)
        }
      },
      onClick: () => {
        if (isActive) {
          setSecondaryMenuItemIndex(isDropdownClosed ? 0 : null)
        } else {
          setPrimaryMenuItemIndex(itemIndex)
          setSecondaryMenuItemIndex(0)
        }
      },
    }
  }
  const bindSecondaryMenu = () => ({ role: "menu" })
  const bindSecondaryMenuItem = (parentIndex, itemIndex) => {
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
  }
}

/**
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/disclosure/disclosure-navigation-hybrid.html
 */
const Header = () => {
  const [pageScrolled, setPageScrolled] = useState(false)
  const router = useRouter()

  const navigationItems = [
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
        value: router.asPath,
        label: locale.language,
      })),
    },
  ]

  const {
    mobileMenuOpen,
    primaryMenuItemIndex,
    secondaryMenuItemIndex,
    bindToggle,
    bindPrimaryMenu,
    bindPrimaryMenuItem,
    bindSecondaryMenu,
    bindSecondaryMenuItem,
  } = useMenu({ navigationItems })

  const checkPageScroll = (e) => {
    if (window.scrollY > 0) {
      setPageScrolled(true)
    } else {
      setPageScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", checkPageScroll)
    checkPageScroll()
  }, [])

  return (
    <div className="sticky top-0 z-10 mx-auto flex items-center justify-between py-4 text-white">
      <div
        className={classNames(
          "full-width-bg absolute -z-10 h-full transition-colors",
          pageScrolled && "bg-black"
        )}
      />
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
            "absolute w-screen gap-4 md:relative md:w-auto md:gap-10 md:p-4",
            {
              "hidden md:flex": !mobileMenuOpen,
              flex: mobileMenuOpen,
            }
          )}
        >
          {navigationItems.map((item, itemIndex) => (
            <li className="relative" key={item.key || item.value}>
              {Boolean(item.childItems) ? (
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
                          primaryMenuItemIndex === itemIndex &&
                          secondaryMenuItemIndex !== null,
                      })}
                    />
                  </button>

                  <ul
                    {...bindSecondaryMenu()}
                    className={classNames(
                      "absolute top-[100%] -right-4 flex flex-col rounded bg-eggplant p-4 md:shadow",
                      (primaryMenuItemIndex !== itemIndex ||
                        secondaryMenuItemIndex === null) &&
                        "md:sr-only"
                    )}
                  >
                    {item.childItems.map((child, childIndex) => (
                      <li key={child.key || child.value}>
                        <Link href={child.value} locale={child.locale}>
                          <a {...bindSecondaryMenuItem(itemIndex, childIndex)}>
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
  )
}
export default Header
