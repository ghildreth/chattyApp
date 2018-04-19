import React, {Component} from 'react';

class MessageBoard extends Component {
  render() {

    console.log('rendering messages')
    return(

    <main className="messages">
      <div className="notification">
        <span className="notification-content">{this.props.notification}</span>
      </div>
      <div className="message">
        <span className="message-username">{this.props.user}</span>
        <span className="message-content">{this.props.userMessage} </span>
      </div>

{/*      <div className="message system">
        Anonymous1 changed their name to nomnom.
      </div>*/}
    </main>
    );
}
}

export default MessageBoard;

