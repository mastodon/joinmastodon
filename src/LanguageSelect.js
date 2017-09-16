import React from 'react';
import Dropdown from 'react-dropdown';
import flagEn from 'twemoji/2/svg/1f1ec-1f1e7.svg';
import flagJa from 'twemoji/2/svg/1f1ef-1f1f5.svg';

const options = [
  { value: 'en', label: <span><img src={flagEn} className='emoji' alt='' /> English</span> },
  { value: 'ja', label: <span><img src={flagJa} className='emoji' alt='' /> 日本語</span> }
];

const LanguageSelect = ({ value, onChange }) => (
  <Dropdown
    options={options}
    value={{ value, label: '文A' }}
    onChange={onChange}
  />
);

export default LanguageSelect;
