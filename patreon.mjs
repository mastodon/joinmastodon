import * as dotenv from "dotenv"
import fs from "fs"

dotenv.config({ path: ".env.local" })

const fetchJson = async (url) => {
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.PATREON_ACCESS_TOKEN}` },
  })
  return await res.json()
}

const sleep = (waitTime) =>
  new Promise((resolve) => setTimeout(resolve, waitTime))

let url = `https://www.patreon.com/api/oauth2/v2/campaigns/${process.env.PATREON_CAMPAIGN_ID}/members?include=user,currently_entitled_tiers&fields%5Bmember%5D=full_name,lifetime_support_cents,patron_status,pledge_relationship_start,note&fields%5Buser%5D=image_url&fields%5Btier%5D=title`

const membersByTiers = {}
const tierMap = {}

while (true) {
  console.log("Fetching page...")

  const data = await fetchJson(url)
  const profilePictureMap = {}

  if (!data.included) {
    console.log("Unexpected response:", data)
    break
  }

  data.included.forEach((included) => {
    switch (included.type) {
      case "user":
        profilePictureMap[included.id] = included.attributes.image_url
        break
      case "tier":
        tierMap[included.id] = included.attributes.title
        break
    }
  })

  data.data.forEach((member) => {
    const userId = member.relationships.user.data.id

    if (member.attributes.patron_status !== "active_patron") {
      return
    }

    const currentlyEntitledTiers =
      member.relationships.currently_entitled_tiers.data

    if (currentlyEntitledTiers?.length < 1) {
      return
    }

    const tierId = currentlyEntitledTiers[0].id
    const tierName = tierMap[tierId]
    const members = membersByTiers[tierName] || []

    members.push({
      id: userId,
      picture: profilePictureMap[userId],
      name: member.attributes.full_name,
      joinedAt: member.attributes.pledge_relationship_start,
      lifetimeSupportCents: member.attributes.lifetime_support_cents,
      note: member.attributes.note,
      tier: tierName,
    })

    membersByTiers[tierName] = members
  })

  url = data?.links?.next

  if (!url) {
    break
  }

  await sleep(1000)
}

// Sponsors are sorted by lifetimeSupportCents desc
// Highlighted sponsors are sorted by lifetimeSupportCents desc
// Silver sponsors are sorted by joinedAt asc, grandfathered ones have nofollow: false

const silver = membersByTiers["Silver sponsor"]
  .map((member) => ({
    url: member.note,
    name: member.name,
    logo: member.picture,
    nofollow: true,
    date: member.joinedAt,
  }))
  .concat(
    membersByTiers["Silver sponsor (grandfathered)"].map((member) => ({
      url: member.note,
      name: member.name,
      logo: member.picture,
      nofollow: false,
      date: member.joinedAt,
    }))
  )
  .sort((a, b) => new Date(a.date) - new Date(b.date))
  .map((member) => ({
    url: member.url,
    logo: member.logo,
    name: member.name,
    url: member.url,
    nofollow: member.nofollow,
  }))
const generalHighlighted = membersByTiers["Highlighted sponsor"]
  .sort((a, b) => b.lifetimeSupportCents - a.lifetimeSupportCents)
  .map((member) => member.name)
const general = membersByTiers["Sponsor"]
  .sort((a, b) => b.lifetimeSupportCents - a.lifetimeSupportCents)
  .map((member) => member.name)

fs.writeFile(
  "./data/patreon.json",
  JSON.stringify(
    {
      silver,
      generalHighlighted,
      general,
    },
    null,
    "  "
  ),
  (err) => {
    if (err) {
      console.error(err)
      return
    }

    console.log("File updated")
  }
)
