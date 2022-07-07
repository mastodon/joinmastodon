import Link from "next/link"
import classnames from "classnames"

const LinkButton = ({ borderless, children, fullWidth, light, href }) => {
  return (
    <Link href={href}>
      <a
        className={classnames("b3", {
          borderless,
          full: fullWidth,
          light,
          primary: !light,
        })}
      >
        {children}
        <style jsx>{`
          a {
            border: var(--border-width) solid var(--accent-blurple);
            border-radius: var(--border-radius);
            display: block;
            padding: 1rem;
            width: max-content;
          }

          a:hover {
            background-color: var(--accent-blurple);
            border-color: var(--accent-blurple);
            color: white;
          }

          .borderless {
            border: 0;
          }

          .full {
            width: 100%;
          }

          .light {
            color: var(--accent-blurple);
          }

          .primary {
            background-color: var(--accent-blurple);
            color: var(--white);
          }
        `}</style>
      </a>
    </Link>
  )
}

export default LinkButton
