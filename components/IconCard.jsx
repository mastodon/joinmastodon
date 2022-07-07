import classnames from "classnames"
import SVG from "react-inlinesvg"

/**
 * IconCard component.
 * Layout (width, height, positioning) can be set from the parent.
 * @param {{
 *  title: React.ReactNode,
 *  icon: string,
 *  copy: React.ReactNode
 * }} props 
 */
export const IconCard = ({ title, icon, copy }) => {
  return (
    <>
      <div className="IconCard">
        <div className="IconCard__icon">
          <SVG src={`/icons/${icon}.svg`} />
        </div>
        <div className="IconCard__content">
          <h3 className="h5">{title}</h3>
          <p className="b2">{copy}</p>
        </div>
      </div>
      <style jsx>{`
        .IconCard {
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: center;
          text-align: center;
          padding: 3rem 2rem 2rem;
          gap: 2rem;
          background: var(--white);
          box-shadow: var(--shadow-1);
          border-radius: var(--border-radius);
        }
        .IconCard__icon {
          width: 7.5rem;
          height: 7.5rem;
        }
        .IconCard__content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
      `}</style>
    </>
  )
}
