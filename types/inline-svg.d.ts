declare module "*.svg?inline" {
  import { ReactElement, SVGProps } from "react"
  const content: (props: SVGProps<SVGElement>) => ReactElement
  export default content
}
