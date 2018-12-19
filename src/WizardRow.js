import React from 'react';
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl';
import classNames from 'classnames';

const messages = defineMessages({
  stable: { id: 'wizard_row.stability.stable', defaultMessage: 'Stable' },
  intermittent: { id: 'wizard_row.stability.intermittent', defaultMessage: 'Intermittent' },
  awful: { id: 'wizard_row.stability.awful', defaultMessage: 'Awful' },
});

const WizardRow = ({ instance, intl }) => {
  const theme = (instance.info && instance.info.theme) || 'General';
  const description = (instance.info && instance.info.short_description) || theme;
  const population = instance.users >= 1000 ? `${intl.formatNumber(instance.users / 1000, { maximumFractionDigits: 1 })}K` : instance.users;

  let stabilityColor, stabilityLabel,
      populationColor;

  if (instance.uptime > 0.95) {
    stabilityLabel = intl.formatMessage(messages.stable);
    stabilityColor = 'green';
  } else if (instance.uptime > 0.50) {
    stabilityLabel = intl.formatMessage(messages.intermittent);
    stabilityColor = 'yellow';
  } else {
    stabilityLabel = intl.formatMessage(messages.awful);
    stabilityColor = 'red';
  }

  if (instance.users > 200000) {
    populationColor = 'red';
  } else if (instance.users > 100000) {
    populationColor = 'yellow';
  } else {
    populationColor = 'green';
  }

  const populationSpan = <FormattedMessage id='wizard_row.user_count' defaultMessage='{population} {count, plural, one {person} other {people}}' values={{ population, count: instance.users }} />;

  return (
    <a href={`https://${instance.name}/about`} target='_blank' rel='noopener noreferrer' className={classNames('wizard-row', { offline: !instance.up })}>
      <div className='wizard-row__thumbnail'>
        <div>
          <img src={instance.thumbnail_proxy} alt='' />
        </div>
      </div>

      <div className='wizard-row__details'>
        <div className='wizard-row__name'>{instance.name}<span className={`xs-show indicator-text ${populationColor}`}>{populationSpan}</span></div>
        <div className='wizard-row__description'>{description}</div>
      </div>

      <div className='wizard-row__meta'>
        <div className='wizard-row__stability'><span className={`indicator-text ${stabilityColor}`}><i className={`indicator ${stabilityColor}`} /> {stabilityLabel}</span></div>
        <div className='wizard-row__population'><span className={`indicator-text ${populationColor}`}><i className={`indicator ${populationColor}`} /> {populationSpan}</span></div>
      </div>
    </a>
  );
};

export default injectIntl(WizardRow);
