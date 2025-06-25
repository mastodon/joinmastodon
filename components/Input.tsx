import {
  Input as HeadlessInput,
  InputProps as HeadlessInputProps,
} from "@headlessui/react"
import classNames from "classnames"

export type InputProps = HeadlessInputProps & {
  fullWidth?: boolean
}

export function Input({
  className,
  disabled,
  fullWidth = false,
  ...props
}: InputProps) {
  return (
    <HeadlessInput
      className={classNames(
        className,
        fullWidth && "w-full",
        "px-4 py-2 rounded-md outline-none transition-all",
        "border border-blurple-500 focus:shadow-input",
        "placeholder:text-gray-2",
        "disabled:border-gray-2"
      )}
      disabled={disabled}
      {...props}
    />
  )
}
