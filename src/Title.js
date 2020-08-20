import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, injectIntl } from 'react-intl';
import Helmet from 'react-helmet';

const messages = defineMessages({
  title: { id: 'title', defaultMessage: 'Giving social networking back to you - Mastodon' }
});

const Title = ({ intl }) => (
  <Helmet>
    <title>{intl.formatMessage(messages.title)}</title>
  </Helmet>
);

Title.propTypes = {
  intl: PropTypes.object.isRequired,
}

export default injectIntl(Title);
