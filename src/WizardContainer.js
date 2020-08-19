import Wizard from './Wizard';
import { connect } from 'react-redux';
import { fetchInstances, changeFilterCategory, changeFilterLanguage, fetchLanguages } from './actions';
import { injectIntl } from 'react-intl';
import { createSelector } from 'reselect';

const languagesMapSelector = createSelector(
  state => state.languages,
  languages => languages.reduce((map, language) => { map[language.locale] = language; return map; }, {})
);

const groupedByLanguageSelector = createSelector(
  state => state.instances,
  instances => instances.reduce((languages, server) => { (languages[server.language] = languages[server.language] || []).push(server); return languages; }, {})
);

const sortedLanguagesSelector = createSelector(
  groupedByLanguageSelector,
  state => state.locale,

  (groupedByLanguage, preferredLanguage) => {
    const sortedLanguages = Object.keys(groupedByLanguage);

    // Sort languages by aggregate activity
    sortedLanguages.sort((a, b) => {
      const compA = groupedByLanguage[a].reduce((total, x) => total + x.last_week_users, 0);
      const compB = groupedByLanguage[b].reduce((total, x) => total + x.last_week_users, 0);

      if (compA > compB) {
        return -1;
      } else if (compA < compB) {
        return 1;
      } else {
        return 0;
      }
    });

    // Move preferred language to the top of the results
    if (sortedLanguages.includes(preferredLanguage)) {
      sortedLanguages.unshift(sortedLanguages.splice(sortedLanguages.indexOf(preferredLanguage), 1)[0]);
    }

    return sortedLanguages;
  }
);

const languagesWithSelectedLanguageSelector = createSelector(
  state => state.languages,
  state => state.selectedLanguageData,

  (languages, selectedLanguageData) => {
    if (selectedLanguageData === null || languages.find(x => x.locale === selectedLanguageData.locale)) {
      return languages;
    }

    return languages.concat([{ ...selectedLanguageData, servers_count: 0 }]);
  }
);

const mapStateToProps = (state, { intl }) => ({
  groupedByLanguage: groupedByLanguageSelector(state),
  sortedLanguages: sortedLanguagesSelector(state),
  languages: languagesWithSelectedLanguageSelector(state),
  languagesMap: languagesMapSelector(state),
  language: state.filter.language,
  loading: state.loading,
  intl,
});

const mapDispatchToProps = dispatch => ({

  onChangeCategory: value => {
    dispatch(changeFilterCategory(value));
    dispatch(fetchInstances());
    dispatch(fetchLanguages());
  },

  onChangeLanguage: value => {
    dispatch(changeFilterLanguage(value));
    dispatch(fetchInstances());
  },

});

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(Wizard));
