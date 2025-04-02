import { ParsedUrlQuery } from "node:querystring"
import type { GetServerSideProps, InferGetServerSidePropsType } from "next"

import { fetchEndpoint } from "../../utils/api"
import { CampaignResponse } from "../../types/api"
import DonateWidget from "../../components/DonateWidget"
import { getIronSession } from "iron-session"

interface DonatePageQuery {
  theme: "light" | "dark"
  campaign?: string
  callback?: string
}

function DonatePage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <DonateWidget {...props} />
}

interface DonateSessionData {
  seed?: number
  sessionId?: string
}

type DonatePageProps = DonatePageQuery & CampaignResponse

export const getServerSideProps: GetServerSideProps<DonatePageProps> = async ({
  query,
  locale,
  req,
  res,
}) => {
  const session = await getIronSession<DonateSessionData>(req, res, {
    cookieName: "session",
    password: process.env.SESSION_SECRET,
    ttl: 60 * 5, // Five minutes
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  })
  session.seed ??= Math.floor(Math.random() * 99)
  const queryParams = new URLSearchParams({
    locale,
    platform: "android",
    seed: session.seed.toString(),
    source: "menu",
  })
  if (process.env.NODE_ENV !== "production") {
    queryParams.append("environment", "staging")
  }

  await session.save()

  try {
    const apiRes = await fetchEndpoint<CampaignResponse>(
      "v1/donations/campaigns/active",
      queryParams
    )
    return {
      props: {
        ...apiRes,
        ...parseQuery(query),
      },
    }
  } catch {
    return {
      notFound: true,
    }
  }
}

export default DonatePage

function parseQuery(query: ParsedUrlQuery): DonatePageQuery {
  const result: DonatePageQuery = {
    theme: query.theme === "dark" ? "dark" : "light",
  }
  if (typeof query.campaign === "string") {
    result.campaign = query.campaign
  }
  if (typeof query.callback === "string") {
    result.callback = query.callback
  }
  return result
}
