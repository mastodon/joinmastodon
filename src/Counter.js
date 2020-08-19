import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';

const Counter = ({ number, id, defaultMessage, intl }) => {
  const label = number >= 1000 ? `${intl.formatNumber(number / 1000, { maximumFractionDigits: 1 })}K` : number;
  const color = number > 200000 ? 'red' : (number > 100000 ? 'yellow' : 'green');

  return (
    <span className={`indicator-text ${color}`}>
      <i className={`indicator ${color}`} /> {intl.formatMessage({ id, defaultMessage }, { label, count: number })}
    </span>
  );
};

Counter.propTypes = {
  number: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  defaultMessage: PropTypes.string.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Counter);
