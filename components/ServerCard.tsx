import Image from "next/image"
import { FormattedMessage, useIntl } from "react-intl"
import classNames from "classnames"

import LinkButton from "./LinkButton"
import type { Server } from "../types/api"

import { categoriesMessages } from "../data/categories"
import SVG from "react-inlinesvg"
import { formatNumber } from "../utils/numbers"

const ServerCard = ({ server }: { server: Server }) => {
  const intl = useIntl()
  return (
    <div className="grid grid-rows-[auto_1fr_auto] rounded-md p-4 shadow">
      <div className="relative h-26 lg:h-40">
        <Image
          className="rounded-md bg-black"
          src={server.proxied_thumbnail}
          layout="fill"
          objectFit="cover"
        />
        <span className="absolute flex items-center gap-1 rounded bg-white px-1.5 py-0.5 text-gray-1 inline-end-2 block-start-2">
          {formatNumber(server.total_users, intl.locale)}
          <SVG src="/ui/person.svg" />
        </span>
      </div>

      <div className="pb-5">
        <p className="b3 mt-4 mb-2 !font-600 uppercase text-gray-2">
          <span>
            {server.category in categoriesMessages
              ? intl.formatMessage(categoriesMessages[server.category])
              : server.category}
          </span>
          {server.approval_required && (
            <span className="before:px-1 before:content-['·']">
              Invite only
            </span>
          )}
        </p>
        <p className="b1 mb-2 !font-700">{server.domain}</p>
        <p className="b3 line-clamp-5 [unicode-bidi:plaintext]">
          {server.description}
        </p>
      </div>

      <div className="">
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
