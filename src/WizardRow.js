import React from 'react';

const WizardRow = ({ instance }) => {
  const theme = (instance.info && instance.info.topic) || 'General';

  let stabilityColor, stabilityLabel,
      populationColor, populationLabel;

  if (instance.uptime > 0.95) {
    stabilityLabel = 'Stable';
    stabilityColor = 'green';
  } else if (instance.uptime > 0.50) {
    stabilityLabel = 'Intermittent'
    stabilityColor = 'yellow';
  } else {
    stabilityLabel = 'Awful'
    stabilityColor = 'red';
  }

  if (!instance.openRegistrations) {
    populationLabel = 'Full';
    populationColor = 'red';
  } else if (instance.users > 20000) {
    populationLabel = 'Medium';
    populationColor = 'yellow';
  } else {
    populationLabel = 'New';
    populationColor = 'green';
  }

  return (
    <a href={`https://${instance.name}/about`} target='_blank' rel='noopener' className='wizard-row'>
      <div className='wizard-column'>{instance.name}</div>
      <div className='wizard-column'><span className={`indicator-text ${stabilityColor}`}><i className={`indicator ${stabilityColor}`} /> {stabilityLabel}</span></div>
      <div className='wizard-column'><span className={`indicator-text ${populationColor}`}><i className={`indicator ${populationColor}`} /> {populationLabel}</span></div>
      <div className='wizard-column'>{theme}</div>
    </a>
  );
};

export default WizardRow;
