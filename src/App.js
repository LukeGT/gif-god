import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import GifAppBar from './GifAppBar';
import GifDrawer from './GifDrawer';
import GifCanvas from './GifCanvas';
import GifTimeline from './GifTimeline';

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
        <GifCanvas
          style={{
            flexGrow: 1,
            zIndex: -1000,
          }}
        />
        <GifTimeline />
      </div>
    </MuiThemeProvider>;
  }
}

export default App;
