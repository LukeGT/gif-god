import React, { Component } from 'react';

import Paper from 'material-ui/Paper';

import event from '../dispatchers/event';

class GifProps extends Component {

  state = {
    open: false,
  }

  constructor() {
    super()
    event.on('toggle-props', this.toggle);
  }

  set_open = (open) => {
    this.setState({open})
  }

  toggle = () => {
    this.set_open(!this.state.open);
  }

  render() {
    return <Paper
      style={{
        width: this.state.open ? 400 : 0,
      }}
    />
  }
}

export default GifProps;