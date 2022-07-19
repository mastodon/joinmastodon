import Image from "next/image"
import { FormattedMessage } from "react-intl"
import LinkButton from "./LinkButton"

let server = {
  domain: "mastodon.social",
  version: "3.5.3",
  description:
    "The original server maintained by the Mastodon gGmbH non-profit.",
  languages: ["en"],
  region: "",
  categories: ["general"],
  proxied_thumbnail:
    "https://proxy.joinmastodon.org/d7d02f9615184131475feeb95ab8cd01e6575448/68747470733a2f2f66696c65732e6d6173746f646f6e2e736f6369616c2f736974655f75706c6f6164732f66696c65732f3030302f3030302f3030312f6f726967696e616c2f766c63736e61702d323031382d30382d32372d31366834336d3131733132372e706e67",
  total_users: 725761,
  last_week_users: 43440,
  approval_required: false,
  language: "en",
  category: "general",
}

const ServerCard = () => {
  return (
    <div className="col-span-1 rounded shadow">
      <div className="relative h-24">
        <Image
          className="opacity-20"
          src={server.proxied_thumbnail}
          layout="fill"
        />{" "}
      </div>
      <p className="b1">{server.domain}</p>
      <p className="b3 capitalize text-gray-1">{server.category}</p>
      <p className="b3">{server.description}</p>

      <LinkButton href={`https://${server.domain}`} fullWidth>
        <FormattedMessage id="join_server" defaultMessage="Join server" />
      </LinkButton>
    </div>
  )
}

export default ServerCard
