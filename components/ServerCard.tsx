import Image from "next/image"
import { FormattedMessage, useIntl } from "react-intl"
import classNames from "classnames"

import LinkButton from "./LinkButton"
import type Server from "../types/server"

import { categoriesMessages } from "../data/categories"

const ServerCard = ({ server }: { server: Server }) => {
  const intl = useIntl()
  return (
    <div className="grid grid-rows-[auto_1fr_auto] rounded shadow">
      <div className="relative h-26 rounded-t bg-black lg:h-40">
        <Image
          className="rounded-t"
          src={server.proxied_thumbnail}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="p-4 pb-5">
        <p className="b1 !font-700">{server.domain}</p>
        <p className="b3 mb-4 capitalize text-gray-1">
          <span
            className={classNames(
              server.approval_required && "after:px-1 after:content-['·']"
            )}
          >
            {server.category in categoriesMessages
              ? intl.formatMessage(categoriesMessages[server.category])
              : server.category}
          </span>
          {server.approval_required && <span>Invite only</span>}
        </p>
        <p className="b3 line-clamp-5">{server.description}</p>
      </div>

      <div className="p-4 pt-0">
        <LinkButton
          href={`https://${server.domain}`}
          light={server.approval_required}
          fullWidth
          size="small"
        >
          {server.approval_required ? (
            <FormattedMessage
              id="servers.get_on_waitlist"
              defaultMessage="Get on waitlist"
            />
          ) : (
            <FormattedMessage
              id="servers.join_server"
              defaultMessage="Join server"
            />
          )}
        </LinkButton>
      </div>
    </div>
  )
}

export default ServerCard
