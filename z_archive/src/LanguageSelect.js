import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

const LanguageSelect = ({ options, value, onChange }) => (
  <Dropdown
    options={options.map(x => ({ value: x.locale, label: <span lang={x.locale}>{x.language}</span> }))}
    value={value}
    label='文A'
    onChange={onChange}
  />
);

LanguageSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LanguageSelect;
