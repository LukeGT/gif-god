import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FileDialogue from './FileDialogue';
import GifAppBar from './GifAppBar';
import GifDrawer from './GifDrawer';
import GifCanvas from './GifCanvas';
import GifTimeline from './GifTimeline';
import GifProps from './GifProps';

import './App.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

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
      </div>
    </MuiThemeProvider>;
  }
}

export default App;
