import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
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
  const handleClose = () => {
    setOpen(false)
    setTimeout(() => setCurrentStep("loading"), 300)
  }

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const message = event.data
      if (!isPopupMessage(message)) {
        return
      }

      switch (message.action) {
        case "checkout-loaded": {
          setCurrentStep("checkout")
          break
        }
        case "close": {
          handleClose()
          break
        }
      }
    }
    window.addEventListener("message", handleMessage)
    return () => {
      window.removeEventListener("message", handleMessage)
    }
  }, [])

  const handleIframeLoad = () => {
    setCurrentStep("choose")
  }

  return (
    <>
      <Button {...buttonProps} onClick={handleOpen}>
        {children}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        transition
        className="transition-opacity opacity-0 data-[open]:opacity-100"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 z-10">
          <DialogPanel
            className={classNames(
              "w-full bg-white rounded-md overflow-hidden flex items-center justify-center transition-all relative",
              currentStep !== "checkout" && "max-w-md",
              currentStep === "loading" && "p-4 min-h-40",
              currentStep === "checkout" && "max-w-3xl"
            )}
          >
            <iframe
              src="/donate"
              className={classNames(
                "w-full transition-transform",
                currentStep === "loading" && "hidden",
                currentStep === "choose" && "h-[28rem]",
                currentStep === "checkout" && "h-[45rem]"
              )}
              ref={iframeRef}
              onLoad={handleIframeLoad}
            ></iframe>
            {currentStep === "loading" && (
              <p className="flex gap-2 items-center justify-center text-gray-2">
                <LoadingIcon className="motion-safe:animate-spin size-5" />
                <span>Loading&hellip;</span>
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
