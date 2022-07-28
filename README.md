# joinmastodon.org

## Development

### Installation

```sh
yarn
yarn run dev
```

See `/package.json` for more scripts.

### Built with

- [Next.js](https://nextjs.org/)
- [Tailwind.css](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query/v4/docs/adapters/react-query)

### Translations

Translations are managed via Crowdin and distributed with react-intl. The basic translation workflow is:

1. Messages are declared using the `<FormattedMessage>` component
2. Default messages are extracted to `locales/en.json` by running `yarn extract`
3. The locale files are synced with the Crowdin project. Any new messages in the source file(`locales/en.json`) are made available for translation for other languages. Any new translated messages are downloaded back to the repo into corresponding locale files (e.g. `locales/es.json`).
4. On build, each locale loads its corresponding messages from `getStaticProps()` ([example](https://github.com/oakstudios/joinmastodon/blob/461b65b7ef57576b6d74ef5ee0e34521d7e81b09/pages/index.js#L309-L313)).
