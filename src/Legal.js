import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const Legal = () => (
  <div className='container legal'>
    <p>Mastodon · <Link to='/imprint'><FormattedMessage id='imprint' defaultMessage='Imprint' /></Link></p>
  </div>
);

export default Legal;
