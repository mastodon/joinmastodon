import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';

const Counter = ({ number, id, defaultMessage, intl }) => {
  const label = number >= 1000 ? `${intl.formatNumber(number / 1000, { maximumFractionDigits: 1 })}K` : number;
  const color = number > 200000 ? 'red' : (number > 100000 ? 'yellow' : 'green');

  return (
    <span className={`indicator-text ${color}`}>
      <i className={`indicator ${color}`} /> <FormattedMessage id={id} defaultMessage={defaultMessage} values={{ label, count: number }} />
    </span>
  );
};

export default injectIntl(Counter);
