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
    event.on('touchend', this.stopDragging.bind(this));
    event.on('mousemove', this.mouseMove.bind(this));
    event.on('touchmove', this.mouseMove.bind(this));
  }

  stopDragging() {
    this.setState({ dragging: false });
  }

  mouseMove(event) {

    if (!this.state.dragging) { return }

    const frame_width = this.props.parent.get_spans_width()/store.data.props.frame_num;
    var frame_diff = Math.floor((event.clientX-this.state.start_x)/frame_width+0.5);

    // Limit movement to within the frames of the project
    for (var t of ['from', 'to']) {
      if (this.state.target === t || this.state.target === 'both') {
        frame_diff = Math.max(
          -this.state.prev_props[t],
          Math.min(
            frame_diff,
            store.data.props.frame_num - this.state.prev_props[t]
          )
        )
      }
    }

    // Don't let the span become less than 1 frame long
    const from_to_diff = this.state.prev_props.to - this.state.prev_props.from - 1;
    if (this.state.target === 'from') {
      frame_diff = Math.min(from_to_diff, frame_diff)
    }
    if (this.state.target === 'to') {
      frame_diff = Math.max(-from_to_diff, frame_diff)
    }

    // Modify the state
    store.change(() => {

      const span = this.props.data;
      var changed = false;

      for (var t of ['from', 'to']) {
        if (this.state.target === t || this.state.target === 'both') {
          if (span[t] !== this.state.prev_props[t] + frame_diff) {
            span[t] = this.state.prev_props[t] + frame_diff;
            changed = true;
          }
        }
      }

      return changed;
    })
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
        left: `${span.from/data.props.frame_num*100}%`,
        width: `${(span.to - span.from)/data.props.frame_num*100}%`,
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
        onTouchStart={this.mouseDownFor('from')}
      />
      <Paper
        className='timeline-span-centre'
        style={{
          backgroundColor: cyan300,
          borderRadius: 0,
        }}
        onMouseDown={this.mouseDownFor('both')}
        onTouchStart={this.mouseDownFor('both')}
      />
      <Paper
        className='timeline-span-handle'
        style={{
          backgroundColor: cyan500,
          borderTopRightRadius: '10px',
          borderBottomRightRadius: '10px',
        }}
        onMouseDown={this.mouseDownFor('to')}
        onTouchStart={this.mouseDownFor('to')}
      />
    </div>
  }
}

export default TimelineSpan;
