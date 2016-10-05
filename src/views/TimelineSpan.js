import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import { cyan500, cyan300 } from 'material-ui/styles/colors';

import store from '../dispatchers/store';

import './TimelineSpan.css';

class TimelineSpan extends Component {

  constructor() {
    super();
    store.register_component(this);
  }

  render() {
    return <div
      className='timeline-span'
      style={{
        position: 'absolute',
        left: `${this.props.from/store.data.props.frames*100}%`,
        width: `${(this.props.to - this.props.from)/store.data.props.frames*100}%`,
      }}
    >
      <Paper
        className='timeline-span-handle'
        style={{
          backgroundColor: cyan500,
          borderTopLeftRadius: '10px',
          borderBottomLeftRadius: '10px',
        }}
      />
      <Paper
        className='timeline-span-centre'
        style={{
          backgroundColor: cyan300,
          borderRadius: 0,
        }}
      />
      <Paper
        className='timeline-span-handle'
        style={{
          backgroundColor: cyan500,
          borderTopRightRadius: '10px',
          borderBottomRightRadius: '10px',
        }}
      />
    </div>
  }
}

export default TimelineSpan;
