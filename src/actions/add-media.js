import uuid from 'uuid';

import event from '../dispatchers/event';
import store from '../dispatchers/store';

export default () => {

  event.on('add-layer', ({name, media}) => {
    store.change( (data) => {
      data.layers.push({
        id: uuid.v4(),
        name,
        media,
        spans: [{
          from: 0,
          to: Math.floor(Math.random()*20), // TODO: determine from media
        }],
        props: {},
      });
    });
  });
};