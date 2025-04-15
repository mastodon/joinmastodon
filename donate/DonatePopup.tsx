import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react"
import classNames from "classnames"

import { isPopupMessage, isPopupResizeMessage } from "./utils"
import { Button, ButtonProps } from "../components/Button"

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

      if (isPopupResizeMessage(message)) {
        iframeRef.current?.style.setProperty("height", `${message.height}px`)
        return
      }
      switch (message.action) {
        case "checkout-loaded": {
          setCurrentStep("checkout")
          break
        }
        case "checkout-complete": {
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
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel
            className={classNames(
              "w-full bg-white rounded-md overflow-hidden flex items-center justify-center transition-all relative",
              currentStep === "loading" && "p-4 min-h-40 max-w-md",
              currentStep === "choose" && "max-w-md",
              currentStep === "checkout" && "max-w-5xl"
            )}
          >
            <iframe
              src="/donate"
              className={classNames(
                "w-full transition-all",
                currentStep === "loading" && "hidden"
              )}
              ref={iframeRef}
              onLoad={handleIframeLoad}
            ></iframe>
            {currentStep === "loading" && (
              <p className="text-center">Loading...</p>
            )}
            <button
              className={classNames(
                "absolute top-2 right-2",
                currentStep === "checkout" && "text-white"
              )}
              onClick={handleClose}
            >
              x
            </button>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}
