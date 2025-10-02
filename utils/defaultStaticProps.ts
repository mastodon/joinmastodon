import { GetStaticProps, GetStaticPropsContext } from "next"
import loadIntlMessages from "./loadIntlMessages"

type ReturnProps<Props extends Record<string, any>> = Props & {
  intlMessages: Record<string, string>
}

export function withDefaultStaticProps<
  Props extends Record<string, any> = Record<string, any>,
>(origin?: GetStaticProps<Props>): GetStaticProps<ReturnProps<Props>> {
  return async (ctx: GetStaticPropsContext<ReturnProps<Props>>) => {
    const { revalidate = 300, ...originResult } = origin
      ? await origin(ctx)
      : {}
    const originProps =
      "props" in originResult ? originResult.props : ({} as Props)

    return {
      ...originResult,
      props: {
        ...(originProps as Props),
        intlMessages: await loadIntlMessages(ctx),
      },
      revalidate: revalidate,
    }
  }
}
