import React from 'react';
import Dropdown from './Dropdown';

import flagEn from 'twemoji/2/svg/1f1ec-1f1e7.svg';
import flagFr from 'twemoji/2/svg/1f1eb-1f1f7.svg';
import flagPl from 'twemoji/2/svg/1f1f5-1f1f1.svg';
import flagCs from 'twemoji/2/svg/1f1e8-1f1ff.svg';
import flagEs from 'twemoji/2/svg/1f1ea-1f1f8.svg';
import flagJa from 'twemoji/2/svg/1f1ef-1f1f5.svg';
import flagKo from 'twemoji/2/svg/1f1f0-1f1f7.svg';
import flagDe from 'twemoji/2/svg/1f1e9-1f1ea.svg';
import flagBr from 'twemoji/2/svg/1f1e7-1f1f7.svg';
import flagCn from 'twemoji/2/svg/1f1e8-1f1f3.svg';
import flagRu from 'twemoji/2/svg/1f1f7-1f1fa.svg';
import flagIt from 'twemoji/2/svg/1f1ee-1f1f9.svg';
import flagAr from 'twemoji/2/svg/1f1e6-1f1ea.svg';
import flagTr from 'twemoji/2/svg/1f1f9-1f1f7.svg';

const options = [
  { value: 'en', label: <span><img src={flagEn} className='emoji' alt='' /> English</span> },
  { value: 'de', label: <span><img src={flagDe} className='emoji' alt='' /> Deutsch</span> },
  { value: 'fr', label: <span><img src={flagFr} className='emoji' alt='' /> Français</span> },
  { value: 'es', label: <span><img src={flagEs} className='emoji' alt='' /> Español</span> },
  { value: 'pl', label: <span><img src={flagPl} className='emoji' alt='' /> Polski</span> },
  { value: 'cs', label: <span><img src={flagCs} className='emoji' alt='' /> Čeština</span> },
  { value: 'pt-BR', label: <span><img src={flagBr} className='emoji' alt='' /> Português do Brasil</span> },
  { value: 'ru', label: <span><img src={flagRu} className='emoji' alt='' /> Русский</span> },
  { value: 'ja', label: <span><img src={flagJa} className='emoji' alt='' /> 日本語</span> },
  { value: 'ko', label: <span><img src={flagKo} className='emoji' alt='' /> 한국어</span> },
  { value: 'zh', label: <span><img src={flagCn} className='emoji' alt='' /> 简体中文</span> },
  { value: 'it', label: <span><img src={flagIt} className='emoji' alt='' /> Italiano</span> },
  { value: 'ar', label: <span><img src={flagAr} className='emoji' alt='' /> العربية</span> },
  { value: 'tr', label: <span><img src={flagTr} className='emoji' alt='' /> Türkçe</span> },
];

export default ({ value, onChange }) => (
  <Dropdown
    options={options}
    value={value}
    label='文A'
    onChange={onChange}
  />
);
