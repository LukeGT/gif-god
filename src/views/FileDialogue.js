import React, { Component } from 'react';

import event from '../dispatchers/event';

class FileDialogue extends Component {

  constructor() {
    super();
    event.on('add-media', () => {
      this.input.value = null;
      this.input.click();
    });
  }

  render() {
    return <input
      ref={ (input) => {this.input = input} }
      type='file'
      style={{
        display: 'none',
      }}
      onChange={ () => {
        for (var file of this.input.files) {
          event.fire('add-layer', {
            media: file,
          })
        }
      }}
    />
  }
}

export default FileDialogue;