import React, { Component } from 'react'

// From https://github.com/mauricevancooten/react-anchor-link-smooth-scroll

class AnchorLink extends Component {

  constructor(props) {
    super(props)
    this.smoothScroll = this.smoothScroll.bind(this)
  }

  componentDidMount() {
    require('smoothscroll-polyfill').polyfill()
  }

  smoothScroll(e) {
    if (e) {
      e.preventDefault()
    }

    let offset = 0

    if (typeof this.props.offset !== 'undefined') {
      offset = parseInt(this.props.offset, 10)
    }

    const id = this.props.href.slice(1)

    window.scroll({
      top: document.getElementById(id).offsetTop - offset,
      behavior: 'smooth'
    })

    this.props.onClick && this.props.onClick(e)
  }

  render() {
    return (
      <a {...this.props} onClick={this.smoothScroll}>{this.props.children}</a>
    )
  }

}

export default AnchorLink
