import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import TimelineLayer from './TimelineLayer';

import store from '../dispatchers/store';

class GifTimeline extends Component {

  constructor() {
    super();
    store.change( (data) => {
      data.layers = [];
    });
    store.register( () => this.forceUpdate() );
  }

  render() {
    return <Paper
      style={{
        backgroundColor: 'white',
      }}
    >
      {store.data.layers.map( (layer, i) => {
        return <TimelineLayer key={layer.id} {...layer} />
      })}
    </Paper>
  }
}

export default GifTimeline;