import React, {Component} from 'react';

export default class MessageBoard extends Component {
  render() {

    console.log('rendering messages')
    return(

    <main className="messages">

      <div className="message">
        <span className="message-username" style={this.props.color}>{this.props.user} </span>
        <span className="message-content">{this.props.content} </span>
      </div>

    </main>
    );
  }
}




