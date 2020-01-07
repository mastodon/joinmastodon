import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';
import Counter from './Counter';

const WizardCard = ({ instance, intl }) => (
  <div className='wizard-card'>
    <div className='wizard-card__hero'>
      <img src={`${instance.proxied_thumbnail}/300`} alt='' />
    </div>

    <div className='wizard-card__row'>
      <div className='wizard-card__text'>
        <strong>{instance.domain}</strong>
        <br />
        <Counter number={instance.total_users} id='wizard_row.user_count' defaultMessage='{label} {count, plural, one {person} other {people}}' />
      </div>

      <a href={`https://${instance.domain}/about`} target='_blank' rel='noopener noreferrer' className='cta button'>
        <FormattedMessage id='wizard_card.join' defaultMessage='Join' />
      </a>
    </div>

    <div className='wizard-card__description'>{instance.description}</div>
  </div>
);

WizardCard.propTypes = {
  instance: PropTypes.shape({
    domain: PropTypes.string.isRequired,
    total_users: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    proxied_thumbnail: PropTypes.string.isRequired,
  }).isRequired,

  intl: PropTypes.object.isRequired,
};

export default injectIntl(WizardCard);
