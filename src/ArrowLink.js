import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Link } from 'react-router-dom';

const ArrowLink = ({ to, href, children, intl, ...other }) => {
  const arrowVariant = intl.locale === 'ar' ? 'ion-ios-arrow-back' : 'ion-ios-arrow-forward';

  if (to) {
    return <Link to={to} {...other}>{children} <i className={arrowVariant} /></Link>;
  } else {
    return <a href={href} {...other}>{children} <i className={arrowVariant} /></a>;
  }
};

ArrowLink.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(ArrowLink);
