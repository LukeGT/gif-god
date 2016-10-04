import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Add from 'material-ui/svg-icons/content/add';
import FileDownload from 'material-ui/svg-icons/file/file-download';
import SettingsApplications from 'material-ui/svg-icons/action/settings-applications';

import AppBarButton from './AppBarButton';
import event from '../dispatchers/event';

class GifAppBar extends Component {

  render() {
    return <AppBar
      title="Gif God"
      onLeftIconButtonTouchTap={ () => {
        event.fire('toggle-drawer');
      }}
      iconElementRight={
        <div>
          <AppBarButton
            label="Add Media"
            icon={<Add />}
            onTouchTap={ () => event.fire('add-media') }
          />
          <AppBarButton
            label="Download"
            icon={<FileDownload />}
          />
          <AppBarButton
            icon={<SettingsApplications />}
            onTouchTap={ () => event.fire('toggle-props') }
          />
        </div>
      }
      {...this.props}
    />
  }
}

export default GifAppBar;
