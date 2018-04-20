import React, {Component} from 'react';

export default class MessageBoard extends Component {
  render() {
    return(
    <main className="messages">
      <div className="message">
        <span className="message-username" style={{color: this.props.color}}>{this.props.user} </span>
        <span className="message-content">{this.props.content} </span>
        <img className="image" src={this.props.image}/>
      </div>
    </main>
    );
  }
}




