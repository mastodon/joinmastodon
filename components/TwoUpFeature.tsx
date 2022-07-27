import LinkButton from "./LinkButton"
import SVG from "react-inlinesvg"

export type TwoUpFeatureProps = {
  icon: string
  title: React.ReactNode
  copy: React.ReactNode
  cta: React.ReactNode
  cta_link: string
}
const TwoUpFeature = ({ features }) => {
  return (
    <div className="gap-gutter md:flex">
      {features.map(({ icon, title, copy, cta, cta_link }) => (
        <div className="grid py-8 md:py-32 lg:grid-cols-6" key={title}>
          <div className="md:pie-4 lg:col-span-4 lg:col-start-2 lg:pie-0">
            <SVG
              src={icon}
              className="-ml-2 h-auto w-20 text-accent-blurple md:-ml-4 md:w-32"
            />
            <h2 className="h4 mb-5 mt-4">{title}</h2>
            <h2 className="sh1 mb-8">{copy}</h2>
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
