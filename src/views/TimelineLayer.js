import React, { Component } from 'react';

import TimelineSpan from './TimelineSpan';

import './GifTimeline.css'

class TimelineLayer extends Component {

  get_spans_width() {
    return this.spans.offsetWidth;
  }

  render() {
    return <div
      className='timeline-layer'
    >
      <div className='header'>{this.props.data.name}</div>
      <div className='spans' ref={(spans) => { this.spans = spans }}>
        {this.props.data.spans.map((span, i) => {
          return <TimelineSpan key={i} parent={this} data={span} />
        })}
      </div>
    </div>
  }
}

export default TimelineLayer;
