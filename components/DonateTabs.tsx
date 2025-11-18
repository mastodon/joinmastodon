import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react"
import Image from "next/image"
import { FC, PropsWithChildren, ReactNode } from "react"
import { defineMessages, FormattedMessage, useIntl } from "react-intl"

import { DonatePopup } from "../donate/DonatePopup"
import ExternalLinkIcon from "../public/ui/external-link.svg?inline"
import deFlagIcon from "../public/german_flag_icon_round.svg"
import usFlagIcon from "../public/united_states_flag_icon_round.svg"
import gitHubLogo from "../public/logos/github.svg"
import patreonLogo from "../public/logos/patreon.svg"
import stripeLogo from "../public/logos/stripe.svg"
import benevityLogo from "../public/logos/benevity.svg"
import sponsorshipIcon from "../public/icons/corporate-sponsorship.svg"

import LinkButton from "./LinkButton"
import { useMediaQuery } from "usehooks-ts"
import classNames from "classnames"

const cardMessages = defineMessages({
  giveButterTitle: {
    id: "sponsors.donate_card.givebutter.title",
    defaultMessage: "From the United States",
  },
  giveButterCopy: {
    id: "sponsors.donate_card.givebutter.copy",
    defaultMessage:
      "Make a one-time or recurring donation to Mastodon Inc, our US 501c3 non-profit. Tax deductible for eligible US tax residents.*",
  },
  giveButterButton: {
    id: "sponsors.donate_card.givebutter.button",
    defaultMessage: "Donate through GiveButter",
  },
  giveButterImageAlt: {
    id: "sponsors.donate_card.givebutter.image_alt",
    defaultMessage: "USA Flag",
  },
  weAidTitle: {
    id: "sponsors.donate_card.weaid.title",
    defaultMessage: "From Germany",
  },
  weAidCopy: {
    id: "sponsors.donate_card.weaid.copy",
    defaultMessage:
      "Make a one-time donation through WE AID gGmbH, our German fiscal host. Tax deductible for eligible German tax residents.*",
  },
  weAidButton: {
    id: "sponsors.donate_card.weaid.button",
    defaultMessage: "Donate through WE AID",
  },
  weAidImageAlt: {
    id: "sponsors.donate_card.weaid.image_alt",
    defaultMessage: "German Flag",
  },
  patreonTitle: {
    id: "sponsors.donate_card.patreon.title",
    defaultMessage: "Patreon",
  },
  patreonCopy: {
    id: "sponsors.donate_card.patreon.copy",
    defaultMessage:
      "Patreon donors gain access to Mastodon’s Discord for developers, server admins, and social web supporters.",
  },
  patreonButton: {
    id: "sponsors.donate_card.patreon.button",
    defaultMessage: "Donate through Patreon",
  },
  gitHubTitle: {
    id: "sponsors.donate_card.github.title",
    defaultMessage: "GitHub",
  },
  gitHubCopy: {
    id: "sponsors.donate_card.github.copy",
    defaultMessage:
      "GitHub Sponsors receive a Mastodon badge to their Org or Personal profile. Plus we don’t pay fees!",
  },
  gitHubButton: {
    id: "sponsors.donate_card.github.button",
    defaultMessage: "Donate through GitHub",
  },
  stripeTitle: {
    id: "sponsors.donate_card.stripe.title",
    defaultMessage: "Stripe",
  },
  stripeCopy: {
    id: "sponsors.donate_card.stripe.copy",
    defaultMessage:
      "Make a one-time or recurring direct donation to Mastodon GmbH, from anywhere in the world.",
  },
  stripeButton: {
    id: "sponsors.donate_card.stripe.button",
    defaultMessage: "Donate through Stripe",
  },
  corpSponsorTitle: {
    id: "sponsors.donate_card.corporate_sponsor.title",
    defaultMessage: "Corporate sponsorship",
  },
  corpSponsorCopy: {
    id: "sponsors.donate_card.corporate_sponsor.copy",
    defaultMessage:
      "We welcome corporate sponsors! We’ll feature your company’s logo and a link to your website.",
  },
  corpSponsorButton: {
    id: "sponsors.donate_card.corporate_sponsor.button",
    defaultMessage: "Become a sponsor",
  },
  corpMatchTitle: {
    id: "sponsors.donate_card.corporate_matching.title",
    defaultMessage: "Corporate matching",
  },
  corpMatchCopy: {
    id: "sponsors.donate_card.corporate_matching.copy",
    defaultMessage:
      "Does your company provide corporate matching? If so, you can use Benevity to donate!",
  },
  corpMatchButton: {
    id: "sponsors.donate_card.corporate_matching.button",
    defaultMessage: "Donate on Benevity",
  },
  logoAlt: {
    id: "sponsors.donate_card.logo.alt",
    defaultMessage: "{name} Logo",
  },
})

export const DonateTabs: FC<{ className?: string }> = ({ className }) => {
  const isMobile = useMediaQuery("(max-width: 768px")
  if (isMobile) {
    return (
      <div className={classNames(className, "flex flex-col gap-4")}>
        <DonateCards plain />
      </div>
    )
  }
  return (
    <TabGroup className={className}>
      <TabList className="flex mb-4">
        <StyledTab>
          <FormattedMessage
            id="sponsors.donate_header.tax_deductible"
            defaultMessage="Tax-deductible donations"
          />
        </StyledTab>
        <StyledTab>
          <FormattedMessage
            id="sponsors.donate_header.individual"
            defaultMessage="More individual donation options"
          />
        </StyledTab>
        <StyledTab>
          <FormattedMessage
            id="sponsors.donate_header.corporate"
            defaultMessage="Corporate gifts & matching"
          />
        </StyledTab>
      </TabList>
      <TabPanels className="border border-gray-3 p-8 rounded-2xl">
        <DonateCards />
      </TabPanels>
    </TabGroup>
  )
}

const StyledTab: FC<PropsWithChildren> = ({ children }) => (
  <Tab className="grow py-2 data-[selected]:pb-[calc(0.5rem-3px)] transition-colors font-semibold box-border border-b border-gray-3 data-[selected]:border-b-4 data-[selected]:border-blurple-500">
    {children}
  </Tab>
)

const DonateCards: FC<{ plain?: boolean }> = ({ plain }) => {
  const intl = useIntl()
  return (
    <>
      <StyledTabPanel
        title={
          <FormattedMessage
            id="sponsors.donate_header.tax_deductible"
            defaultMessage="Tax-deductible donations"
          />
        }
        footer={
          <FormattedMessage
            id="sponsors.donate_footer.tax_disclaimer"
            defaultMessage="*Tax exemptions vary according to the laws of each country. We strongly recommend that you contact a tax consultant in your country if you have any questions about tax exemptions or reductions."
          />
        }
        plain={plain}
      >
        <DonateCard
          title={intl.formatMessage(cardMessages.giveButterTitle)}
          copy={intl.formatMessage(cardMessages.giveButterCopy)}
          cta={intl.formatMessage(cardMessages.giveButterButton)}
          ctaAction="https://givebutter.com/nAk74p"
          imageSrc={usFlagIcon}
          imageAlt={intl.formatMessage(cardMessages.giveButterImageAlt)}
        />
        <DonateCard
          title={intl.formatMessage(cardMessages.weAidTitle)}
          copy={intl.formatMessage(cardMessages.weAidCopy)}
          cta={intl.formatMessage(cardMessages.weAidButton)}
          ctaAction="https://donate.stripe.com/14A4gAfACaLg76zfKB1ZS07"
          imageSrc={deFlagIcon}
          imageAlt={intl.formatMessage(cardMessages.weAidImageAlt)}
        />
      </StyledTabPanel>
      <StyledTabPanel
        title={
          <FormattedMessage
            id="sponsors.donate_header.individual_options"
            defaultMessage="More individual donation options"
          />
        }
        plain={plain}
      >
        <DonateCard
          title={intl.formatMessage(cardMessages.stripeTitle)}
          copy={intl.formatMessage(cardMessages.stripeCopy)}
          cta={intl.formatMessage(cardMessages.stripeButton)}
          ctaAction="popup"
          imageSrc={stripeLogo}
          imageAlt={intl.formatMessage(cardMessages.logoAlt, {
            name: "Stripe",
          })}
        />
        <DonateCard
          title={intl.formatMessage(cardMessages.patreonTitle)}
          copy={intl.formatMessage(cardMessages.patreonCopy)}
          cta={intl.formatMessage(cardMessages.patreonButton)}
          ctaAction="https://www.patreon.com/mastodon"
          imageSrc={patreonLogo}
          imageAlt={intl.formatMessage(cardMessages.logoAlt, {
            name: "Patreon",
          })}
        />
        <DonateCard
          title={intl.formatMessage(cardMessages.gitHubTitle)}
          copy={intl.formatMessage(cardMessages.gitHubCopy)}
          cta={intl.formatMessage(cardMessages.gitHubButton)}
          ctaAction="https://github.com/sponsors/mastodon"
          imageSrc={gitHubLogo}
          imageAlt={intl.formatMessage(cardMessages.logoAlt, {
            name: "GitHub",
          })}
        />
      </StyledTabPanel>
      <StyledTabPanel
        title={
          <FormattedMessage
            id="sponsors.donate_header.corporate"
            defaultMessage="Corporate gifts & matching"
          />
        }
        plain={plain}
      >
        <DonateCard
          title={intl.formatMessage(cardMessages.corpSponsorTitle)}
          copy={intl.formatMessage(cardMessages.corpSponsorCopy)}
          cta={intl.formatMessage(cardMessages.corpSponsorButton)}
          ctaAction="https://sponsor.joinmastodon.org/"
          imageSrc={sponsorshipIcon}
        />
        <DonateCard
          title={intl.formatMessage(cardMessages.corpMatchTitle)}
          copy={intl.formatMessage(cardMessages.corpMatchCopy)}
          cta={intl.formatMessage(cardMessages.corpMatchButton)}
          ctaAction="https://causes.benevity.org/causes/276-5575947211653_d7e4"
          imageSrc={benevityLogo}
          imageAlt={intl.formatMessage(cardMessages.logoAlt, {
            name: "Benevity",
          })}
        />
      </StyledTabPanel>
    </>
  )
}

const StyledTabPanel: FC<
  PropsWithChildren<{ title: ReactNode; footer?: ReactNode; plain?: boolean }>
> = ({ children, title, footer, plain }) => {
  const Wrapper = plain ? "div" : TabPanel
  return (
    <Wrapper
      className={classNames(plain && "border border-gray-3 p-4 rounded-2xl")}
    >
      <h2 className="text-h5 font-semibold mb-8 text-center">{title}</h2>
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
        {children}
      </div>
      {footer && (
        <div className="mt-8 p-4 bg-gray-4 text-gray-1 rounded-lg">
          {footer}
        </div>
      )}
    </Wrapper>
  )
}

interface DonateCardProps {
  title: string
  imageSrc?: string
  imageAlt?: string
  copy: string
  cta: string
  ctaAction: string | "popup"
}

const DonateCard = ({
  title,
  imageSrc,
  imageAlt = "",
  copy,
  cta,
  ctaAction,
}: DonateCardProps) => (
  <div className="flex flex-col items-center text-center max-w-80">
    {imageSrc && (
      <Image
        src={imageSrc}
        className="aspect-square"
        width="40"
        height="40"
        alt={imageAlt}
      />
    )}
    <h3 className="text-b1 font-semibold mt-5 mb-2">{title}</h3>
    <p className="b2 grow mb-8 text-gray-1">{copy}</p>
    {ctaAction !== "popup" ? (
      <LinkButton size="medium" href={ctaAction} light>
        {cta}
        <ExternalLinkIcon className="size-5 ml-2 fill-current" />
      </LinkButton>
    ) : (
      <DonatePopup size="medium" className="!font-semibold p-4">
        {cta}
      </DonatePopup>
    )}
  </div>
)
