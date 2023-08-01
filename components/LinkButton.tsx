import Link from "next/link"
import classnames from "classnames"

type LinkButtonProps = {
  /** Renders without border, typically on a dark, illustrated background */
  borderless?: boolean
  /** Button's label */
  children: React.ReactNode
  /** Block button, fills parent's width */
  fullWidth?: boolean
  /** URL, either internal or external */
  href: string
  /** Light background */
  light?: boolean
  /** Buttons size, using `b3` typically, or `b1` on `large` */
  size: "small" | "medium" | "large"
}

/**
 * Default CTA component, renders links in a button style.
 */
const LinkButton = ({
  borderless,
  children,
  fullWidth,
  href,
  light,
  size,
}: LinkButtonProps) => {
  let linkAttrs: {
    target?: string
    rel?: string
  } = {}

  // check if absolute url
  if (href.indexOf("http://") === 0 || href.indexOf("https://") === 0) {
    linkAttrs.target = "_blank"
    linkAttrs.rel = "noopener noreferrer"
  }

  return (
    <Link
      href={href}
      className={classnames(
        "flex items-center justify-center rounded-md border-2 p-4 text-center !font-semibold transition-colors focus:outline-none hocus:border-blurple-600 hocus:bg-blurple-600 hocus:text-white",
        borderless ? "border-white" : "border-blurple-500",
        fullWidth ? "w-full" : "w-max",
        light ? "bg-white text-blurple-500" : "bg-blurple-500 text-white",
        size === "small" && "b3 h-10",
        size === "medium" && "b3 h-12",
        size === "large" && "b3 md:b1 h-12 md:h-16 md:px-6"
      )}
      {...linkAttrs}
    >
      {children}
    </Link>
  )
}

export default LinkButton
