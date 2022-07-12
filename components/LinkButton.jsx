import Link from "next/link"
import classnames from "classnames"

const LinkButton = ({ borderless, children, fullWidth, href, light }) => {
  const isExternalURL = (url) => {
    try {
      return new URL(url).origin !== location.origin
    } catch (_) {
      return false
    }
  }

  let linkAttrs

  // check if we're on the client side + check if it's an external url
  if (typeof window && isExternalURL(href)) {
    linkAttrs = {
      target: "_blank",
      rel: "noopener noreferrer",
    }
  }

  return (
    <Link href={href}>
      <a
        className={classnames(
          "b3 block rounded border-2 p-4 text-center !font-600 transition-all hover:border-dark-blurple hover:bg-dark-blurple",
          borderless ? "border-white" : "border-accent-blurple",
          fullWidth ? "w-full" : "w-max",
          light
            ? "bg-white text-accent-blurple hover:text-white"
            : "bg-accent-blurple text-white"
        )}
        {...linkAttrs}
      >
        {children}
      </a>
    </Link>
  )
}

export default LinkButton
