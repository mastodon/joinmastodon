import classnames from "classnames"
import SVG from "react-inlinesvg"

export type IconCardProps = {
  /** Card's heading */
  title: React.ReactNode
  /** Card's visual element, using a predefined set of icons */
  icon: string
  /** Card's copy */
  copy: React.ReactNode
}
/**
 * IconCard component.
 * Layout (width, height, positioning) can be set from the parent.
 */
export const IconCard = ({ title, icon, copy }: IconCardProps) => {
  return (
    <div className="flex flex-col items-center justify-start overflow-hidden rounded bg-white text-center shadow">
      <div className="flex h-44 w-full items-center justify-center bg-accent-blurple text-white">
        <div className="h-[7.5rem] w-[7.5rem]">
          <SVG src={`/icons/${icon}.svg`} />
        </div>
      </div>
      <div className="pt-3rem flex flex-col gap-2 p-8">
        <h3 className="h5">{title}</h3>
        <p className="b2">{copy}</p>
      </div>
    </div>
  )
}
