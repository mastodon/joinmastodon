import Link from "next/link"
import { FormattedMessage } from "react-intl"

import mastodonLogo from "../public/logos/logo-full-purple.svg"
import Image from "next/image"
import { useState } from "react"
import classNames from "classnames"
import { locales } from "../data/locales"
import MenuToggle from "./MenuToggle"
import SVG from "react-inlinesvg"
import { useEffect } from "react"

/**
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/disclosure/disclosure-navigation-hybrid.html
 */
const Header = () => {
  const [pageScrolled, setPageScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [primaryMenuItemIndex, setPrimaryMenuItemIndex] = useState(0)
  const [secondaryMenuItemIndex, setSecondaryMenuItemIndex] = useState(null)

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
      options: [
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
      options:
        // TODO: append path
        locales.map((locale) => ({
          value: `/${locale.code}/path`,
          label: locale.language,
        })),
    },
  ]

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

  useEffect(
    function updateFocus() {
      const currentItem = document
        .querySelectorAll(`[role="menubar"] > li`)
        .item(primaryMenuItemIndex)
      let targetItem = currentItem
      if (
        secondaryMenuItemIndex !== null &&
        currentItem.getAttribute("aria-haspopup") === "true"
      ) {
        targetItem = currentItem
          .querySelectorAll(`li`)
          .item(secondaryMenuItemIndex)
      }
      targetItem.querySelector("a, button").focus()
    },
    [primaryMenuItemIndex, secondaryMenuItemIndex]
  )

  const navigateHorizontally = (direction) => {
    setPrimaryMenuItemIndex(
      (primaryMenuItemIndex + direction + navigationItems.length) %
        navigationItems.length
    )
    setSecondaryMenuItemIndex(null)
  }
  const navigateVertically = (direction) => {
    const secondaryItems = navigationItems[primaryMenuItemIndex].options
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

  return (
    <div className="sticky top-0 z-10 mx-auto flex items-center justify-between py-4 text-white">
      <div
        className={classNames(
          "full-width-bg absolute h-full transition-colors",
          pageScrolled && "bg-nightshade"
        )}
      />
      <div>
        <Link className="brand" href="/">
          <a className="flex max-w-[11.375rem] md:max-w-[12.625rem]">
            <Image className="link-logo" src={mastodonLogo} alt="Mastodon" />
          </a>
        </Link>
      </div>

      <nav>
        <MenuToggle
          open={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
        <ul
          className={classNames("gap-4 md:gap-10", {
            "hidden md:flex": !mobileMenuOpen,
            flex: mobileMenuOpen,
          })}
          role="menubar"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setMobileMenuOpen(false)
            }
            if (
              ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(
                e.key
              )
            ) {
              e.preventDefault()
              switch (e.key) {
                case "ArrowLeft":
                  navigateHorizontally(-1)
                  break
                case "ArrowRight":
                  navigateHorizontally(+1)
                  break
                case "ArrowUp":
                  navigateVertically(-1)
                  break
                case "ArrowDown":
                  navigateVertically(+1)
                  break
              }
            }
          }}
        >
          {navigationItems.map((item, itemIndex) => (
            <li
              className="relative"
              key={item.key || item.value}
              role="menuitem"
              aria-haspopup={Boolean(item.options)}
              aria-expanded={primaryMenuItemIndex === itemIndex}
              onBlur={() => {
                console.log("blurred")
              }}
            >
              {Boolean(item.options) ? (
                <>
                  <button
                    role="menuitem"
                    className="flex items-center gap-[0.125rem] focus:outline-2"
                    tabIndex={
                      primaryMenuItemIndex === itemIndex &&
                      secondaryMenuItemIndex === null
                        ? 0
                        : -1
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        setSecondaryMenuItemIndex(0)
                      }
                    }}
                    onClick={() => {
                      if (itemIndex === primaryMenuItemIndex) {
                        setSecondaryMenuItemIndex(
                          secondaryMenuItemIndex === null ? 0 : null
                        )
                      } else {
                        setPrimaryMenuItemIndex(itemIndex)
                        setSecondaryMenuItemIndex(0)
                      }
                    }}
                  >
                    {item.label}
                    <SVG
                      src={"/ui/disclosure-arrow.svg"}
                      className={classNames({
                        "rotate-180": mobileMenuOpen,
                      })}
                    />
                  </button>

                  <ul
                    className={classNames(
                      "absolute top-[100%] -right-4 flex flex-col rounded bg-dark-blurple p-4",
                      (primaryMenuItemIndex !== itemIndex ||
                        secondaryMenuItemIndex === null) &&
                        "md:sr-only"
                    )}
                  >
                    {item.options.map((option, optionIndex) => (
                      <li key={option.value}>
                        <Link href={option.value}>
                          <a
                            tabIndex={
                              secondaryMenuItemIndex === optionIndex ? 0 : -1
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Escape") {
                                console.log("escaped")
                                setSecondaryMenuItemIndex(null)
                              }
                            }}
                          >
                            {option.label}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={item.value}>
                  <a
                    role="menuitem"
                    tabIndex={primaryMenuItemIndex === itemIndex ? 0 : -1}
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
