import React from 'react';
import ReactDOM from 'react-dom';

import add_media from './actions/add-media';

import App from './views/App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

add_media();