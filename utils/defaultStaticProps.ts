import loadIntlMessages from "./loadIntlMessages"

export function withDefaultStaticProps(origin?) {
  return async (ctx) => {
    const {
      props: originProps = {},
      revalidate = undefined,
      ...originRemaining
    } = origin ? await origin(ctx) : {}

    return {
      props: { intlMessages: await loadIntlMessages(ctx), ...originProps },
      revalidate: revalidate || 300,
      ...originRemaining,
    }
  }
}
