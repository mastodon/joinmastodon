import classNames from "classnames"
import { useEffect } from "react"

export type MenuToggleProps = {
  /** Open state of the toggle, controls HTML element's overflow as well */
  open: boolean
  /** Toggle's button click handler */
  onClick: () => void
  /** Misc. attributes (eg. aria-*) */
  attributes: React.ComponentPropsWithoutRef<"button">
}
/**
 * Mobile menu toggle
 * Also controls scrollability of the page
 */
export const MenuToggle = ({ open, onClick, attributes }: MenuToggleProps) => {
  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", open)
    document.documentElement.classList.toggle("md:overflow-auto", open)
  }, [open])
  return (
    <button
      onClick={onClick}
      className="relative z-10 md:hidden"
      {...attributes}
    >
      <svg
        width="27"
        height="19"
        viewBox="0 0 27 19"
        className="overflow-visible"
      >
        <line
          className={classNames(
            "origin-center stroke-white transition-all",
            open && "-translate-x-1 translate-y-[0.37rem] rotate-45"
          )}
          y1="1.5"
          x2="27"
          y2="1.5"
          strokeWidth="3"
        />
        <line
          className={classNames(
            "origin-center stroke-white transition-all",
            open && "opacity-0"
          )}
          y1="9.50002"
          x2="27"
          y2="9.50002"
          strokeWidth="3"
        />
        <line
          className={classNames(
            "origin-center stroke-white transition-all",
            open && "-translate-x-1 -translate-y-[0.37rem] -rotate-45"
          )}
          y1="17.5"
          x2="27"
          y2="17.5"
          strokeWidth="3"
        />
      </svg>
    </button>
  )
}

export default MenuToggle
