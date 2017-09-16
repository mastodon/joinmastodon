import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';

const messages = defineMessages({
  stable: { id: 'wizard_row.stability.stable', defaultMessage: 'Stable' },
  intermittent: { id: 'wizard_row.stability.intermittent', defaultMessage: 'Intermittent' },
  awful: { id: 'wizard_row.stability.awful', defaultMessage: 'Awful' },
  full: { id: 'wizard_row.population.full', defaultMessage: 'Full' },
  medium: { id: 'wizard_row.population.medium', defaultMessage: 'Medium' },
  new: { id: 'wizard_row.population.new', defaultMessage: 'New' }
});

const WizardRow = ({ instance, intl }) => {
  const theme = (instance.info && instance.info.topic) || 'General';

  let stabilityColor, stabilityLabel,
      populationColor, populationLabel;

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

  if (!instance.open_registrations) {
    populationLabel = intl.formatMessage(messages.full);
    populationColor = 'red';
  } else if (instance.users > 10000) {
    populationLabel = intl.formatMessage(messages.medium);
    populationColor = 'yellow';
  } else {
    populationLabel = intl.formatMessage(messages.new);
    populationColor = 'green';
  }

  return (
    <a href={`https://${instance.name}/about`} target='_blank' rel='noopener' className='wizard-row'>
      <div className='wizard-column'>{instance.name}</div>
      <div className='wizard-column optional-column'><span className={`indicator-text ${stabilityColor}`}><i className={`indicator ${stabilityColor}`} /> {stabilityLabel}</span></div>
      <div className='wizard-column'><span className={`indicator-text ${populationColor}`}><i className={`indicator ${populationColor}`} /> {populationLabel}</span></div>
      <div className='wizard-column optional-column'>{theme}</div>
    </a>
  );
};

export default injectIntl(WizardRow);
