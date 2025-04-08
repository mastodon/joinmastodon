# joinmastodon.org

This repository contains the source for [joinmastodon.org](https://joinmastodon.org), the informational site and landing portal for the [Mastodon project](https://github.com/mastodon).

You can submit translations via [Crowdin](https://crowdin.com/project/joinmastodon) (note: you will need to be logged-in to Crowdin for the link to work correctly). [Read more below](#translations).

## Development

To build and run the site locally, you'll need to have Node.js version 20 installed, which you can [download from the Node.js website](https://nodejs.org/download/release/v20.0.0/) or install via tools like `fnm` or `nvm`. For dependency management, `yarn` is used, it should be automatically be installed when you install Node.js, if it's not available you can use `corepack enable` and `corepack prepare yarn@1` to install it.

### Installation

```sh
yarn
yarn run dev
```

See [`package.json`](./package.json) for more scripts.

### Contributing

See [CONTRIBUTING](./CONTRIBUTING.md) for more information. All interactions with this and other repositories that are part of the Mastodon project are subject to the [Mastodon Code of Conduct](https://github.com/mastodon/.github/blob/main/CODE_OF_CONDUCT.md).

### Built with

- [Next.js](https://nextjs.org/)
- [Tailwind.css](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query/latest/docs/react/adapters/react-query)
- [React Intl](https://formatjs.io/docs/react-intl/)

### Translations

Translations are managed via Crowdin and distributed with react-intl. Submit translations at [Crowdin](https://crowdin.com/project/joinmastodon). Note that you will need to be logged-in to an account on the Crowdin website for the link to the project to work correctly. The project will not accept translations submitted via other means, as they would fall outside of the workflow described below.

The basic translation workflow is:

1. Translatable messages are declared in the source files using the `<FormattedMessage>` component.
2. Default messages are extracted to `locales/en.json` by running `yarn extract`.
3. The locale files are synced with the Crowdin project. Any new messages in the source file(`locales/en.json`) are made available for translation for other languages. Any new translated messages are downloaded back to the repo into corresponding locale files (e.g. `locales/es.json`).
4. On build, each locale loads its corresponding messages from `getStaticProps()` ([example](https://github.com/mastodon/joinmastodon/blob/461b65b7ef57576b6d74ef5ee0e34521d7e81b09/pages/index.js#L309-L313)).

#### Internationalized Routing

Localized versions of each page are hosted at dedicated URLs, making it easier for web crawling in users' preferred language. ([docs](https://nextjs.org/docs/pages/building-your-application/routing/internationalization))

### Image optimization

Raster images should be added at the maximum resolution they'll be displayed at. If art direction is not required, mobile images will be generated automatically. ([docs](https://nextjs.org/docs/pages/building-your-application/optimizing/images))

## Deployment

Next.js should be hosted using a Node.js server. ([see instructions](https://nextjs.org/docs/pages/building-your-application/deploying#self-hosting)). The reasons that this has been chosen over a static HTML export are:

- [image optimization](<[#image-optimization](https://nextjs.org/docs/pages/building-your-application/deploying#image-optimization)%3E>) (for automatic webp conversion and compression)
- [internationalized routing](https://nextjs.org/docs/pages/building-your-application/routing/internationalization) ([code reference](https://github.com/mastodon/joinmastodon/blob/87a3c1df9dce50141e097f26ebd1483b0c1bce4a/next.config.js#L9-L12))
- and redirects ([code reference](https://github.com/mastodon/joinmastodon/blob/87a3c1df9dce50141e097f26ebd1483b0c1bce4a/next.config.js#L16-L24))
