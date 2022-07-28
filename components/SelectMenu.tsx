import SVG from "react-inlinesvg"

export type SelectMenuProps = {
  /** The label shown before the dropdown */
  label: React.ReactNode
  /** Callback that sends along the current value of the input */
  onChange: (value: string) => void
  /** Controlled current value */
  value: string
  /** Options (passed to `<option>`s) of the input */
  options: {
    label: React.ReactNode
    value: string
  }[]
}
/** Styled replacement for <select> inputs */
export const SelectMenu = ({
  label,
  onChange,
  options,
  value,
}: SelectMenuProps) => {
  return (
    <label className="b2 inline-flex h-10 items-center gap-2">
      <span className="text-gray-1">{label}:</span>
      <div className="relative flex">
        <select
          className="h-10 appearance-none rounded bg-[transparent] pie-7 pis-2"
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map(({ label: optionLabel, value: optionValue }) => (
            <option
              key={optionValue}
              value={optionValue}
              selected={optionValue === value}
            >
              {optionLabel}
            </option>
          ))}
        </select>
        <SVG
          className="pointer-events-none absolute text-gray-1 inline-end-2 block-start-4"
          src={"/ui/disclosure-arrow.svg"}
        />
      </div>
    </label>
  )
}
export default SelectMenu
