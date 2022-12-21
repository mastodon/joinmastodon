import LinkButton from "./LinkButton"

export type TwoUpFeatureProps = {
  features: {
    Icon: (props: React.SVGProps<SVGElement>) => React.ReactElement
    title: React.ReactNode
    copy: React.ReactNode
    cta: React.ReactNode
    cta_link: string
  }[]
  padding?: string
}
/** Two-column (on desktop) feature section */
const TwoUpFeature = ({ features, padding }: TwoUpFeatureProps) => {
  return (
    <div className="mb-32 gap-gutter lg:mb-0 lg:flex">
      {features.map(({ Icon, title, copy, cta, cta_link }, i) => (
        <div
          className={`grid justify-items-center py-8 text-center lg:grid-cols-6 lg:py-32 ${padding}`}
          key={i}
        >
          <Icon className="-ml-2 h-auto w-20 text-blurple-500 md:-ml-4 md:w-32 lg:col-span-6" />
          <h2 className="h4 mb-5 mt-4 lg:col-span-6">{title}</h2>
          <h2 className="sh1 mb-8 lg:col-span-6 lg:col-start-1 xl:col-span-4 xl:col-start-2">
            {copy}
          </h2>
          <div className="lg:col-span-6">
            <LinkButton size="large" href={cta_link}>
              {cta}
            </LinkButton>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TwoUpFeature
