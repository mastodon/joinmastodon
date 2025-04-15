interface MessageDataBase {
  source: "donate-widget"
}
export interface MessageData extends MessageDataBase {
  action: string
}
export interface MessageDataResize extends MessageDataBase {
  action: "checkout-resize"
  height: number
}
export type Step = "loading" | "choose" | "checkout" | "complete"
