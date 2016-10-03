import React, { Component, PropTypes } from 'react';

import { getStyles } from 'material-ui/AppBar/AppBar.js';
import FlatButton from 'material-ui/FlatButton';

class AppBarButton extends Component {

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    const styles = getStyles(this.props, this.context);
    return <FlatButton
      {...this.props}
      style={styles.flatButton}
    />;
  }
}

export default AppBarButton;