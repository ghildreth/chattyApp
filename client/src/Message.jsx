import React, {Component} from 'react';

class MessageBoard extends Component {
  render() {

    console.log('rendering messages')
    return(

    <main className="messages">

      <div className="message">
        <span className="message-username">{this.props.user} </span>
        <span className="message-content">{this.props.content} </span>
      </div>

{/*      <div className="message system">
        Anonymous1 changed their name to nomnom.
      </div>*/}
    </main>
    );
  }
}
export default MessageBoard;



