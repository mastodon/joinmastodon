const apiBase = "https://api.joinmastodon.org/"

const getApiUrl = (path, params = "") => `${apiBase}${path}?${params}`

export const fetchEndpoint = async function (endpoint, params = ""): Promise<any[]> {
  const res = await fetch(getApiUrl(endpoint, params.toString()))
  return await res.json()
}
