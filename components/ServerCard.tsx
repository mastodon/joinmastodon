import Image from "next/legacy/image"
import { FormattedMessage, useIntl } from "react-intl"
import { Blurhash } from "react-blurhash"

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
    <div className="grid grid-rows-[auto_1fr_auto] rounded-md border border-gray-3 p-4">
      <div className="relative h-26 overflow-hidden rounded-md bg-gray-2 lg:h-40">
        {server ? (
          <>
            {server.blurhash && (
              <Blurhash hash={server.blurhash} width="100%" height="100%" />
            )}

            <Image
              src={server.proxied_thumbnail}
              layout="fill"
              objectFit="cover"
              alt=""
              unoptimized
            />
          </>
        ) : (
          <div className="h-full w-full rounded-md bg-gray-3" />
        )}
      </div>

      <div className="pb-5">
        <p className="b4 mt-4 mb-2 !font-semibold uppercase text-gray-2">
          {server ? (
            <>
              <span>
                {server.category in categoriesMessages
                  ? intl.formatMessage(categoriesMessages[server.category])
                  : server.category}
              </span>
              {server?.approval_required && (
                <span className="before:px-1 before:content-['·']">
                  <FormattedMessage
                    id="servers.approval_required"
                    defaultMessage="Sign-ups reviewed manually"
                  />
                </span>
              )}
            </>
          ) : (
            <SkeletonText className="w-[16ch]" />
          )}
        </p>
        <p className="b1 !font-700 mb-2">
          {server ? server.domain : <SkeletonText className="w-[14ch]" />}
        </p>
        <p className="b3 line-clamp-5 [unicode-bidi:plaintext]">
          {server ? (
            server.description
          ) : (
            <>
              <SkeletonText className="w-[27ch]" />
              <SkeletonText className="w-[26ch]" />
              <SkeletonText className="w-[12ch]" />
            </>
          )}
        </p>
      </div>

      <div className="">
        {server ? (
          <LinkButton
            href={`https://${server.domain}/auth/sign_up`}
            light={server.approval_required}
            fullWidth
            size="small"
          >
            {server.approval_required ? (
              <FormattedMessage
                id="servers.apply_for_an_account"
                defaultMessage="Apply for an account"
              />
            ) : (
              <FormattedMessage
                id="servers.create_account"
                defaultMessage="Create account"
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
