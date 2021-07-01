import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import Helmet from 'react-helmet';

const ChoosingACommunity = ({ intl }) => (
  <div>
    <div className='wizard__header'>
      <strong className='wizard__header__title'>
        <FormattedMessage id='wizard_navigation.choosing_a_community' defaultMessage='Choosing a community' />
      </strong>
    </div>

    <p><FormattedMessage id='choosing_a_community.all_you_need_to_sign_up' defaultMessage='All you need to do to sign-up is choose a community. Just like when signing up for an e-mail address, one community is going to be hosting your account and be part of your online identity.' /></p>

    <div className='feature-grid'>
      <div className='feature-angle'>
        <i className='ion-md-business' />
        <p><FormattedMessage id='choosing_a_community.every_community_is_independent' defaultMessage='Every community is operated by an entirely independent organization or individual' /></p>
      </div>

      <div className='feature-angle'>
        <i className='ion-md-chatbubbles' />
        <p><FormattedMessage id='choosing_a_community.you_can_follow_anyone' defaultMessage='You can follow and talk to people from other communities seamlessly from one account.' /></p>
      </div>

      <div className='feature-angle'>
        <i className='ion-md-home' />
        <p><FormattedMessage id='choosing_a_community.you_can_move_account' defaultMessage='You can move your account to a different community later without losing your followers.' /></p>
      </div>

      <div className='feature-angle'>
        <i className='ion-md-heart' />
        <p><FormattedMessage id='choosing_a_community.we_only_list_communities' defaultMessage='We only list communities that are committed to active moderation against racism, sexism and transphobia.' /></p>
      </div>
    </div>

    <Helmet>
      <title>{intl.formatMessage({ id: 'wizard_navigation.choosing_a_community', defaultMessage: 'Choosing a community' })} - Mastodon</title>
      <meta property='og:title' content={intl.formatMessage({ id: 'wizard_navigation.choosing_a_community', defaultMessage: 'Choosing a community' })} />
    </Helmet>
  </div>
);

export default injectIntl(ChoosingACommunity);
