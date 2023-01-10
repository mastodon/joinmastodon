import Link from "next/link"
import Arrow from "../public/ui/arrow-right.svg?inline"

const LinkWithArrow = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link href={href}>
    <a className="font-semibold text-blurple-600 hocus:underline inline-flex items-center gap-1">
      {children}
      <Arrow className="flex-shrink-0 h-[1em]" />
    </a>
  </Link>
)

export default LinkWithArrow
