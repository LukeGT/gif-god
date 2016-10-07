import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import TimelineLayer from './TimelineLayer';

import store from '../dispatchers/store';

class GifTimeline extends Component {

  constructor() {
    super();
    store.register_component(this);
  }

  render() {
    return <Paper
      style={{
        '-webkit-touch-callout': 'none',
        '-webkit-user-select': 'none',
        '-khtml-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none',
        overflow: 'hidden',
      }}
    >
      {store.data.layers.map( (layer, i) => {
        return <TimelineLayer key={layer.id} data={layer} />
      })}
    </Paper>
  }
}

export default GifTimeline;