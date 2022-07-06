import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import mastodonLogo from './assets/logo_full.svg';
import Wizard from './WizardContainer';
import WizardNavigation from './WizardNavigationContainer';
import ChoosingACommunity from './ChoosingACommunity';
import BottomNavigation from './BottomNavigation';
import { connect } from 'react-redux';

class BrowseCommunities extends React.Component {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        category: PropTypes.string,
      }),
    }),

    dispatch: PropTypes.func.isRequired,
  };

  render () {
    const { match: { params: { category } } } = this.props;

    const content = category ? (
      <Wizard category={category} />
    ) : (
      <ChoosingACommunity />
    );

    return (
      <div>
        <div className='navbar wizard-navbar'>
          <ul>
            <li>
              <Link className='brand' to='/'>
                <img className='link-logo' src={mastodonLogo} alt='Mastodon'/>
              </Link>
            </li>
          </ul>
        </div>

        <div className='wizard-page'>
          <WizardNavigation />
          {content}
        </div>

        <BottomNavigation />
      </div>
     );
  }

}

export default connect()(BrowseCommunities);
