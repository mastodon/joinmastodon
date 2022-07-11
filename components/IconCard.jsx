import classnames from "classnames"
import SVG from "react-inlinesvg"

/**
 * IconCard component.
 * Layout (width, height, positioning) can be set from the parent.
 * @param {{
 *  title: React.ReactNode,
 *  icon: string,
 *  copy: React.ReactNode
 * }} props
 */
export const IconCard = ({ title, icon, copy }) => {
  return (
    <div className="pt-3rem flex flex-col items-center justify-start gap-8 rounded bg-white p-8 text-center shadow">
      <div className="h-[7.5rem] w-[7.5rem]">
        <SVG src={`/icons/${icon}.svg`} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="h5">{title}</h3>
        <p className="b2">{copy}</p>
      </div>
    </div>
  )
}
