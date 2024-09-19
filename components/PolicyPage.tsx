export const PolicyPage = ({ children }) => {
    return (
      <div className="b2 grid-cols-12 md:grid">
        <div className="gap-gutter pt-12 pb-24 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
          {children}
        </div>
      </div>
    )
  }
  
  export default PolicyPage