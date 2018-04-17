import React, {Component} from 'react';
import MessageBoard from './Message.jsx';

class MessageList extends Component {
    render() {
        const singleMesssage = this.props.messagez.map((m, i) => {
           return( <MessageBoard
            let key = {i}
            let user = {m.username}
            let userMessage = {m.content}
            />);
        });
        console.log('rendering the list')
        return (
            <div id="message-list">
            {singleMesssage}
            <MessageBoard />
            </div>
            );
    }

}

export default MessageList;

