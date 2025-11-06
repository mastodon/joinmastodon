import { defineMessages, useIntl } from "react-intl"

import CheckIcon from "../public/icons/check.svg?inline"
import ExploringIcon from "../public/icons/exploring.svg?inline"
import NextIcon from "../public/icons/next-release.svg?inline"
import WorkingIcon from "../public/icons/working.svg?inline"
import classNames from "classnames"

interface RoadmapStatusProps {
  status: "exploring" | "working" | "next" | "released"
}

const messages = defineMessages({
  exploring: {
    id: "roadmap.status.exploring",
    defaultMessage: "Exploring",
    icon: ExploringIcon,
  },
  working: {
    id: "roadmap.status.working",
    defaultMessage: "Working",
    icon: WorkingIcon,
  },
  next: {
    id: "roadmap.status.next",
    defaultMessage: "Next release",
    icon: NextIcon,
  },
  released: {
    id: "roadmap.status.released",
    defaultMessage: "Released",
    icon: CheckIcon,
  },
})

export function RoadmapStatus({ status }: RoadmapStatusProps) {
  const intl = useIntl()
  const Icon = messages[status].icon
  return (
    <span
      className={classNames(
        "px-3 py-1 text-b4 inline-flex gap-1 items-center rounded-md whitespace-nowrap",
        {
          "bg-[hsl(234,100%,94%)] text-blurple-600": status === "released",
          "bg-[hsl(141,84%,93%)] text-[hsl(141,100%,19%)]": status === "next",
          "bg-[hsl(48,97%,89%)] text-[hsl(23,91%,25%)]": status === "working",
          "bg-[hsl(0,100%,91%)] text-[hsl(0,100%,25%)]": status === "exploring",
        }
      )}
    >
      {Icon && <Icon className="size-4" />}
      {intl.formatMessage(messages[status])}
    </span>
  )
}
