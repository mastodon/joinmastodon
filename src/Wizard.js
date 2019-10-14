import React from 'react';
import PropTypes from 'prop-types';
import WizardRow from './WizardRow';
import WizardCard from './WizardCard';
import { FormattedHTMLMessage as FormattedMessage, injectIntl, defineMessages } from 'react-intl';
import ReactResponsiveSelect from 'react-responsive-select';
import { Link } from 'react-router-dom';

const messages = defineMessages({
  art: { id: 'wizard.filters.art', defaultMessage: 'Art' },
  music: { id: 'wizard.filters.music', defaultMessage: 'Music' },
  books: { id: 'wizard.filters.books', defaultMessage: 'Books' },
  activism: { id: 'wizard.filters.activism', defaultMessage: 'Activism' },
  sports: { id: 'wizard.filters.sports', defaultMessage: 'Sports' },
  gaming: { id: 'wizard.filters.gaming', defaultMessage: 'Gaming' },
  tech: { id: 'wizard.filters.technology', defaultMessage: 'Technology' },
  academia: { id: 'wizard.filters.academia', defaultMessage: 'Academia' },
  journalism: { id: 'wizard.filter.journalism', defaultMessage: 'Journalism' },
  adult: { id: 'wizard.filter.adult_content', defaultMessage: 'Adult content' },
  lgbt: { id: 'wizard.filter.lgbt', defaultMessage: 'LGBTQ+' },
  poc: { id: 'wizard.filter.poc_aa', defaultMessage: 'Black American' },
  humor: { id: 'wizard.filter.humor', defaultMessage: 'Humour' },
  furry: { id: 'wizard.filter.furry', defaultMessage: 'Furry' },
  category: { id: 'wizard.filter.category', defaultMessage: 'Category: ' },
  language: { id: 'wizard.filter.language', defaultMessage: 'Language: ' },
  general: { id: 'wizard.filter.general', defaultMessage: 'General' },
  all_languages: { id: 'wizard.filter.all_languages', defaultMessage: 'All languages' },
  regional: { id: 'wizard.filter.regional', defaultMessage: 'Regional' },
  food: { id: 'wizard.filter.food', defaultMessage: 'Food' },
});

const caretIcon = (
  <svg className="caret-icon" x="0px" y="0px" width="11.848px" height="6.338px" viewBox="351.584 2118.292 11.848 6.338">
    <g><path d="M363.311,2118.414c-0.164-0.163-0.429-0.163-0.592,0l-5.205,5.216l-5.215-5.216c-0.163-0.163-0.429-0.163-0.592,0s-0.163,0.429,0,0.592l5.501,5.501c0.082,0.082,0.184,0.123,0.296,0.123c0.103,0,0.215-0.041,0.296-0.123l5.501-5.501C363.474,2118.843,363.474,2118.577,363.311,2118.414L363.311,2118.414z"/></g>
  </svg>
);

class Wizard extends React.PureComponent {

  static propTypes = {
    category: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    intl: PropTypes.object.isRequired,
    instances: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

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

    const content = instances.length > 0 ? (
      <div>
        <div className='wizard__row'>
          {instances.slice(0, 3).map(item => <WizardCard key={item.domain} instance={item} />)}
        </div>

        <div className='covenant-banner'>
          <i className='ion-md-heart' /> <FormattedMessage id='covenant_banner.text' defaultMessage='We only list servers that are committed to active moderation against <strong>racism, sexism and transphobia</strong>.' /> <Link to='/covenant' className='link-button'><FormattedMessage id='covenant_banner.learn_more' defaultMessage='Learn more about this policy or how to submit your own server' /> <i className='ion-ios-arrow-forward' /></Link>
        </div>

        <div className='wizard__list'>
          {instances.slice(3).map(item => <WizardRow key={item.domain} instance={item} />)}
        </div>
      </div>
    ) : (
      <div className='empty'>
        <FormattedMessage id='wizard.empty' defaultMessage='No results… for now!' />
      </div>
    );

    return (
      <div className='wizard-page' id='getting-started'>
        <h1><i className='ion-md-person-add' /> <FormattedMessage id='wizard.sign_up' defaultMessage='Sign up' /></h1>

        <p className='lead'>
          <FormattedMessage id='wizard.hint2' defaultMessage='All you need to do to sign up is choose a server. Just like when signing up for an e-mail address, one server is going to be hosting your account and be part of your identity.' /> <strong><FormattedMessage id='wizard.hint5' defaultMessage='Remember, you can follow and talk to anyone from any server, regardless of your choice!' /></strong>
        </p>

        <form className='wizard-controls'>
          <div className='row'>
            <ReactResponsiveSelect
              name="category"
              options={[
                { value: 'general', text: intl.formatMessage(messages.general) },
                { value: 'regional', text: intl.formatMessage(messages.regional) },
                { value: 'art', text: intl.formatMessage(messages.art) },
                //{ value: 'music', text: intl.formatMessage(messages.music) },
                //{ value: 'books', text: intl.formatMessage(messages.books) },
                { value: 'journalism', text: intl.formatMessage(messages.journalism) },
                { value: 'activism', text: intl.formatMessage(messages.activism) },
                { value: 'lgbt', text: intl.formatMessage(messages.lgbt) },
                //{ value: 'poc', text: intl.formatMessage(messages.poc) },
                //{ value: 'sports', text: intl.formatMessage(messages.sports) },
                { value: 'games', text: intl.formatMessage(messages.gaming) },
                { value: 'tech', text: intl.formatMessage(messages.tech) },
                //{ value: 'academia', text: intl.formatMessage(messages.academia) },
                { value: 'adult', text: intl.formatMessage(messages.adult) },
                //{ value: 'humor', text: intl.formatMessage(messages.humor) },
                { value: 'furry', text: intl.formatMessage(messages.furry) },
                { value: 'food', text: intl.formatMessage(messages.food) },
              ]}
              caretIcon={caretIcon}
              selectedValue={category}
              prefix={intl.formatMessage(messages.category)}
              onChange={this.handleCategoryChange}
            />

            <span className='wizard-controls__label'></span>

            <ReactResponsiveSelect
              name="language"
              options={[
                { value: '', text: intl.formatMessage(messages.all_languages) },
                //{ value: 'ar', text: 'العربية' },
                { value: 'ca', text: 'Català' },
                //{ value: 'cs', text: 'Čeština' },
                //{ value: 'cy', text: 'Cymraeg' },
                { value: 'de', text: 'Deutsch' },
                { value: 'en', text: 'English' },
                //{ value: 'es', text: 'Español' },
                { value: 'eu', text: 'Euskara' },
                { value: 'fi', text: 'Suomi' },
                { value: 'fr', text: 'Français' },
                { value: 'he', text: 'עברית' },
                { value: 'it', text: 'Italiano' },
                { value: 'ja', text: '日本語' },
                { value: 'ko', text: '한국어' },
                //{ value: 'nl', text: 'Nederlands' },
                { value: 'no', text: 'Norsk' },
                { value: 'pl', text: 'Polski' },
                { value: 'pt', text: 'Português' },
                //{ value: 'ru', text: 'Русский' },
                { value: 'sk', text: 'Slovenčina' },
                //{ value: 'sq', text: 'Shqip' },
                { value: 'sv', text: 'Svenska' },
                //{ value: 'tr', text: 'Türkçe' },
                { value: 'uk', text: 'Українська' },
                { value: 'zh', text: '中文' },
              ]}
              caretIcon={caretIcon}
              selectedValue={language}
              prefix={intl.formatMessage(messages.language)}
              onChange={this.handleLanguageChange}
            />
          </div>
        </form>

        <div className='wizard'>
          {content}
        </div>
      </div>
    );
  }
}

export default injectIntl(Wizard);
