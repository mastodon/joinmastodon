import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react"
import classNames from "classnames"
import DisclosureArrow from "../public/ui/disclosure-arrow.svg?inline"

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
  const selectedLabel = options.find((option) => option.value === value)?.label

  return (
    <Listbox value={value} onChange={onChange}>
      <div className="b3 inline-flex w-full sm:w-auto">
        <div className="w-full relative">
          <ListboxButton className="flex w-full items-center gap-2 cursor-pointer rounded-md border border-gray-3 p-4 text-left focus:outline-none focus:ring-1 focus:ring-blurple-500 sm:w-auto">
            <span className="block truncate text-gray-1">
              <span className="font-medium">{label}: </span>
              <span className="font-bold">{selectedLabel}</span>
            </span>

            <span className="pointer-events-none">
              <DisclosureArrow
                className="h-4 w-4 text-gray-2"
                fill="currentColor"
              />
            </span>
          </ListboxButton>

          <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full min-w-max overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-gray-3 focus:outline-none">
            {options.map(({ label: optionLabel, value: optionValue }) => (
              <ListboxOption
                key={optionValue}
                value={optionValue}
                className={({ focus }) =>
                  classNames(
                    focus ? "bg-blurple-500 text-white" : "text-gray-1",
                    "relative cursor-pointer select-none py-3 px-4 font-medium text-gray-1"
                  )
                }
              >
                {({ selected }) => (
                  <>
                    <span className={selected ? "font-bold" : ""}>
                      {optionLabel}
                    </span>
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </div>
    </Listbox>
  )
}
export default SelectMenu
