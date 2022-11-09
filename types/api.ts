export type Category = {
  category: string
  servers_count: number
}

export type Language = {
  locale: string
  language?: string
  servers_count: number
}

export type Server = {
  domain: string
  version: string
  description: string
  languages: string[]
  region: string
  categories: string[]
  proxied_thumbnail: string
  total_users: number
  last_week_users: number
  approval_required: boolean
  language: string
  category: string
}

export type Day = {
  period: string
  server_count: string
  user_count: string
  active_user_count: string
}

export type Region = {
  value: string
  label: string
}
