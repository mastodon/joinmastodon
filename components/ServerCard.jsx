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
  approval_required: true,
  language: "en",
  category: "general",
}

const ServerCard = () => {
  return (
    <div className="col-span-1 rounded shadow">
      <div className="relative h-26 lg:h-40">
        <Image
          className="rounded-t"
          src={server.proxied_thumbnail}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="p-4">
        <p className="b1">{server.domain}</p>
        <p className="b3 mb-4 capitalize text-gray-1">{server.category}</p>
        <p className="b3 mb-5">{server.description}</p>

        {server.approval_required ? (
          <LinkButton href={`https://${server.domain}`} fullWidth light small>
            <FormattedMessage
              id="request_access"
              defaultMessage="Request access"
            />
          </LinkButton>
        ) : (
          <LinkButton href={`https://${server.domain}`} fullWidth small>
            <FormattedMessage id="join_server" defaultMessage="Join server" />
          </LinkButton>
        )}
      </div>
    </div>
  )
}

export default ServerCard
