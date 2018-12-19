import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="brand">Brandname</div>
        <div className="nav">
          <div className="nav-item active">Menu Item 1</div>
          <div className="nav-item">Menu Item 2</div>
          <div className="nav-item">Menu Item 3</div>
          <div className="nav-item">Menu Item 4</div>
          <div className="nav-item">Menu Item 5</div>
          <div className="nav-item">Menu Item 6</div>
        </div>
      </div>
    )
  }
}
