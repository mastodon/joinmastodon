import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';

const messages = defineMessages({
  title: { id: 'title', defaultMessage: 'Giving social networking back to you - The Mastodon Project' }
});

class Title extends React.PureComponent {

  render () {
    document.title = this.props.intl.formatMessage(messages.title);
    return null;
  }

}

export default injectIntl(Title);
