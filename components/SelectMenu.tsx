import SVG from "react-inlinesvg"

export type SelectMenuProps = {
  label: React.ReactNode
  onChange: (value: string) => void
  value: string
  options: {
    label: string
    value: string
  }[]
}
/** Styled replacement for <select> */
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
