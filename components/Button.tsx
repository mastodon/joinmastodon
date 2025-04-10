import {
  Button as HeadlessButton,
  ButtonProps as HeadlessButtonProps,
} from "@headlessui/react"
import classNames from "classnames"

type ButtonProps = HeadlessButtonProps & {
  dark?: boolean
}

export function Button({
  children,
  className,
  dark = false,
  ...props
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <HeadlessButton
      {...props}
      className={classNames(
        className,
        "w-full p-2 flex gap-2 items-center justify-center rounded-md",
        "text-center font-semibold transition-colors focus:outline-none border-2",
        !dark &&
          "bg-white dark:bg-black hocus:bg-blurple-600 border-blurple-500 hocus:border-blurple-600 text-blurple-500 hocus:text-white",
        dark &&
          "bg-blurple-500 hocus:bg-blurple-600 border-[transparent] text-white"
      )}
    >
      {children}
    </HeadlessButton>
  )
}
