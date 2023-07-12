# joinmastodon.org

Informational site for the Mastodon project

Submit translations here: https://crowdin.com/project/joinmastodon

## Development

To build the site, you'll need to have Node.js version 16 installed, which you can [download from their website](https://nodejs.org/download/release/v16.20.0/) or install via tools like `fnm` or `nvm`. For dependency management, `yarn` is used, it should be automatically be installed when you install Node.js, if it's not available you can use `corepack enable` and `corepack prepare yarn@1` to install it.

### Installation

```sh
yarn
yarn run dev
```

See `/package.json` for more scripts.

### Contributing

See [CONTRIBUTING](./CONTRIBUTING.md) for more information. All interactions with this and other repositories that are part of the Mastodon project are subject to the [Mastodon Code of Conduct](https://github.com/mastodon/.github/blob/main/CODE_OF_CONDUCT.md).

### Built with

- [Next.js](https://nextjs.org/)
- [Tailwind.css](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query/v4/docs/adapters/react-query)
- [React Intl](https://formatjs.io/docs/react-intl/)

### Translations

Submit translations at [Crowdin](https://crowdin.com/project/joinmastodon).

Translations are managed via Crowdin and distributed with react-intl. The basic translation workflow is:

1. Messages are declared using the `<FormattedMessage>` component
2. Default messages are extracted to `locales/en.json` by running `yarn extract`
3. The locale files are synced with the Crowdin project. Any new messages in the source file(`locales/en.json`) are made available for translation for other languages. Any new translated messages are downloaded back to the repo into corresponding locale files (e.g. `locales/es.json`).
4. On build, each locale loads its corresponding messages from `getStaticProps()` ([example](https://github.com/oakstudios/joinmastodon/blob/461b65b7ef57576b6d74ef5ee0e34521d7e81b09/pages/index.js#L309-L313)).

#### Internationalized Routing

Localized versions of each page are hosted at dedicated URLs, making it easier for web crawling in users' preferred language. ([docs](https://nextjs.org/docs/advanced-features/i18n-routing))

### Image optimization

Raster images should be added at the maximum resolution they'll be displayed at. If art direction is not required, mobile images will be generated automatically. ([docs](https://nextjs.org/docs/basic-features/image-optimization))

## Deployment

Next.js should be hosted using a Node.js server. ([see instructions](https://nextjs.org/docs/deployment#self-hosting)). While it absolutely can exported to static HTML,

- [image optimization](#image-optimization) (for automatic webp conversion and compression)
- [internationalized routing](#internationalized-routing) ([code reference](https://github.com/oakstudios/joinmastodon/blob/87a3c1df9dce50141e097f26ebd1483b0c1bce4a/next.config.js#L9-L12))
- and redirects ([code reference](https://github.com/oakstudios/joinmastodon/blob/87a3c1df9dce50141e097f26ebd1483b0c1bce4a/next.config.js#L16-L24))

are the primary benefits of a Node.js server for this project.

For now, Node 16 LTS is recommended for building the site until support for Node 18 is provided by [Squoosh](https://github.com/GoogleChromeLabs/squoosh/issues/1242).
