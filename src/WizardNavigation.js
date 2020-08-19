import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, defineMessages } from 'react-intl';
import { NavLink } from 'react-router-dom';

export const categoriesMessages = defineMessages({
  art: { id: 'wizard.filters.art', defaultMessage: 'Art' },
  music: { id: 'wizard.filters.music', defaultMessage: 'Music' },
  books: { id: 'wizard.filters.books', defaultMessage: 'Books' },
  activism: { id: 'wizard.filters.activism', defaultMessage: 'Activism' },
  sports: { id: 'wizard.filters.sports', defaultMessage: 'Sports' },
  games: { id: 'wizard.filters.gaming', defaultMessage: 'Gaming' },
  tech: { id: 'wizard.filters.technology', defaultMessage: 'Technology' },
  academia: { id: 'wizard.filters.academia', defaultMessage: 'Academia' },
  journalism: { id: 'wizard.filter.journalism', defaultMessage: 'Journalism' },
  adult: { id: 'wizard.filter.adult_content', defaultMessage: 'Adult content' },
  lgbt: { id: 'wizard.filter.lgbt', defaultMessage: 'LGBTQ+' },
  poc: { id: 'wizard.filter.poc_aa', defaultMessage: 'Black American' },
  humor: { id: 'wizard.filter.humor', defaultMessage: 'Humour' },
  furry: { id: 'wizard.filter.furry', defaultMessage: 'Furry' },
  regional: { id: 'wizard.filter.regional', defaultMessage: 'Regional' },
  food: { id: 'wizard.filter.food', defaultMessage: 'Food' },
  general: { id: 'wizard.filter.general', defaultMessage: 'General' },
});

class WizardNavigation extends React.PureComponent {

  static propTypes = {
    category: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    onMount: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
  };

  componentDidMount () {
    this.props.onMount();
  }

  render () {
    const { categories, intl } = this.props;

    return (
      <div className='wizard-navigation'>
        <NavLink to='/communities' exact activeClassName='active'><FormattedMessage id='wizard_navigation.choosing_a_community' defaultMessage='Choosing a community' /></NavLink>

        <strong className='wizard-navigation__title'><FormattedMessage id='wizard_navigation.categories' defaultMessage='Categories:' /></strong>

        {categories.map(({ category, servers_count }) => (
          <NavLink key={category} to={`/communities/${category}`} activeClassName='active'>
            {categoriesMessages[category] ? intl.formatMessage(categoriesMessages[category]) : category} ({servers_count})
          </NavLink>
        ))}
      </div>
    );
  }

}

export default WizardNavigation;
