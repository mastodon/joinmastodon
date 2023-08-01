import Link from "next/link"
import Arrow from "../public/ui/arrow-right.svg?inline"

const LinkWithArrow = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <Link href={href}>
    <a className="inline-flex items-center gap-1 font-semibold text-blurple-600 hocus:underline">
      {children}
      <Arrow className="h-[1em] flex-shrink-0" />
    </a>
  </Link>
)

export default LinkWithArrow
