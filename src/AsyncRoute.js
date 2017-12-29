import React from 'react';
import { Route } from 'react-router-dom';

class AsyncRouteComponent extends React.PureComponent {

  constructor (props) {
    super(props);
    this.state = { default: null };
  }

  componentWillMount () {
    this.updateModule(this.props.module);
  }

  componentWillReceiveProps ({ module }) {
    if (module !== this.props.module) {
      this.updateModule(module);
    }
  }

  updateModule (module) {
    import(`./routes/${module}`).then(Module => this.setState(Module));
  }

  render () {
    return this.state.default === null ? null : <this.state.default />;
  }

}

export default function AsyncRoute({ module, ...props }) {
  return (
    <Route
      component={() => <AsyncRouteComponent module={module} />}
      {...props}
    />
  );
}
