import React from 'react';
import { injectIntl } from 'react-intl';
import { Route } from 'react-router-dom';

class AsyncDocumentation extends React.PureComponent {

  constructor (props) {
    super(props);
    this.state = { default: null };
  }

  componentWillMount () {
    this.updateModule(this.props.directory, this.props.intl);
  }

  componentWillReceiveProps ({ directory, intl }) {
    this.updateModule(directory, intl);
  }

  updateModule (directory, { locale }) {
    import(`./documentation/${directory}/${locale}`)
      .catch(() => import(`./documentation/${directory}/en`))
      .then(Module => this.setState(Module));
  }

  render () {
    return this.state.default === null ? null : <this.state.default />;
  }

}

const AsyncDocumentationIntl = injectIntl(AsyncDocumentation);

export default function AsyncDocumentationRoute({ directory, ...props }) {
  return (
    <Route
      component={() => <AsyncDocumentationIntl directory={directory} />}
      {...props}
    />
  );
}
