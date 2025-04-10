import { BOARD_POSITION_DIRECTOR, BOARD_POSITION_OBSERVER } from "../data/board"

export function mapMastodonUrlToHandle(mastodonUrl: string): string {
  let parts = mastodonUrl.match(/https:\/\/([\w\.]+)\/@([\w]+)/)
  return `${parts[2]}@${parts[1]}`
}

export function mapBoardPositionToLabel(position: string): string {
  switch (position) {
    case BOARD_POSITION_DIRECTOR:
      return "Board Director"
    case BOARD_POSITION_OBSERVER:
      return "Board Observer"
    default:
      return ""
  }
}
