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

  return (
    <Link href={href}>
      <a
        className={classnames(
          "b3 block w-max rounded border-2 border-accent-blurple  p-4 !font-600  transition-all hover:border-dark-blurple hover:bg-dark-blurple",
          {
            "border-white": borderless,
            "w-full": fullWidth,
            "bg-accent-blurple text-white": !light,
            "bg-white text-accent-blurple hover:text-white": light,
          }
        )}
        target={isExternalURL(href) && "_blank"}
        rel={isExternalURL(href) && "noopener noreferrer"}
      >
        {children}
      </a>
    </Link>
  )
}

export default LinkButton
