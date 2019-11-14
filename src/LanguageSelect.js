import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

const options = [
  { value: 'en', label: <span>English</span> },
  { value: 'ar', label: <span>العربية</span> },
  { value: 'cs', label: <span>Čeština</span> },
  { value: 'cy', label: <span>Cymraeg</span> },
  { value: 'de', label: <span>Deutsch</span> },
  { value: 'es', label: <span>Español</span> },
  { value: 'fr', label: <span>Français</span> },
  { value: 'it', label: <span>Italiano</span> },
  { value: 'ja', label: <span>日本語</span> },
  { value: 'ko', label: <span>한국어</span> },
  { value: 'nl-NL', label: <span>Nederlands</span> },
  { value: 'pl', label: <span>Polski</span> },
  { value: 'pt-BR', label: <span>Português do Brasil</span> },
  { value: 'ru', label: <span>Русский</span> },
  { value: 'sq', label: <span>Shqip</span> },
  { value: 'tr', label: <span>Türkçe</span> },
  { value: 'zh', label: <span>简体中文</span> },
  { value: 'zh-TW', label: <span>繁體中文（臺灣）</span> },
];

const LanguageSelect = ({ value, onChange }) => (
  <Dropdown
    options={options}
    value={value}
    label='文A'
    onChange={onChange}
  />
);

LanguageSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LanguageSelect;
