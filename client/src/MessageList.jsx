import React, {Component} from 'react';
import MessageBoard from './Message.jsx';
import Notification from './Notification.jsx';

export default class MessageList extends Component {
  render() {
    const singleMesssage = this.props.messagez.map((m) => {
      if (m.type === 'incomingMessage'){
        return(
        <MessageBoard
        key={m.id}
        user={m.username}
        content={m.content}
        type={m.type}
        color={m.color}
        image={m.image}
        />);
      } else {
        return(
        <Notification
        key={m.id}
        user={m.username}
        content={m.content}
        type={m.type}
        notification={m.notification}
        />);
    }

});
    return (
      <div id='message-list'>
      {singleMesssage}
      </div>
      );
    }

}


