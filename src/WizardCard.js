import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import Counter from './Counter';

const WizardCard = ({ instance, intl }) => (
  <div className='wizard-card'>
    <div className='wizard-card__hero'>
      <img src={instance.thumbnail_proxy} alt='' />
    </div>

    <div className='wizard-card__row'>
      <div className='wizard-card__text'>
        <strong>{instance.name}</strong>
        <br />
        <Counter number={instance.users} id='wizard_row.user_count' defaultMessage='{label} {count, plural, one {person} other {people}}' />
      </div>

      <a href={`https://${instance.name}/about`} target='_blank' rel='noopener noreferrer' className='cta button'>
        <FormattedMessage id='wizard_card.join' defaultMessage='Join' />
      </a>
    </div>

    <div className='wizard-card__description'>{instance.info.short_description}</div>
  </div>
);

export default injectIntl(WizardCard);
