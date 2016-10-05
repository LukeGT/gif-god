import React from 'react';
import ReactDOM from 'react-dom';

import add_media from './actions/add-media';

import store from './dispatchers/store';

import App from './views/App';
import './index.css';

store.change( (data) => {
  data.layers = [];
  data.props = {
    frames: 20, // TODO: set this based on the first media added
  };
});

add_media();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);