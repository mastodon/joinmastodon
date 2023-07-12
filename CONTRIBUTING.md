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

**Please use clean, concise titles for your pull requests.**

**The smaller the set of changes in the pull request is, the quicker it can be reviewed and merged.** Splitting tasks into multiple smaller pull requests is often preferable. One PR to add an app is preferred.

To add an app:

- add the icon (under `public/apps`) and the corresponding information to the file that generates the page (in `data/apps.ts`).

- images should be PNG format, and *ideally* at least 512x512 pixels square (although some existing icons are smaller than this).

- if the app is multiplatform, only one icon should appear in the All apps view. This means that you *must* add `hidden_from_all: true,` to all except one of the entries in the list. We suggest that if the app has a web version, that should be the version that is not hidden (as it will be clickable directly from the All apps list)

- please ensure that the correct value for `paid: true|false` is specified for the app entry.

- Under consideration: Apps that are forks of other apps may in future be labelled as such / filtered in some way. This is to keep the main list at a manageable size for most users to browse and to reduce confusion between similar user experiences.
