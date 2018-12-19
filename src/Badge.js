import React, { Component } from 'react'

class Badge extends Component {
  render() {
    return (
      <p
        className="badge"
        style={{  background: this.props.color }}
      >
        {this.props.children}
      </p>
    )
  }
}

export default Badge
