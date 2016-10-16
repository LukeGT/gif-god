import uuid from 'uuid';
import gify from 'gify-parse';
import libgif from 'libgif-js';

import event from '../dispatchers/event';
import store from '../dispatchers/store';


const loaders = {
  'image/gif': (name, data) => {

    // TODO: write my own damn lib to do the things that I want.
    new libgif().load_raw(data, (gif) => {

      const frame_num = gif.images.length;

      store.change( (data) => {

        if (data.layers.length === 0) {
          data.props.frame_num = frame_num;
        }

        data.layers.push({
          id: uuid.v4(),
          name,
          frames: gif.images,
          spans: [{
            from: 0,
            to: Math.min(data.props.frame_num, gif.images.length),
          }],
          props: {},
        });

      });
    });
  },
};

export default () => {

  event.on('add-layer', ({media}) => {

    if (!loaders[media.type]) {
      return event.fire_later('error-dialogue', {
        title: 'Unsupported file format',
        message: 'Sorry, Gif God doesn\'t support ' + media.type + ' files. Try converting it to a more common format.',
      });
    }

    const media_reader = new FileReader();
    media_reader.readAsArrayBuffer(media);
    media_reader.onload = (event) => {
      loaders[media.type](media.name, media_reader.result);
    }
  });
};