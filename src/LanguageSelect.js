import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

const options = [
  { value: 'en', label: <span lang="en">English</span> },
  { value: 'ar', label: <span lang="ar">العربية</span> },
  { value: 'cs', label: <span lang="cs">Čeština</span> },
  { value: 'cy', label: <span lang="cy">Cymraeg</span> },
  { value: 'de', label: <span lang="de">Deutsch</span> },
  { value: 'es', label: <span lang="es">Español</span> },
  { value: 'fr', label: <span lang="fr">Français</span> },
  { value: 'it', label: <span lang="it">Italiano</span> },
  { value: 'ja', label: <span lang="ja">日本語</span> },
  { value: 'ko', label: <span lang="ko">한국어</span> },
  { value: 'nl-NL', label: <span lang="nl-NL">Nederlands</span> },
  { value: 'pl', label: <span lang="pl">Polski</span> },
  { value: 'pt-BR', label: <span lang="pt-BR">Português do Brasil</span> },
  { value: 'ru', label: <span lang="ru">Русский</span> },
  { value: 'sq', label: <span lang="sq">Shqip</span> },
  { value: 'tr', label: <span lang="tr">Türkçe</span> },
  { value: 'zh', label: <span lang="zh">简体中文</span> },
  { value: 'zh-TW', label: <span lang="zh-TW">繁體中文（臺灣）</span> },
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
