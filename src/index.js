import React from 'react';
import ReactDOM from 'react-dom';

import add_media from './actions/add-media';

import store from './dispatchers/store';

import App from './views/App';
import './index.css';

store.change( (data) => {
  data.layers = [];
  data.props = {
    frame_num: 20,
  };
});

add_media();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);