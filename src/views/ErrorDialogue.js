import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import event from '../dispatchers/event';

class ErrorDialogue extends Component {

  state = {
    open: false,
    title: '',
    message: '',
  }

  constructor() {
    super();
    event.on('error-dialogue', ({title, message}) => {
      this.setState({
        open: true,
        title: title,
        message: message,
      });
    });
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];

    return <Dialog
      title={this.state.title}
      actions={actions}
      modal={false}
      open={this.state.open}
      onRequestClose={this.handleClose}
    >
      {this.state.message}
    </Dialog>
  }
}

export default ErrorDialogue;