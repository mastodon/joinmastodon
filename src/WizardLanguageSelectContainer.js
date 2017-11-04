import WizardLanguageSelect from './WizardLanguageSelect';
import { connect } from 'react-redux';
import { changeInstancesLocale } from './actions';

const mapStateToProps = state => ({
  value: state.instancesLocale
});

const mapDispatchToProps = dispatch => ({
  onChange: value => dispatch(changeInstancesLocale(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(WizardLanguageSelect);
