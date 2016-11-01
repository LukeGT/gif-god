import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import TimelineLayer from './TimelineLayer';
import { red500 } from 'material-ui/styles/colors';

import store from '../dispatchers/store';

import './GifTimeline.css'

class GifTimeline extends Component {

  constructor() {
    super();
    store.register_component(this);
  }

  render() {
    return <Paper
      className='timeline'
      style={{
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        KhtmlUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',
        overflow: 'hidden',
      }}
    >
      <div className='scrubber-rail'>
        <div className='header' />
        <div className='scrubber-box'>
          <Paper
            className='scrubber'
            style={{
              width: `${100/store.data.props.frame_num}%`,
              borderBottomLeftRadius: '10px',
              borderBottomRightRadius: '10px',
              backgroundColor: red500,
            }}
          />
          <div
            className='line'
            style={{
              backgroundColor: red500,
            }}
          />
        </div>
      </div>
      <div className='layers'>
        {store.data.layers.map( (layer, i) => {
          return <TimelineLayer key={layer.id} data={layer} />
        })}
      </div>
    </Paper>
  }
}

export default GifTimeline;