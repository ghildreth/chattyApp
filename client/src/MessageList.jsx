import React, {Component} from 'react';
import MessageBoard from './Message.jsx';
import Notification from './Notification.jsx';

export default class MessageList extends Component {
    render() {
        const singleMesssage = this.props.messagez.map((m) => {
            if (m.type === "incomingMessage"){
                return(
                <MessageBoard
                let key = {m.id}
                let user = {m.username}
                let content = {m.content}
                let type = {m.type}
                />);
            } else {
                return(
                <Notification
                let key = {m.id}
                let user = {m.username}
                let content = {m.content}
                let type = {m.type}
                let notification = {m.notification}
                />);
            }

        });
        console.log('rendering the list')
        console.log('message type', singleMesssage)
        return (
            <div id="message-list">
            {singleMesssage}
            <MessageBoard />
            <Notification />
            </div>
            );
    }

}


