import { ReactElement, SVGProps } from "react"
import { defineMessages, MessageDescriptor } from "react-intl"
import { StaticImageData } from "next/image"

import AltStoreLogo from "../public/logos/hosting-partners/altstore.png"
import EULogo from "../public/logos/hosting-partners/eu-commission.svg?inline"
import FlipboardLogo from "../public/logos/hosting-partners/flipboard.svg?inline"
import MediumLogo from "../public/logos/hosting-partners/medium.svg?inline"
import SchleswigHolsteinLogo from "../public/logos/hosting-partners/schleswig-holstein.svg?inline"
import WikimediaLogo from "../public/logos/hosting-partners/wikimedia.svg?inline"
import EmailIcon from "../public/ui/email.svg?inline"
import GlobeIcon from "../public/ui/globe.svg?inline"
import AnnouncementIcon from "../public/ui/announcement.svg?inline"

const messages = defineMessages({
  partnersEuBody: {
    id: "hosting.partners.eu.body",
    defaultMessage:
      "The European Commission runs an official Mastodon server to broaden public engagement across the Fediverse, support European open-source platforms, and provide a privacy-focused channel for official communications.",
  },
  partnersSchleswigHolsteinBody: {
    id: "hosting.partners.schleswig-holstein.body",
    defaultMessage:
      "To strengthen public digital services and local collaboration, the German state of Schleswig-Holstein launched social.schleswig-holstein.de — an official, Mastodon server open to state administrations, public-sector companies and non-profits in the region.",
  },
  partnersAltStoreBody: {
    id: "hosting.partners.altstore.body",
    defaultMessage:
      "AltStore is a home for apps that push the boundaries of iOS with no jailbreak required. An announcement from the AltStore team is coming soon with more details on our partnership.",
  },
  benefitsIdentityTitle: {
    id: "hosting.benefits.identity.title",
    defaultMessage: "Your Identity in Every Username",
  },
  benefitsIdentityBody: {
    id: "hosting.benefits.identity.body",
    defaultMessage:
      "Each account lives under your domain (for example @name@brandname.social). Staff, members, or citizens become instantly recognisable and discoverable across the Fediverse, reinforcing organisational identity with every interaction.",
  },
  benefitsHostingTitle: {
    id: "hosting.benefits.hosting.title",
    defaultMessage: "Data Locality & Compliance",
  },
  benefitsHostingBody: {
    id: "hosting.benefits.hosting.body",
    defaultMessage:
      "Decide exactly where your server is hosted, in the EU, or many other approved jurisdictions - so you meet sovereignty, GDPR, or internal policy requirements without compromise.",
  },
  benefitsReachTitle: {
    id: "hosting.benefits.reach.title",
    defaultMessage: "Reclaim Control of Your Reach and Audience",
  },
  benefitsReachBody: {
    id: "hosting.benefits.reach.body",
    defaultMessage:
      "Define your own server rules and moderation standards - with no third-party or outside platform algorithm. You decide how discourse is moderated and how your messages travel.",
  },
  stepDomainTitle: {
    id: "hosting.steps.domain.title",
    defaultMessage: "Select your domain name",
  },
  stepDomainBody: {
    id: "hosting.steps.domain.body",
    defaultMessage:
      "Use your organization’s domain for account handles (for example, @name@yourcity.de). It makes every profile recognisable across the Fediverse and builds trust, just like a custom email address.",
  },
  stepSpaceTitle: {
    id: "hosting.steps.space.title",
    defaultMessage: "Tailor Your Community Space",
  },
  stepSpaceBody: {
    id: "hosting.steps.space.body",
    defaultMessage:
      "Set the look, feel, and rules to fit your organizational identity. You can add a description, set branding and define relevant rules for your server.",
  },
  stepTeamTitle: {
    id: "hosting.steps.team.title",
    defaultMessage: "Invite & Onboard Your Team",
  },
  stepTeamBody: {
    id: "hosting.steps.team.body",
    defaultMessage:
      "The final step is about sending invites, assigning roles if needed, and letting community members set up their profiles. You are ready to post, follow, and connect across the Fediverse.",
  },
})

export const SalesScheduleLink = "https://tally.so/r/woJ2EX"

type MessageOrString = string | MessageDescriptor
type SVGComponent = (props: SVGProps<SVGSVGElement>) => ReactElement
export type ImageOrSvg = StaticImageData | SVGComponent
export type CardItem = {
  title: MessageOrString
  body: MessageDescriptor
  image?: ImageOrSvg
  icon?: SVGComponent
}

export const partnerCards = [
  {
    title: "European Commission",
    body: messages.partnersEuBody,
    image: EULogo,
  },
  {
    title: "Schleswig-Holstein",
    body: messages.partnersSchleswigHolsteinBody,
    image: SchleswigHolsteinLogo,
  },
  {
    title: "AltStore",
    body: messages.partnersAltStoreBody,
    image: AltStoreLogo,
  },
] satisfies CardItem[]

export const benefitsCards = [
  {
    title: messages.benefitsIdentityTitle,
    body: messages.benefitsIdentityBody,
    icon: EmailIcon,
  },
  {
    title: messages.benefitsHostingTitle,
    body: messages.benefitsHostingBody,
    icon: GlobeIcon,
  },
  {
    title: messages.benefitsReachTitle,
    body: messages.benefitsReachBody,
    icon: AnnouncementIcon,
  },
] satisfies CardItem[]

export const stepsCards = [
  {
    title: messages.stepDomainTitle,
    body: messages.stepDomainBody,
  },
  {
    title: messages.stepSpaceTitle,
    body: messages.stepSpaceBody,
  },
  {
    title: messages.stepTeamTitle,
    body: messages.stepTeamBody,
  },
] satisfies CardItem[]

export type LogoItem = Pick<CardItem, "image" | "title">

export const hostingLogos = [
  {
    title: "Medium",
    image: MediumLogo,
  },
  {
    title: "Flipboard",
    image: FlipboardLogo,
  },
  {
    title: "Wikimedia",
    image: WikimediaLogo,
  },
] satisfies LogoItem[]
