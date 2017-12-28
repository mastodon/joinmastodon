import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

const options = [
  { value: null, label: <FormattedMessage id='wizard.filters.all_languages' defaultMessage='All' /> },
  { value: 'en', label: 'English' },
  { value: 'de', label: 'Deutsch' },
  { value: 'fr', label: 'Français' },
  { value: 'es', label: 'Español' },
  { value: 'pl', label: 'Polski' },
  { value: 'pt', label: 'Português' },
  { value: 'ru', label: 'Русский' },
  { value: 'ja', label: '日本語' },
  { value: 'zh', label: '中文' },
  { value: 'ar', label: 'العربية' },
];

export default class WizardLanguageSelect extends PureComponent {
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
