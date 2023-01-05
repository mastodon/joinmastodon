export type IssueProps = {
  id: string
  title: string
  priority: number
  state: string
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
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
    <rect x="1" y="8" width="3" height="6" rx="1" />
    <rect x="6" y="5" width="3" height="9" rx="1" fillOpacity={priority < 4 ? "1" : "0.4"} />
    <rect x="11" y="2" width="3" height="12" rx="1" fillOpacity={priority < 3 ? "1" : "0.4"} />
  </svg>
)

export const Issue = ({ id, title, priority, state }: IssueProps) => {
  return (
    <div className="relative b2 p-2 rounded">
      <div className="absolute -left-8 top-1/2 origin-center -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-lg bg-eggplant">
        {(state === "started" && priority === PRIORITY_URGENT) && <div className="absolute animate-ping h-full w-full rounded-full bg-eggplant opacity-75" />}
      </div>

      <div className="relative flex gap-3 items-center truncate">
        <div className="hidden md:block flex-shrink-0 text-nightshade-300 w-[16px]">{priority !== PRIORITY_UNSET && <BarIcon priority={priority} size={16} />}</div>
        <div className="hidden md:block flex-shrink-0 w-16 text-gray-2 truncate">{id}</div>
        <div className="text-black truncate">{title}</div>
      </div>
    </div>
  )
}

export default Issue
