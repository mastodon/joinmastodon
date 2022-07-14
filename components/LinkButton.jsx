import Link from "next/link"
import classnames from "classnames"

const LinkButton = ({ borderless, children, fullWidth, href, light }) => {
  let linkAttrs = {}

  // check if absolute url
  if (href.indexOf("http://") === 0 || href.indexOf("https://") === 0) {
    linkAttrs.target = "_blank"
    linkAttrs.rel = "noopener noreferrer"
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
