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
    <Link href={href}>
      <a
        className={classnames(
          "flex items-center justify-center rounded border-2 p-4 text-center !font-600 transition-colors hocus:border-dark-blurple hocus:bg-dark-blurple",
          borderless ? "border-white" : "border-accent-blurple",
          fullWidth ? "w-full" : "w-max",
          light
            ? "bg-white text-accent-blurple hocus:text-white"
            : "bg-accent-blurple text-white",
          size === "small" && "b3 h-10",
          size === "medium" && "b3 h-12",
          size === "large" && "b3 md:b1 h-12 md:h-16 md:px-6"
        )}
        {...linkAttrs}
      >
        {children}
      </a>
    </Link>
  )
}

export default LinkButton
