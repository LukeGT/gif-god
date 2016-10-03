import React, { Component } from 'react';

class GifCanvas extends Component {
  state = {
    width: 256,
    height: 256,
  }

  render() {
    return <div
      style={Object.assign({}, this.props.style, {
        position: 'relative',
      })}
    >
      <canvas
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginTop: `-${this.state.height/2}px`,
          marginLeft: `-${this.state.width/2}px`,
          width: this.state.width,
          height: this.state.height,
          boxShadow: '0 2px 10px 10px #EAEAEA',
        }}
      />
    </div>
  }
}

export default GifCanvas;