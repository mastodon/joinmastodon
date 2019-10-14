import Wizard from './Wizard';
import { connect } from 'react-redux';
import { fetchInstances, changeFilterCategory, changeFilterLanguage, fetchLanguages } from './actions';

const mapStateToProps = state => ({
  instances: state.instances,
  languages: state.languages,
  category: state.filter.category,
  language: state.filter.language,
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

});

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);
