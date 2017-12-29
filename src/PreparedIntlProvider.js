import axios from 'axios';
import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';

const messagesPaths = require.context('file-loader!./locales/', false, /\.json$/);

export default class PreparedIntlProvider extends React.PureComponent {

  constructor (props) {
    super(props);
    this.state = null;
  }

  componentWillMount () {
    this.updateModule(this.props.locale);
  }

  componentWillReceiveProps ({ locale }) {
    this.updateModule(locale);
  }

  updateModule (locale) {
    import(`react-intl/locale-data/${locale}`).then(module => {
      addLocaleData(module);
      this.setState({ locale });
    });

    axios.get(messagesPaths(`./${locale}.json`))
      .then(({ data }) => this.setState({ messages: data }));
  }

  render () {
    return this.state === null ?
      null :
      <IntlProvider {...this.state}>{this.props.children}</IntlProvider>;
  }

}
