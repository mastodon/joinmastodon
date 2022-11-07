import SVG from "react-inlinesvg"
import { Listbox } from "@headlessui/react"
import classNames from "classnames"

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
  const selectedLabel = options.find(option => option.value === value)?.label;

  return (
    <Listbox value={value} onChange={onChange}>
      <div className="b3 inline-flex w-full sm:w-auto">
        <div className="relative w-full sm:w-auto">
          <Listbox.Button className="w-full sm:w-auto relative cursor-pointer rounded-md border border-gray-3 py-4 pl-4 pr-10 text-left focus:outline-none focus:ring-1 focus:ring-blurple-500">
            <span className="block truncate text-gray-1">
              <span className="font-medium">{label}:{" "}</span>
              <span className="font-bold">{selectedLabel}</span>
            </span>

            <span className="pointer-events-none absolute inline-end-3 block-start-5">
              <SVG className="h-4 w-4 text-gray-2" fill="currentColor" src="/ui/disclosure-arrow.svg" />
            </span>
          </Listbox.Button>

          <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full min-w-max overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-gray-3 focus:outline-none">
            {options.map(({ label: optionLabel, value: optionValue }) => (
              <Listbox.Option key={optionValue} value={optionValue} className={({ active }) => classNames(active ? "text-white bg-blurple-500" : "text-gray-1", "relative text-gray-1 cursor-pointer select-none py-3 px-4 font-medium")}>
                {({ selected }) => (
                  <>
                    <span className={selected ? "font-bold" : ""}>{optionLabel}</span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </div>
    </Listbox>
  )
}
export default SelectMenu
