import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import { cyan500, cyan300 } from 'material-ui/styles/colors';

import store from '../dispatchers/store';
import event from '../dispatchers/event';

import './TimelineSpan.css';

class TimelineSpan extends Component {

  state = {
    dragging: false,
    target: null,
    start_x: null,
  };

  constructor() {
    super();
    store.register_component(this);

    event.on('mouseup', this.stopDragging.bind(this));
    event.on('dragend', this.stopDragging.bind(this));
    event.on('mousemove', (event) => {

      if (!this.state.dragging) { return }

      const span = this.props.data;
      const frame_width = this.props.parent.get_spans_width()/store.data.props.frames;
      const frame_diff = Math.floor((event.clientX-this.state.start_x)/frame_width+0.5);

      store.change(() => {

        var new_from, new_to;

        if (this.state.target === 'from' || this.state.target === 'both') {
          new_from = Math.max(0, Math.min(this.state.prev_props.from + frame_diff, store.data.props.frames));
        }
        if (this.state.target === 'to' || this.state.target === 'both') {
          new_to = Math.max(0, Math.min(this.state.prev_props.to + frame_diff, store.data.props.frames));
        }

        var changed = false;

        if (span.from !== new_from) {
          span.from = new_from
          changed = true;
        }
        if (span.to !== new_to) {
          span.to = new_to
          changed = true;
        }

        return changed;
      })
    });
  }

  stopDragging() {
    this.setState({ dragging: false });
  }

  mouseDownFor(target) {
    return (event) => {
      this.setState({
        target,
        dragging: true,
        start_x: event.clientX,
        prev_props: Object.assign({}, this.props.data),
      });
      console.log(this.state);
    }
  }

  render() {
    const span = this.props.data;
    const data = store.data;
    return <div
      className='timeline-span'
      style={{
        position: 'absolute',
        left: `${span.from/data.props.frames*100}%`,
        width: `${(span.to - span.from)/data.props.frames*100}%`,
        transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
      }}
    >
      <Paper
        className='timeline-span-handle'
        style={{
          backgroundColor: cyan500,
          borderTopLeftRadius: '10px',
          borderBottomLeftRadius: '10px',
        }}
        onMouseDown={this.mouseDownFor('from')}
      />
      <Paper
        className='timeline-span-centre'
        style={{
          backgroundColor: cyan300,
          borderRadius: 0,
        }}
        onMouseDown={this.mouseDownFor('both')}
      />
      <Paper
        className='timeline-span-handle'
        style={{
          backgroundColor: cyan500,
          borderTopRightRadius: '10px',
          borderBottomRightRadius: '10px',
        }}
        onMouseDown={this.mouseDownFor('to')}
      />
    </div>
  }
}

export default TimelineSpan;
