import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Dropdown extends PureComponent {

  static propTypes = {
    label: PropTypes.node.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,

    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.node.isRequired,
    })).isRequired,

    asLinks: PropTypes.bool,
  };

  state = {
    opened: false
  };

  renderMenu () {
    const { value, options, asLinks } = this.props;

    return (
      <div className='dropdown__menu'>
        {options.map(option => asLinks ? (
          <a href={option.value} className='dropdown__option' target='_blank' rel='noopener noreferrer'>
            {option.label}
          </a>
        ) : (
          <div key={option.value} className={classNames('dropdown__option', { active: option.value === value })} onClick={this.handleOptionClick.bind(this, option.value)}>
            {option.label}
          </div>
        ))}
      </div>
    );
  }

  handleOptionClick = (value) => {
    if (this.props.onChange) {
      this.props.onChange(value);
    }

    this.setState({ opened: false });
  }

  handleClick = () => {
    this.setState({ opened: !this.state.opened });
  }

  handleDocumentClick = e => {
    if (this.node && !this.node.contains(e.target)) {
      this.setState({ opened: false });
    }
  }

  componentDidMount () {
    document.addEventListener('click', this.handleDocumentClick, false);
    document.addEventListener('touchend', this.handleDocumentClick, false);
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleDocumentClick, false);
    document.removeEventListener('touchend', this.handleDocumentClick, false);
  }

  setRef = c => {
    this.node = c;
  }

  render () {
    const { opened } = this.state;
    const { label }  = this.props;

    return (
      <div className={classNames('dropdown', { active: opened })} ref={this.setRef}>
        <div className='dropdown__control' tabIndex='0' role='button' onClick={this.handleClick}>{label} <i className='dropdown__arrow ion-ios-arrow-down' /></div>
        {opened && this.renderMenu()}
      </div>
    );
  }
}
