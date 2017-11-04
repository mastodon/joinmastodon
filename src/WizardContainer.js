import Wizard from './Wizard';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { fetchInstances, changeSearchValue } from './actions';
import fuzzysearch from 'fuzzysearch';

const getInstances = createSelector(
  [
    state => state.locale,
    state => state.searchValue,
    state => state.instancesLocale,
    state => state.instances,
  ],
  (_, searchValue, locale, instances) => {
    searchValue = searchValue.toLowerCase();

    return instances.filter(item => {
      const eligible    = !item.dead && item.uptime > 0.70 && item.open_registrations;
      const isSearching = searchValue.length > 0;

      return eligible &&
        (locale === null || (item.info && item.info.languages.indexOf(locale) !== -1)) &&
        (!isSearching || fuzzysearch(searchValue, item.searchable));
    });
  }
);

const mapStateToProps = state => ({
  instances: getInstances(state),
  searchValue: state.searchValue,
});

const mapDispatchToProps = dispatch => ({
  onMount: () => dispatch(fetchInstances()),
  onChange: value => dispatch(changeSearchValue(value)),
  onClear: () => dispatch(changeSearchValue('')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);
