import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import { FormattedMessage } from "react-intl"
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react"
import classNames from "classnames"

import { Button, ButtonProps } from "../components/Button"
import CloseIcon from "../public/icons/close.svg?inline"
import LoadingIcon from "../public/icons/loading.svg?inline"

import { isPopupMessage } from "./utils"

import type { Step } from "./types"

export function DonatePopup({
  children,
  ...buttonProps
}: PropsWithChildren<ButtonProps>) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const [open, setOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState<Step>("loading")

  const handleOpen = useCallback(() => {
    setOpen(true)
    setCurrentStep("loading")
  }, [])
  const handleClose = useCallback(() => {
    setOpen(false)
    setTimeout(() => setCurrentStep("loading"), 300)
  }, [])

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const message = event.data
      if (!isPopupMessage(message)) {
        return
      }

      switch (message.action) {
        case "widget-loaded":
          setCurrentStep("choose")
          break
        case "checkout-loaded":
          setCurrentStep("checkout")
          break
        case "complete-loaded":
          setCurrentStep("complete")
          break
        case "close":
          handleClose()
          break
      }
    }
    window.addEventListener("message", handleMessage)
    return () => {
      window.removeEventListener("message", handleMessage)
    }
  }, [handleClose])

  return (
    <>
      <Button {...buttonProps} onClick={handleOpen}>
        {children}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        transition
        className="sm:transition-opacity sm:opacity-0 sm:data-[open]:opacity-100"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div
          className={classNames(
            "fixed inset-0 flex w-screen items-end sm:items-center justify-center z-20",
            "transition-transform"
          )}
        >
          <DialogPanel
            className={
              "w-full max-w-md bg-white rounded-md max-sm:rounded-b-none " +
              "overflow-hidden flex items-center justify-center relative"
            }
          >
            <iframe
              src="/donate"
              className={classNames(
                "w-full transition-transform",
                currentStep === "loading" && "hidden",
                currentStep === "choose" && "h-[30rem]",
                currentStep === "checkout" && "h-[40rem]",
                currentStep === "complete" && "h-[30rem]"
              )}
              ref={iframeRef}
            ></iframe>
            {currentStep === "loading" && (
              <p className="flex gap-2 items-center justify-center text-gray-2 p-4 h-[30rem]">
                <LoadingIcon className="motion-safe:animate-spin size-5" />
                <FormattedMessage
                  id="donate_widget.loading"
                  defaultMessage="Loading&hellip;"
                />
              </p>
            )}
            <button
              className={classNames("absolute top-2 right-2 text-gray-2")}
              onClick={handleClose}
            >
              <CloseIcon className="size-5" />
            </button>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}
