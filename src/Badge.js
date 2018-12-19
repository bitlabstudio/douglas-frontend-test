import React, { Component } from 'react'

class Badge extends Component {
  render() {
    return (
      <p
        className={`${this.props.className} badge`}
        style={{  background: this.props.color }}
      >
        {this.props.children}
      </p>
    )
  }
}

export default Badge
