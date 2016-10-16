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
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        KhtmlUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',
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