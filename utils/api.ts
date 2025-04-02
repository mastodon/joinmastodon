import type { ApiPaths } from "../types/api"

const apiBase = "https://api.joinmastodon.org/"

const getApiUrl = (path: ApiPaths, params?: string | URLSearchParams) =>
  params ? `${apiBase}${path}?${params}` : `${apiBase}${path}`

export async function fetchEndpoint<Result = any>(
  endpoint: ApiPaths,
  params?: string | URLSearchParams
): Promise<Result> {
  const res = await fetch(getApiUrl(endpoint, params))
  if (!res.ok) throw new Error(res.statusText)

  return await res.json()
}
