import LanguageSelect from './LanguageSelect';
import { connect } from 'react-redux';
import { changeLocale } from './actions';

const mapStateToProps = state => ({
  value: state.locale
});

const mapDispatchToProps = dispatch => ({
  onChange: option => dispatch(changeLocale(option.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelect);
