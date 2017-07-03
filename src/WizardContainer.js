import Wizard from './Wizard';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

const getInstances = createSelector(
  [state => state.instances],
  instances => instances.filter(item => !item.dead && item.uptime > 0.70)
);

const mapStateToProps = state => ({
  instances: getInstances(state),
});

export default connect(mapStateToProps)(Wizard);
