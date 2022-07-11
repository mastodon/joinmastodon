import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { useEffect } from "react"
import { useCallback } from "react"
/**
 *  static propTypes = {
 *    label: PropTypes.node.isRequired,
 *    value: PropTypes.string,
 *    onChange: PropTypes.func,
 *
 *    options: PropTypes.arrayOf(PropTypes.shape({
 *      value: PropTypes.string.isRequired,
 *      label: PropTypes.node.isRequired,
 *    })).isRequired,
 *
 *    asLinks: PropTypes.bool,
 *  };
 */
export const Dropdown = ({ label, value, onChange, options, asLinks }) => {
  const [opened, setOpened] = React.useState(false)
  const root = React.useRef(null)

  const handleOptionClick = (value) => {
    if (onChange) {
      onChange(value)
    }
    setOpened(false)
  }

  const handleClick = () => {
    setOpened(!opened)
  }

  const handleDocumentClick = (e) => {
    if (root.current && !root.current.contains(e.target)) {
      setOpened(false)
    }
  }

  const renderMenu = () => {
    return (
      <div className="dropdown__menu">
        {options.map((option) =>
          asLinks ? (
            <a
              href={option.value}
              className="dropdown__option"
              target="_blank"
              rel="noopener noreferrer"
            >
              {option.label}
            </a>
          ) : (
            <div
              key={option.value}
              className={classNames("dropdown__option", {
                active: option.value === value,
              })}
              onClick={handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          )
        )}
      </div>
    )
  }

  // Mount / Unmount event handlers
  useEffect(() => {
    document.addEventListener("click", handleDocumentClick, false)
    document.addEventListener("touchend", handleDocumentClick, false)
    return () => {
      document.removeEventListener("click", handleDocumentClick, false)
      document.removeEventListener("touchend", handleDocumentClick, false)
    }
  })

  return (
    <div className={classNames("dropdown", { active: opened })} ref={root}>
      <div
        className="dropdown__control"
        tabIndex="0"
        role="button"
        onClick={handleClick}
      >
        {label} <i className="dropdown__arrow ion-ios-arrow-down" />
      </div>
      {opened && renderMenu()}
    </div>
  )
}
