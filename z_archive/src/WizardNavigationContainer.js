import WizardNavigation from './WizardNavigation';
import { connect } from 'react-redux';
import { fetchCategories } from './actions';
import { injectIntl } from 'react-intl';
import { createSelector } from 'reselect';

const canonicalOrder = [
  'general',
  'regional',
  'art',
  'music',
  'journalism',
  'activism',
  'lgbt',
  'games',
  'tech',
  'academia',
  'adult',
  'humor',
  'furry',
  'food',
];

const orderedCategoriesSelector = createSelector(
  state => state.categories,

  categories => {
    const sortedCategories = [...categories];

    sortedCategories.sort((a, b) => {
      const indexA = canonicalOrder.indexOf(a.category);
      const indexB = canonicalOrder.indexOf(b.category);

      if (indexA > indexB) {
        return 1;
      } else if (indexA < indexB) {
        return -1;
      } else {
        return 0;
      }
    });

    return sortedCategories;
  }
);

const mapStateToProps = (state, { intl }) => ({
  category: state.filter.category,
  categories: orderedCategoriesSelector(state),
  intl,
});

const mapDispatchToProps = dispatch => ({

  onMount: () => {
    dispatch(fetchCategories());
  },

});

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(WizardNavigation));
