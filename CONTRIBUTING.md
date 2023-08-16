# Contributing

Thank you for considering contributing to the Mastodon website 🐘

You may want to contribute in the following ways:

- Finding and reporting bugs
- Translating the site into various languages
- Adding apps

## Bug reports

Bug reports and feature suggestions must use descriptive and concise titles and be submitted to [GitHub Issues](https://github.com/mastodon/joinmastodon/issues). Please use the search function to make sure that you are not submitting duplicates, and that a similar report or request has not already been resolved or rejected.

## Translations

You can submit translations via [Crowdin](https://crowdin.com/project/joinmastodon). They are periodically merged into the codebase. See the [README](./README.md) for more information.

[![Crowdin](https://d322cqt584bo4o.cloudfront.net/mastodon/localized.svg)](https://crowdin.com/project/joinmastodon)

## Adding apps

The idea of the third-party apps section is to provide a showcase for apps built for the Mastodon platform. Inclusion in the list is not an endorsement, and is also not guaranteed - this is not intended to be an exhaustive list.

In an effort to offer choice but to limit confusion, there are a number of considerations:

- the Mastodon team may not able able to test all apps that are submitted, and do not endorse third-party apps simply due to their inclusion on the website. There is no fixed schedule for pull requests to be reviewed for the site - in most cases, other code maintenance tasks have a higher priority.

- Apps should be current and maintained; please submit issues or pull requests to remove Apps that are known to have been deprecated or retired.

- Apps must be _generally available_

  - do not add apps that are only available to a limited set of users (e.g. TestFlight/beta testing)
  - do not add apps that are only available in certain countries (people may click through and find that they are not available for them to install, which may be disappointing)

- Apps that are forks of other apps may in future be labelled as such / filtered in some way. This is to keep the main list at a manageable size for most users to browse and to reduce confusion between similar user experiences.

### Basic process

**Please use clean, concise titles for your pull requests.**

**The smaller the set of changes in the pull request is, the quicker it can be reviewed and merged.** Splitting tasks into multiple smaller pull requests is often preferable. One PR to add an app is preferred.

- fork the repository and create a branch for your app addition

- add the icon (under `public/apps`) and the corresponding information to the file that generates the page (in `data/apps.ts`).

  - images must be PNG format, and _ideally_ at least 512x512 pixels square (although some existing icons are smaller than this).

- if the app is multiplatform, only one icon should appear in the All apps view. This means that you _must_ add `hidden_from_all: true,` to all except one of the entries in the list. We suggest that if the app has a web version, that should be the version that is not hidden (as it will be clickable directly from the All apps list)

- please ensure that the correct value for `paid: true|false` is specified for the app entry.

- submit a PR to the `mastodon/joinmastodon` repository, and please be patient 👍🏻️
