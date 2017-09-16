import App from './App';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  usersLocale: state.locale,
});

export default connect(mapStateToProps)(App);
