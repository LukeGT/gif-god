import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ErrorDialogue from './ErrorDialogue';
import FileDialogue from './FileDialogue';
import GifAppBar from './GifAppBar';
import GifDrawer from './GifDrawer';
import GifCanvas from './GifCanvas';
import GifTimeline from './GifTimeline';
import GifProps from './GifProps';

import event from '../dispatchers/event';

import './App.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const global_events = [
  'drag',
  'dragend',
  'mouseup',
  'mousemove',
  'touchmove',
  'touchend',
];
for (var event_name of global_events) {
  document.addEventListener(event_name, ((event_name) => (e) => {
    event.fire(event_name, e);
  })(event_name));
}

class App extends Component {
  render() {
    return <MuiThemeProvider>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <GifAppBar />
        <GifDrawer />
        <div style={{
          display: 'flex',
          flexGrow: 1,
        }}>
          <GifCanvas
            style={{
              flexGrow: 1,
              zIndex: -1000,
            }}
          />
          <GifProps />
        </div>
        <GifTimeline />
        <FileDialogue />
        <ErrorDialogue />
      </div>
    </MuiThemeProvider>;
  }
}

export default App;
