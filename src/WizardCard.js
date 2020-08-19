import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, defineMessages } from 'react-intl';
import Counter from './Counter';
import classNames from 'classnames';

const messages = defineMessages({
  peopleCount: { id: 'wizard_card.people_count', defaultMessage: '{label} {count, plural, one {person} other {people}}' },
});

class WizardCard extends React.PureComponent {

  static propTypes = {
    instance: PropTypes.shape({
      domain: PropTypes.string.isRequired,
      total_users: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      proxied_thumbnail: PropTypes.string.isRequired,
    }).isRequired,
  };

  render () {
    const { instance } = this.props;

    return (
      <div className='wizard-card'>
        <div className='wizard-card__row' style={{ justifyContent: 'space-between' }}>
          <strong className='wizard-card__title'>{instance.domain}</strong>
          <Counter number={instance.total_users} {...messages.peopleCount} />
        </div>

        <div className='wizard-card__hero'>
          <img src={`${instance.proxied_thumbnail}/300`} alt='' />
        </div>

        <div className='wizard-card__description'>{instance.description}</div>

        <div className='wizard-card__row'>
          <a href={`https://${instance.domain}/about`} target='_blank' rel='noopener noreferrer' className={classNames('cta button', { 'button--warning': instance.approval_required })}>
            {instance.approval_required ? <FormattedMessage id='wizard_card.request_invite' defaultMessage='Request invite' /> : <FormattedMessage id='wizard_card.join' defaultMessage='Join' />}
          </a>

          {instance.approval_required ? <span className='warning-text'><FormattedMessage id='wizard_card.no_instant_sign_up' defaultMessage='No instant sign-up' /></span> : <a href={`https://${instance.domain}/explore`} className='link'><FormattedMessage id='wizard_card.browse_directory' defaultMessage='Browse directory' /></a>}
        </div>
      </div>
    );
  }

}

export default WizardCard;
