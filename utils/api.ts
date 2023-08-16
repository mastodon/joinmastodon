import type { ApiPaths } from "../types/api"

const apiBase = "https://api.joinmastodon.org/"

const getApiUrl = (path: ApiPaths, params?: string | URLSearchParams) =>
  params ? `${apiBase}${path}?${params}` : `${apiBase}${path}`

export const fetchEndpoint = async (
  endpoint: ApiPaths,
  params?: string | URLSearchParams
): Promise<any[] | any> => {
  const res = await fetch(getApiUrl(endpoint, params))
  if (!res.ok) throw new Error(res.statusText)

  return await res.json()
}
