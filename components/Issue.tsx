export type IssueProps = {
  id: string
  title: string
  priority: number
  state: string
  parent?: {
    id: string
    title: string
  }
}

export type BarIconProps = {
  priority: number
  size: number
}

const PRIORITY_UNSET = 0
const PRIORITY_URGENT = 1
const PRIORITY_HIGH = 2
const PRIORITY_MEDIUM = 3
const PRIORITY_LOW = 4

export const BarIcon = ({ priority, size }: BarIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <rect x="1" y="8" width="3" height="6" rx="1" />
    <rect
      x="6"
      y="5"
      width="3"
      height="9"
      rx="1"
      fillOpacity={priority < 4 ? "1" : "0.4"}
    />
    <rect
      x="11"
      y="2"
      width="3"
      height="12"
      rx="1"
      fillOpacity={priority < 3 ? "1" : "0.4"}
    />
  </svg>
)

export const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="inline-block h-[1em] w-[1em]"
  >
    <path
      fillRule="evenodd"
      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
      clipRule="evenodd"
    />
  </svg>
)

export const Issue = ({ id, title, priority, state, parent }: IssueProps) => {
  return (
    <div className="b2 relative p-2">
      <div className="absolute -left-4 top-1/2 top-0 h-3 w-3 origin-center -translate-y-1/2 -translate-x-1/2 rounded-lg bg-eggplant md:-left-8">
        {state === "started" && priority === PRIORITY_URGENT && (
          <div className="absolute h-full w-full animate-ping rounded-full bg-eggplant opacity-75" />
        )}
      </div>

      <div className="flex items-center gap-1 md:gap-3">
        <div className="hidden w-[16px] flex-shrink-0 text-nightshade-300 md:block">
          {priority !== PRIORITY_UNSET && (
            <BarIcon priority={priority} size={16} />
          )}
        </div>
        <div className="w-20 flex-shrink-0 truncate text-gray-2">{id}</div>
        <div className="flex-auto gap-1 text-black">
          <span>{title}</span>

          {parent && (
            <span className="hidden md:block">
              <span className="flex-shrink-0 text-gray-2">
                <ChevronRight />
              </span>
              <span className="truncate text-gray-2">{parent.title}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Issue
