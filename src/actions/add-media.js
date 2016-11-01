import uuid from 'uuid';
import pixel from 'pixel';

import event from '../dispatchers/event';
import store from '../dispatchers/store';


function pixel_loader(name, data) {

  pixel.parse(data).then( (frames) => {

    store.change( (data) => {

      if (data.layers.length === 0) {
        data.props.frame_num = Math.max(frames.length, data.props.frame_num);
      }

      data.layers.push({
        id: uuid.v4(),
        name,
        frames,
        spans: [{
          from: 0,
          to: Math.min(data.props.frame_num, frames.length),
        }],
        props: {},
      });
    });
  });
}

const loaders = {
  'image/gif': pixel_loader,
  'image/png': pixel_loader,
  'image/jpeg': pixel_loader,
  'iamge/bmp': pixel_loader,
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