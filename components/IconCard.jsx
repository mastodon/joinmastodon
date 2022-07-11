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
    <div className="flex flex-col items-center text-center gap-8 justify-start p-8 pt-3rem bg-white shadow-default radius-default">
      <div className="w-[7.5rem] h-[7.5rem]">
        <SVG src={`/icons/${icon}.svg`} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="h5">{title}</h3>
        <p className="b2">{copy}</p>
      </div>
    </div>
  )
}
