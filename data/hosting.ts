import { defineMessages, MessageDescriptor } from "react-intl"

const messages = defineMessages({
  partnersEuBody: {
    id: "hosting.partners.eu.body",
    defaultMessage:
      "The European Commission runs an official Mastodon instance to broaden public engagement across the fediverse, support European open-source platforms, and provide a privacy-focused channel for official communications.",
  },
  partnersSchleswigHolsteinBody: {
    id: "hosting.partners.schleswig-holstein.body",
    defaultMessage:
      "To strengthen public digital services and local collaboration, the German state of Schleswig-Holstein launched social.schleswig-holstein.de — an official, Mastodon instance open to state administrations, public-sector companies and non-profits in the region.",
  },
  partnersAltStoreBody: {
    id: "hosting.partners.altstore.body",
    defaultMessage:
      "Altstore is a home for apps that push the boundaries of iOS with no jailbreak required. To support decentralization, user autonomy and privacy, AltStore runs an official Mastodon instance to discuss app sovereignty, alternative app distribution, and open-source solutions outside closed app-store ecosystems.",
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
      "Decide exactly where your instance is hosted, in EU, or many other approved jurisdictions - so you meet sovereignty, GDPR, or internal-policy requirements without compromise.",
  },
  benefitsReachTitle: {
    id: "hosting.benefits.reach.title",
    defaultMessage: "Reclaim Control of Your Reach and Audience",
  },
  benefitsReachBody: {
    id: "hosting.benefits.reach.body",
    defaultMessage:
      "Define your own server rules and moderation standards. With no third-party or outside platform algorithm. You decide how discourse is moderated and how your messages travel.",
  },
})

type MessageOrString = string | MessageDescriptor
export type CardItem = {
  image?: string
  title: MessageOrString
  body: MessageDescriptor
}

export const partnerCards = [
  {
    title: "European Commission",
    body: messages.partnersEuBody,
  },
  {
    title: "Schleswig-Holstein",
    body: messages.partnersSchleswigHolsteinBody,
  },
  {
    title: "AltStore",
    body: messages.partnersAltStoreBody,
  },
] satisfies CardItem[]

export const benefitsCards = [
  {
    title: messages.benefitsIdentityTitle,
    body: messages.benefitsIdentityBody,
  },
  {
    title: messages.benefitsHostingTitle,
    body: messages.benefitsHostingBody,
  },
  {
    title: messages.benefitsReachTitle,
    body: messages.benefitsReachBody,
  },
] satisfies CardItem[]
