import React from 'react';
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import Counter from './Counter';

const messages = defineMessages({
  art: { id: 'wizard.filters.art', defaultMessage: 'Art' },
  music: { id: 'wizard.filters.music', defaultMessage: 'Music' },
  books: { id: 'wizard.filters.books', defaultMessage: 'Books' },
  activism: { id: 'wizard.filters.activism', defaultMessage: 'Activism' },
  sports: { id: 'wizard.filters.sports', defaultMessage: 'Sports' },
  gaming: { id: 'wizard.filters.gaming', defaultMessage: 'Gaming' },
  tech: { id: 'wizard.filters.technology', defaultMessage: 'Technology' },
  academia: { id: 'wizard.filters.academia', defaultMessage: 'Academia' },
  journalism: { id: 'wizard.filter.journalism', defaultMessage: 'Journalism' },
  adult: { id: 'wizard.filter.adult_content', defaultMessage: 'Adult content' },
  lgbt: { id: 'wizard.filter.lgbt', defaultMessage: 'LGBTQ+' },
  poc: { id: 'wizard.filter.poc_aa', defaultMessage: 'Black American' },
  humor: { id: 'wizard.filter.humor', defaultMessage: 'Humour' },
  furry: { id: 'wizard.filter.furry', defaultMessage: 'Furry' },
  general: { id: 'wizard.filter.general', defaultMessage: 'General' },
});

const WizardRow = ({ instance, intl }) => {
  const category = instance.info && instance.info.categories[0] ? instance.info.categories[0] : 'general';

  return (
    <div className={classNames('wizard-row', { offline: !instance.up })}>
      <div className='wizard-row__row'>
        <div className='wizard-row__main'>
          <div className='wizard-row__row'>
            <div className='wizard-row__thumbnail'>
              <div>
                <img src={instance.thumbnail_proxy} alt='' />
              </div>
            </div>

            <div className='wizard-row__details'>
              <div className='wizard-row__name'><strong>{instance.name}</strong></div>
              <div className='wizard-row__description'>{intl.formatMessage(messages[category] || messages.general)}<span className='wizard-row__description__sep' />v{instance.version}</div>
            </div>
          </div>

          <div className='wizard-row__more'>{instance.info ? instance.info.short_description : 'Missing description'}</div>
        </div>

        <div className='wizard-row__meta'>
          <a href={`https://${instance.name}/about`} target='_blank' rel='noopener noreferrer' className='cta button'>
            <FormattedMessage id='wizard_card.join' defaultMessage='Join' />
          </a>

          <Counter number={instance.users} id='wizard_row.user_count' defaultMessage='{label} {count, plural, one {person} other {people}}' />
        </div>
      </div>
    </div>
  );
};

export default injectIntl(WizardRow);
