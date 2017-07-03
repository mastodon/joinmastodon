import React from 'react';
import { fetchInstances } from './actions';
import WizardRow from './WizardRow';
import { Scrollbars } from 'react-custom-scrollbars';

export default class Wizard extends React.Component {

  componentDidMount () {
    this.props.dispatch(fetchInstances());
  }

  render () {
    const { instances } = this.props;

    return (
      <div className='wizard-page' id='getting-started'>
        <h2>Instance picker</h2>
        <p>Each instance is a separate, independently owned gateway into the fediverse. You can talk to your friends regardless of which one you choose, but they have different moderation policies and interest groups.</p>

        <div className='wizard'>
          <div className='wizard-header'>
            <div className='wizard-column'>Server</div>
            <div className='wizard-column'>Stability</div>
            <div className='wizard-column'>Population</div>
            <div className='wizard-column'>Theme</div>
          </div>

          <Scrollbars className='wizard-content' style={{ height: 500 }}>
            {instances.map(item =>
              <WizardRow key={item._id} instance={item} />
            )}
          </Scrollbars>
        </div>
      </div>
    );
  }
}
