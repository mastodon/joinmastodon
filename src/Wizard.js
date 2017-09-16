import React from 'react';
import WizardRow from './WizardRow';
import { Scrollbars } from 'react-custom-scrollbars';
import { FormattedHTMLMessage as FormattedMessage, injectIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  search: { id: 'wizard.search', defaultMessage: 'Search for an instance' }
});

class Wizard extends React.PureComponent {

  componentDidMount () {
    this.props.onMount();
  }

  handleChange = e => {
    this.props.onChange(e.target.value);
  }

  handleClear = e => {
    e.preventDefault();
    this.props.onClear();
  }

  renderThumb ({ style, ...props }) {
    const thumbStyle = {
      backgroundColor: 'rgba(217, 225, 232, 0.7)',
      borderRadius: '4px',
    };

    return <div style={{ ...style, ...thumbStyle }} />;
  }

  render () {
    const { instances, searchValue, intl } = this.props;
    const hasValue = searchValue.length > 0;

    return (
      <div className='wizard-page' id='getting-started'>
        <h2><FormattedMessage id='wizard.get_started' defaultMessage='<strong>Get started:</strong> Choose an instance' /></h2>
        <p><FormattedMessage id='wizard.text' defaultMessage='Each server is a separate, independently owned gateway into the fediverse. You can talk to your friends regardless of which one you choose, but each will have different moderation policies and interests, so choose the one that feels the most comfortable to you.' /></p>

        <div className='wizard-controls'>
          <div className='external-wizard'>
            <a className='cta button' target='_blank' href="https://instances.social"><FormattedMessage id='wizard.help_me_choose' defaultMessage='Help me choose' /></a>
          </div>

          <div className='spacer'></div>

          <div className='search'>
            <label htmlFor='instance-search' className='accessibly-hidden'><FormattedMessage id='wizard.search' defaultMessage='Search for an instance' /></label>

            <input
              id='instance-search'
              className='search__input'
              type='text'
              placeholder={intl.formatMessage(messages.search)}
              value={searchValue}
              onChange={this.handleChange}
            />

            <div role='button' tabIndex='0' className='search__icon' onClick={this.handleClear}>
              <i className={`ion-android-search ${hasValue ? '' : 'active'}`} />
              <i className={`ion-android-cancel ${hasValue ? 'active' : ''}`} />
            </div>
          </div>
        </div>

        <div className='wizard'>
          <div className='wizard-header'>
            <div className='wizard-column'><FormattedMessage id='wizard.column.server' defaultMessage='Server' /></div>
            <div className='wizard-column optional-column'><FormattedMessage id='wizard.column.stability' defaultMessage='Stability' /></div>
            <div className='wizard-column'><FormattedMessage id='wizard.column.population' defaultMessage='Population' /></div>
            <div className='wizard-column optional-column'><FormattedMessage id='wizard.column.theme' defaultMessage='Theme' /></div>
          </div>

          <Scrollbars className='wizard-content' style={{ height: 500 }} renderThumbVertical={this.renderThumb}>
            {instances.map(item =>
              <WizardRow key={item.id} instance={item} />
            )}
          </Scrollbars>
        </div>

        <p className='hint'><FormattedMessage tagName='strong' id='wizard.tip' defaultMessage='Tip:' /><FormattedMessage id='wizard.tip_text' defaultMessage='This isn’t just your home, it’s also the address that other people can find you by. It’ll be <samp>@username@example.com</samp> like choosing an email address.' /></p>
      </div>
    );
  }
}

export default injectIntl(Wizard);
