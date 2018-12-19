import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Badge from './Badge'

import { colors } from './Grid'

class GridItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }
  render() {
    return (
      <div className="grid-item">
        <div className="image" />
        <div className="item-content">
          <div className="item-header">
            <p className="item-name">{this.props.name}</p>
            <Badge className={'item-badge'} color={colors[this.props.category]}>
              {this.props.category}
            </Badge>
          </div>
          <div className="item-description">{this.props.description}</div>
          <div className="more-info">
            <span style={{ color: colors[this.props.category] }}>&gt;</span>
            <span className="label">More info</span>
          </div>
        </div>
      </div>
    )
  }
}

export default GridItem
