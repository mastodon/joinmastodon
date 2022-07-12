import { useIntl } from "react-intl"
import Dropdown from "./Dropdown"

/** TODO: get actual languages, allow change */
export const LanguageSelect = () => {
  const intl = useIntl()
  return (
    <>文A</>
    //   <Dropdown
    //     options={intl..map((x) => ({
    //       value: x.locale,
    //       label: <span lang={x.locale}>{x.language}</span>,
    //     }))}
    //     value={value}
    //     label="文A"
    //     onChange={onChange}
    //   />
  )
}

// LanguageSelect.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.object).isRequired,
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default LanguageSelect
