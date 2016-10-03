import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import AddBox from 'material-ui/svg-icons/content/add-box'
import ContentCopy from 'material-ui/svg-icons/content/content-copy'
import Settings from 'material-ui/svg-icons/action/settings'

import dispatcher from './Dispatcher';

class GifDrawer extends Component {

  state = {
    open: false,
  }

  constructor() {
    super()
    dispatcher.on('toggle-drawer', this.toggle);
  }

  set_open = (open) => {
    this.setState({open})
  }

  toggle = () => {
    this.set_open(!this.state.open);
  }

  render() {
    return <Drawer
      open={this.state.open}
      docked={false}
      onRequestChange={this.set_open}
    >
      <p
        style={{
          margin: '10px',
          fontSize: '1.3em',
          lineHeight: '48px',
          verticalAlign: 'top',
        }}
      >
        <IconButton
          style={{
            verticalAlign: 'top',
          }}
          onTouchTap={this.toggle}
        >
          <NavigationMenu />
        </IconButton>
        Gif God
      </p>
      <hr />
      <MenuItem leftIcon={<AddBox />}>
        New
      </MenuItem>
      <MenuItem leftIcon={<ContentCopy />}>
        Clone
      </MenuItem>
      <hr />
      <MenuItem leftIcon={<Settings />}>
        Settings
      </MenuItem>
    </Drawer>
  }
}

export default GifDrawer