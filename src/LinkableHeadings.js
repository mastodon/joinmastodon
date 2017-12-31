import React from 'react';
import { Link } from 'react-router-dom';

class LinkableHeading extends React.PureComponent {

  handleClick ({ target }) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  render () {
    return (
      <Link to={`#${this.props.id}`} onClick={this.handleClick}>
        <span aria-hidden='true' className='heading--linkable__hash'>#</span>
        {this.props.children}
      </Link>
    );
  }

}

export function LinkableH2({ children, ...props }) {
  return (
    <h2 className='heading--linkable' {...props}>
      <LinkableHeading id={props.id}>{children}</LinkableHeading>
    </h2>
  );
}

export function LinkableH3({ children, ...props }) {
  return (
    <h3 className='heading--linkable' {...props}>
      <LinkableHeading id={props.id}>{children}</LinkableHeading>
    </h3>
  );
}

export function LinkableH4({ children, ...props }) {
  return (
    <h4 className='heading--linkable' {...props}>
      <LinkableHeading id={props.id}>{children}</LinkableHeading>
    </h4>
  );
}
