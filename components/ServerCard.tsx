import Image from "next/image"
import SVG from "react-inlinesvg"
import { FormattedMessage, useIntl } from "react-intl"

import LinkButton from "./LinkButton"
import type { Server } from "../types/api"
import { categoriesMessages } from "../data/categories"
import { formatNumber } from "../utils/numbers"
import SkeletonText from "./SkeletonText"

/**
 * Individual Server cards.
 * Omitting server prop renders a skeleton.
 */
const ServerCard = ({ server }: { server?: Server }) => {
  const intl = useIntl()
  return (
    <div className="grid grid-rows-[auto_1fr_auto] rounded-md p-4 shadow">
      <div className="relative h-26 lg:h-40">
        {server ? (
          <>
            <Image
              className="rounded-md bg-gray-2"
              src={server.proxied_thumbnail}
              layout="fill"
              objectFit="cover"
            />
            <span className="absolute flex items-center gap-1 rounded bg-white px-1.5 py-0.5 text-gray-1 inline-end-2 block-start-2">
              {formatNumber(server.total_users, intl.locale)}
              <SVG src="/ui/person.svg" />
            </span>
          </>
        ) : (
          <>
            <div className="h-full w-full rounded-md bg-gray-3" />
            <span className="absolute block h-7 w-14 rounded bg-white inline-end-2 block-start-2"></span>
          </>
        )}
      </div>

      <div className="pb-5">
        <p className="b3 mt-4 mb-2 !font-600 uppercase text-gray-2">
          {server ? (
            <>
              <span>
                {server.category in categoriesMessages
                  ? intl.formatMessage(categoriesMessages[server.category])
                  : server.category}
              </span>
              {server?.approval_required && (
                <span className="before:px-1 before:content-['·']">
                  Invite only
                </span>
              )}
            </>
          ) : (
            <SkeletonText className="w-[10em]" />
          )}
        </p>
        <p className="b1 mb-2 !font-700">
          {server ? server.domain : <SkeletonText className="w-[9em]" />}
        </p>
        <p className="b3 line-clamp-5 [unicode-bidi:plaintext]">
          {server ? (
            server.description
          ) : (
            <>
              <SkeletonText className="w-[17em]" />
              <SkeletonText className="w-[16em]" />
              <SkeletonText className="w-[7em]" />
            </>
          )}
        </p>
      </div>

      <div className="">
        {server ? (
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
        ) : (
          <div className="flex h-10 rounded border-2 border-gray-3" />
        )}
      </div>
    </div>
  )
}

export default ServerCard
