import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {name: "Bob"},
      messages: []
    };
  this.addMessage = this.addMessage.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    this.socket = new WebSocket("ws://localhost:3001/");

    this.socket.onmessage = (msg) => {
      console.log('this is msgwewant', msg);
      let newText = JSON.parse(msg.data)
      const oldlMessages = this.state.messages;
      const newMessages = [...oldlMessages, {id: newText.id, username: newText.username, content: newText.content}]
      this.setState({messages: newMessages})
      console.log('does the EVENT THINGY work?', newText);

    }


    setTimeout(() => {
      console.log("Simulating incoming message");
      // adds a bew nessage to the list in the data storeee
      const newMessage ={id: 3, username: "Michelle Obama", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // updates the state OF the app component
      // calling setState will trigga a call to render() in App and all child components
      this.setState({messages: messages})
    }, 3000);

  }

  addMessage(message){
    // const oldlMessages = this.state.messages;
    // const newMessages = [...oldlMessages, {username: this.state.currentUser.name, id: '1337', content: message}]
    // this.setState({ messages: newMessages})

    var msg = {
      type: 'sendMessage',
      content: message,
      currentUser: this.state.currentUser
    };
    this.socket.send(JSON.stringify(msg));
    console.log(JSON.stringify(msg));

  }

  render() {
    console.log('rendering app');


    return (
      <div>
        <MessageList messagez={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} onEnter={this.addMessage}/>
        </div>

    );

  }
}
export default App;
