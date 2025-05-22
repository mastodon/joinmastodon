export interface MessageData {
  source: "donate-widget"
  action: string
}
export type Step = "loading" | "choose" | "checkout" | "complete"

export type Theme = "light" | "dark" | "auto"
