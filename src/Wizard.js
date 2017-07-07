import React from 'react';
import WizardRow from './WizardRow';
import { Scrollbars } from 'react-custom-scrollbars';

export default class Wizard extends React.PureComponent {

  componentDidMount () {
    this.props.onMount();
  }

  handleChange = e => {
    this.props.onChange(e.target.value);
  }

  handleClear = e => {
    e.preventDefault();
    this.props.onClear();
  }

  render () {
    const { instances, searchValue } = this.props;
    const hasValue = searchValue.length > 0;

    return (
      <div className='wizard-page' id='getting-started'>
        <h2>Choose an instance picker</h2>
        <p>Each instance is a separate, independently owned gateway into the fediverse. You can talk to your friends regardless of which one you choose, but they have different moderation policies and interest groups.</p>
        <p>You can choose an instance from the list below, or
          <a className='inline' target='_blank' href="https://instances.mastodon.xyz">
            answer a few questions to get a list of suggestions
          </a>.
        </p>
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

        <div className='wizard-controls'>
          <div className='search'>
            <label for='instance-search' className='accessibly-hidden'>Search for an instance</label>
            <input
              id='instance-search'
              className='search__input'
              type='text'
              placeholder='Search'
              value={searchValue}
              onChange={this.handleChange}
            />

            <div role='button' tabIndex='0' className='search__icon' onClick={this.handleClear}>
              <i className={`ion-android-search ${hasValue ? '' : 'active'}`} />
              <i className={`ion-android-cancel ${hasValue ? 'active' : ''}`} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
