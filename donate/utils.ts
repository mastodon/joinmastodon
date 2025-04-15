import { useEffect } from "react"

import type { MessageData, MessageDataResize } from "./types"

export function sendMessage(action: string) {
  if (window.parent) {
    window.parent.postMessage({
      source: "donate-widget",
      action,
    } satisfies MessageData)
  }
}
export function isPopupMessage(data: unknown): data is MessageData {
  return (
    data &&
    typeof data === "object" &&
    "source" in data &&
    data.source === "donate-widget" &&
    "action" in data &&
    typeof data.action === "string"
  )
}

export function isPopupResizeMessage(data: unknown): data is MessageDataResize {
  return (
    isPopupMessage(data) && "height" in data && typeof data.height === "number"
  )
}

export function usePopupSizer() {
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { height } = entry.contentRect
        if (height > 0 && window.parent) {
          window.parent.postMessage({
            source: "donate-widget",
            action: "checkout-resize",
            height,
          } satisfies MessageDataResize)
        }
      }
    })
    observer.observe(window.document.body)

    return () => {
      observer.disconnect()
    }
  }, [])
}
