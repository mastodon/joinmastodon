import React, { PureComponent } from 'react';
import classNames from 'classnames';

import flagEn from 'twemoji/2/svg/1f1ec-1f1e7.svg';
import flagFr from 'twemoji/2/svg/1f1eb-1f1f7.svg';
import flagPl from 'twemoji/2/svg/1f1f5-1f1f1.svg';
import flagEs from 'twemoji/2/svg/1f1ea-1f1f8.svg';
import flagJa from 'twemoji/2/svg/1f1ef-1f1f5.svg';

const options = [
  { value: 'en', label: <span><img src={flagEn} className='emoji' alt='' /> English</span> },
  { value: 'fr', label: <span><img src={flagFr} className='emoji' alt='' /> Français</span> },
  { value: 'es', label: <span><img src={flagEs} className='emoji' alt='' /> Español</span> },
  { value: 'pl', label: <span><img src={flagPl} className='emoji' alt='' /> Polski</span> },
  { value: 'ja', label: <span><img src={flagJa} className='emoji' alt='' /> 日本語</span> }
];

export default class LanguageSelect extends PureComponent {
  state = {
    opened: false
  };

  renderMenu () {
    const { value } = this.props;

    return (
      <div className='dropdown__menu'>
        {options.map(option => (
          <div key={option.value} className={classNames('dropdown__option', { active: option.value === value })} onClick={this.handleOptionClick.bind(this, option.value)}>
            {option.label}
          </div>
        ))}
      </div>
    );
  }

  handleOptionClick = (value) => {
    this.props.onChange(value);
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

    return (
      <div className={classNames('dropdown', { active: opened })} ref={this.setRef}>
        <div className='dropdown__control' tabIndex='0' role='button' onClick={this.handleClick}>文A <i className='dropdown__arrow ion-ios-arrow-down' /></div>
        {opened && this.renderMenu()}
      </div>
    );
  }
}
