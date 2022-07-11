import Link from "next/link"
import classnames from "classnames"

const LinkButton = ({ borderless, children, fullWidth, href, light }) => {
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
      >
        {children}
      </a>
    </Link>
  )
}

export default LinkButton
