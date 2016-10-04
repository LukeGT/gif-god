import React, { Component, PropTypes } from 'react';

import { getStyles } from 'material-ui/AppBar/AppBar.js';
import FlatButton from 'material-ui/FlatButton';

class AppBarButton extends Component {

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    const style = getStyles(this.props, this.context).flatButton;
    if (!this.props.label) {
      style.minWidth = '48px';
    }
    return <FlatButton
      {...this.props}
      style={style}
    />;
  }
}

export default AppBarButton;