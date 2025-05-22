import { z } from "zod"
import type { MessageData } from "./types"

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

export const themeSchema = z.enum(["light", "dark", "auto"]).default("auto")
