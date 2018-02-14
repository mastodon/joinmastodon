import React from 'react';
import WizardRow from './WizardRow';
import { Scrollbars } from 'react-custom-scrollbars';
import { FormattedHTMLMessage as FormattedMessage, injectIntl, defineMessages } from 'react-intl';
import ReactResponsiveSelect from 'react-responsive-select';

const messages = defineMessages({
  i_am: { id: 'wizard.filters.i_am', defaultMessage: 'I am ' },
  i_speak: { id: 'wizard.filters.i_speak', defaultMessage: 'I speak ' },
  all_languages: { id: 'wizard.filters.all_languages', defaultMessage: 'all languages' },
  everything: { id: 'wizard.filters.everything', defaultMessage: 'everything' },
  artist: { id: 'wizard.filters.artist', defaultMessage: 'an artist' },
  musician: { id: 'wizard.filters.musician', defaultMessage: 'a musician' },
  writer: { id: 'wizard.filters.writer', defaultMessage: 'a writer' },
  reader: { id: 'wizard.filters.reader', defaultMessage: 'a book lover' },
  activist: { id: 'wizard.filters.activist', defaultMessage: 'an activist' },
  sports_fan: { id: 'wizard.filters.sports_fan', defaultMessage: 'a sports fan' },
  gamer: { id: 'wizard.filters.gamer', defaultMessage: 'a gamer' },
  dev: { id: 'wizard.filters.dev', defaultMessage: 'a developer' },
  sysadmin: { id: 'wizard.filters.sysadmin', defaultMessage: 'a sysadmin' },
  academia: { id: 'wizard.filters.academia', defaultMessage: 'in academia' },
});

const caretIcon = (
  <svg className="caret-icon" x="0px" y="0px" width="11.848px" height="6.338px" viewBox="351.584 2118.292 11.848 6.338">
    <g><path d="M363.311,2118.414c-0.164-0.163-0.429-0.163-0.592,0l-5.205,5.216l-5.215-5.216c-0.163-0.163-0.429-0.163-0.592,0s-0.163,0.429,0,0.592l5.501,5.501c0.082,0.082,0.184,0.123,0.296,0.123c0.103,0,0.215-0.041,0.296-0.123l5.501-5.501C363.474,2118.843,363.474,2118.577,363.311,2118.414L363.311,2118.414z"/></g>
  </svg>
);

class Wizard extends React.PureComponent {

  componentDidMount () {
    this.props.onMount();
  }

  handleCategoryChange = ({ value }) => {
    const { category } = this.props;
    if (category === value) return;
    this.props.onChangeCategory(value);
  }

  handleLanguageChange = ({ value }) => {
    const { language } = this.props;
    if (language === value) return;
    this.props.onChangeLanguage(value);
  }

  renderThumb ({ style, ...props }) {
    const thumbStyle = {
      backgroundColor: 'rgba(217, 225, 232, 0.7)',
      borderRadius: '4px',
    };

    return <div style={{ ...style, ...thumbStyle }} />;
  }

  render () {
    const { instances, category, language, intl } = this.props;

    return (
      <div className='wizard-page' id='getting-started'>
        <h1><i className='ion-person-add' /> <FormattedMessage id='wizard.sign_up' defaultMessage='Sign up' /></h1>

        <form className='wizard-controls'>
          <ReactResponsiveSelect
            name="category"
            options={[
              { value: '', text: intl.formatMessage(messages.everything) },
              { value: 'art', text: intl.formatMessage(messages.artist) },
              { value: 'music', text: intl.formatMessage(messages.musician) },
              { value: 'books', text: intl.formatMessage(messages.writer) },
              { value: 'books', text: intl.formatMessage(messages.reader) },
              { value: 'activism', text: intl.formatMessage(messages.activist) },
              { value: 'sports', text: intl.formatMessage(messages.sports_fan) },
              { value: 'games', text: intl.formatMessage(messages.gamer) },
              { value: 'tech', text: intl.formatMessage(messages.dev) },
              { value: 'tech', text: intl.formatMessage(messages.sysadmin) },
              { value: 'academia', text: intl.formatMessage(messages.academia) },
            ]}
            caretIcon={caretIcon}
            selectedValue={category}
            prefix={intl.formatMessage(messages.i_am)}
            onChange={this.handleCategoryChange}
          />

          <span className='wizard-controls__label'>,</span>

          <ReactResponsiveSelect
            name="language"
            options={[
              { value: '', text: intl.formatMessage(messages.all_languages) },
              { value: 'en', text: 'English' },
              { value: 'de', text: 'Deutsch' },
              { value: 'fr', text: 'Français' },
              { value: 'es', text: 'Español' },
              { value: 'pl', text: 'Polski' },
              { value: 'pt', text: 'Português' },
              { value: 'ru', text: 'Русский' },
              { value: 'ja', text: '日本語' },
              { value: 'zh', text: '中文' },
              { value: 'ar', text: 'العربية' },
            ]}
            caretIcon={caretIcon}
            selectedValue={language}
            prefix={intl.formatMessage(messages.i_speak)}
            onChange={this.handleLanguageChange}
          />

          <span className='wizard-controls__label'><FormattedMessage id='wizard.filters.results' defaultMessage='and here is where I can sign up:' /></span>
        </form>

        <div className='wizard'>
          <Scrollbars className='wizard-content' style={{ height: 500 }} renderThumbVertical={this.renderThumb}>
            {instances.map(item =>
              <WizardRow key={item.id} instance={item} />
            )}
          </Scrollbars>
        </div>

        <div className='wizard-hint'>
          <div className='wizard-hint__icon'>
            <i className='ion-information-circled' />
          </div>

          <div className='wizard-hint__text'>
            <FormattedMessage id='wizard.hint' defaultMessage="This is like picking an e-mail hosting provider, but more social since you'll see your neighbours. The domain will also be part of your username!" />
          </div>
        </div>
      </div>
    );
  }
}

export default injectIntl(Wizard);
