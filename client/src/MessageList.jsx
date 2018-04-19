import React, {Component} from 'react';
import MessageBoard from './Message.jsx';

class MessageList extends Component {
    render() {
        const singleMesssage = this.props.messagez.map((m) => {
           return( <MessageBoard
            let key = {m.id}
            let user = {m.username}
            let userMessage = {m.content}
            let type = {m.type}
            let notification = {m.notification}
            />);
        });
        console.log('rendering the list')
        console.log('message type', singleMesssage)
        return (
            <div id="message-list">
            {singleMesssage}
            <MessageBoard />
            </div>
            );
    }

}

export default MessageList;

