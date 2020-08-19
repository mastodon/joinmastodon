import React from 'react';
import PropTypes from 'prop-types';
import WizardCard from './WizardCard';
import { FormattedMessage, defineMessages } from 'react-intl';
import { Select, CaretIcon } from 'react-responsive-select';
import { categoriesMessages } from './WizardNavigation';

const messages = defineMessages({
  allLanguages: { id: 'wizard.filter.all_languages', defaultMessage: 'All languages' },
  filterByLanguage: { id: 'wizard.filter_by_language', defaultMessage: 'Filter by language' },
});

class Wizard extends React.PureComponent {

  static propTypes = {
    category: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    intl: PropTypes.object.isRequired,
    groupedByLanguage: PropTypes.object.isRequired,
    sortedLanguages: PropTypes.arrayOf(PropTypes.object).isRequired,
    languagesMap: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    onChangeCategory: PropTypes.func.isRequired,
    onChangeLanguage: PropTypes.func.isRequired,
  };

  componentDidMount () {
    const { category, onChangeCategory } = this.props;
    onChangeCategory(category);
  }

  componentDidUpdate (prevProps) {
    const { category, onChangeCategory } = this.props;

    if (category !== prevProps.category) {
      onChangeCategory(category);
    }
  }

  handleLanguageChange = ({ value }) => {
    const { language, onChangeLanguage } = this.props;
    if (language === value) return;
    onChangeLanguage(value);
  }

  render () {
    const {
      sortedLanguages,
      groupedByLanguage,
      languages,
      languagesMap,
      category,
      language,
      loading,
      intl,
    } = this.props;

    return (
      <div className='wizard'>
        <div className='wizard__header'>
          <strong className='wizard__header__title'>{intl.formatMessage(categoriesMessages[category])}</strong>

          <div className='wizard__header__options'>
            <Select
              name="language"
              options={[
                { value: '', text: intl.formatMessage(messages.allLanguages) },

                ...languages.map(x => ({
                  value: x.locale,
                  text: !isNaN(x.servers_count) ? <span><bdi>{x.language}</bdi> ({x.servers_count})</span> : <bdi>{x.language}</bdi>,
                })),
              ]}
              caretIcon={<CaretIcon />}
              noSelectionLabel={intl.formatMessage(messages.filterByLanguage)}
              selectedValue={language}
              onChange={this.handleLanguageChange}
            />
           </div>
        </div>

        {!loading && sortedLanguages.length === 0 && (
          <FormattedMessage id='wizard.no_results' defaultMessage='Seems like there are currently no communities that fit your criteria. Try a different category or a different language filter!' />
        )}

        {loading && (
          <div className='wizard__section'>
            <strong className='wizard__section__title'><FormattedMessage id='wizard.loading' defaultMessage='Loading…' /></strong>

            <div className='wizard__row'>
              <div className='wizard-card wizard-card--placeholder' />
              <div className='wizard-card wizard-card--placeholder' />
              <div className='wizard-card wizard-card--placeholder' />
              <div className='wizard-card wizard-card--placeholder' />
              <div className='wizard-card wizard-card--placeholder' />
              <div className='wizard-card wizard-card--placeholder' />
            </div>
          </div>
        )}

        {sortedLanguages.map(language => (
          <div key={language} className='wizard__section'>
            <strong className='wizard__section__title'>{languagesMap[language] ? languagesMap[language].language : language}</strong>

            <div className='wizard__row'>
              {groupedByLanguage[language].map(item => <WizardCard key={item.domain} instance={item} />)}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Wizard;
