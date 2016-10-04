import React, { Component } from 'react';
import './TimelineLayer.css'

class TimelineLayer extends Component {
  render() {
    return <div
      className='timeline-layer'
    >
      <div className='header'>{this.props.name}</div>
      <div className='spans'></div>
    </div>
  }
}

export default TimelineLayer;
