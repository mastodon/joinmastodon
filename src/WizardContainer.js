import Wizard from './Wizard';
import { connect } from 'react-redux';
import { fetchInstances, changeFilterCategory, changeFilterLanguage, fetchLanguages, showAllInstances } from './actions';

const mapStateToProps = state => ({
  instances: state.instances,
  languages: state.languages,
  category: state.filter.category,
  language: state.filter.language,
  showAll: state.filter.showAll,
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

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);
