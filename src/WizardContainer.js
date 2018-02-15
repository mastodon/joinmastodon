import Wizard from './Wizard';
import { connect } from 'react-redux';
import { fetchInstances, changeFilterCategory, changeFilterLanguage } from './actions';

const mapStateToProps = state => ({
  instances: state.instances,
  category: state.filter.category,
  language: state.filter.language,
});

const mapDispatchToProps = dispatch => ({

  onMount: () => {
    dispatch(fetchInstances());
  },

  onChangeCategory: value => {
    dispatch(changeFilterCategory(value));
    dispatch(fetchInstances());
  },

  onChangeLanguage: value => {
    dispatch(changeFilterLanguage(value));
    dispatch(fetchInstances());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);
