/**
 * Layout scaffolding for page files that need an 8-column
 *  area for rich text, but no additional sections.
 * (eg: /imprint)
 */
export const BasicPage = ({ children }) => {
  return (
    <div className="b1 grid-cols-12 md:grid">
      <div className="gap-gutter pt-24 pb-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
        {children}
      </div>
    </div>
  )
}

export default BasicPage
