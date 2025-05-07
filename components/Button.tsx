import {
  Button as HeadlessButton,
  ButtonProps as HeadlessButtonProps,
} from "@headlessui/react"
import classNames from "classnames"

export type ButtonProps = HeadlessButtonProps & {
  dark?: boolean
  size?: "small" | "medium" | "large"
  fullWidth?: boolean
  borderless?: boolean
}

export function Button({
  children,
  className,
  dark = false,
  size = "medium",
  fullWidth = false,
  borderless = false,
  ...props
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <HeadlessButton
      {...props}
      className={classNames(
        className,
        "p-2 flex gap-2 items-center justify-center rounded-md",
        fullWidth ? "w-full" : "w-max",
        size === "small" && "b3 h-10",
        size === "medium" && "b3 h-12",
        size === "large" && "b3 md:b1 h-12 md:h-16 md:px-6",
        "text-center font-semibold transition-colors focus:outline-none disabled:cursor-default",
        "disabled:bg-gray-2 disabled:hocus:bg-gray-2 disabled:text-white",
        !dark &&
          "bg-white dark:bg-black hocus:bg-blurple-600 text-blurple-500 hocus:text-white",
        dark && "bg-blurple-500 hocus:bg-blurple-600 text-white",
        !borderless &&
          "border-2 border-blurple-500 hocus:border-blurple-600 disabled:border-gray-2 disabled:hocus:border-gray-2"
      )}
    >
      {children}
    </HeadlessButton>
  )
}
