import Wizard from './Wizard';
import { connect } from 'react-redux';
import { fetchInstances, changeFilterCategory, changeFilterLanguage, fetchLanguages, showAllInstances } from './actions';
import { injectIntl } from 'react-intl';

const mapStateToProps = (state, { intl }) => ({
  instances: state.instances,
  languages: state.languages,
  category: state.filter.category,
  language: state.filter.language,
  showAll: state.filter.showAll,
  intl,
});

const mapDispatchToProps = dispatch => ({

  onMount: () => {
    dispatch(fetchInstances());
    dispatch(fetchLanguages());
  },

  onChangeCategory: value => {
    dispatch(changeFilterCategory(value));
    dispatch(fetchInstances());
    dispatch(fetchLanguages());
  },

  onChangeLanguage: value => {
    dispatch(changeFilterLanguage(value));
    dispatch(fetchInstances());
  },

  onShowAll: () => {
    dispatch(showAllInstances());
  },

});

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(Wizard));
