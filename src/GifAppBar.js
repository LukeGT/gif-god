import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Add from 'material-ui/svg-icons/content/add';
import FileDownload from 'material-ui/svg-icons/file/file-download';

import AppBarButton from './AppBarButton';
import dispatcher from './Dispatcher';

class GifAppBar extends Component {

  render() {
    return <AppBar
      title="Gif God"
      onLeftIconButtonTouchTap={() => {
        dispatcher.fire('toggle-drawer');
      }}
      iconElementRight={
        <div>
          <AppBarButton label="Add Media" icon={<Add />} />
          <AppBarButton label="Download" icon={<FileDownload />} />
        </div>
      }
      {...this.props}
    />
  }
}

export default GifAppBar;
