import React, { Component } from 'react';

import TimelineSpan from './TimelineSpan';

import './TimelineLayer.css'

class TimelineLayer extends Component {
  render() {
    return <div
      className='timeline-layer'
    >
      <div className='header'>{this.props.name}</div>
      <div className='spans'>
        {this.props.spans.map((span, i) => {
          return <TimelineSpan key={i} {...span} />
        })}
      </div>
    </div>
  }
}

export default TimelineLayer;
