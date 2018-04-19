import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './navBar.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {name: "Anonymous" },
      messages: [],
      userCount: 0,
    };
  this.addMessage = this.addMessage.bind(this);
  this.addUserName = this.addUserName.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    this.socket = new WebSocket("ws://localhost:3001/");
    console.log('Connected to server');

    this.socket.onmessage = (msg) => {
      console.log('this is msg we want', msg);
      let parsedMsg = JSON.parse(msg.data)
      switch(parsedMsg.type){
        case "incomingMessage":
          const oldlMessages = this.state.messages;
          const newMessages = [...oldlMessages, {id: parsedMsg.id, username: parsedMsg.username, content: parsedMsg.content, type:parsedMsg.type }]
          this.setState({messages: newMessages})
          console.log('does the EVENT THINGY work?', parsedMsg);
          break;

        case "incomingNotification":
          const stateMessages = this.state.messages;
          const newNotification = [...stateMessages, {id: parsedMsg.id, username: parsedMsg.username, content: parsedMsg.content, type:parsedMsg.type}]
          this.setState({messages: newNotification})
          break;

        case "userCount":
          this.setState({userCount: parsedMsg.numOfUsers})
          break;
        default:

          throw new Error("Unknown event type " + parsedMsg.type);
      }
    }

    setTimeout(() => {
      console.log("Simulating incoming message");
      // adds a bew nessage to the list in the data storeee
      const newMessage ={id: 3, username: "Michelle Obama", content: "Hello there!", type: "incomingMessage"};
      const messages = this.state.messages.concat(newMessage)
      // updates the state OF the app component
      // calling setState will trigga a call to render() in App and all child components
      this.setState({messages: messages})
    }, 3000);

  }

  addMessage(message, user, type){
    // const oldlMessages = this.state.messages;
    // const newMessages = [...oldlMessages, {username: this.state.currentUser.name, id: '1337', content: message}]
    // this.setState({ messages: newMessages})

    var msg = {
      type: 'postMessage',
      content: message,
      username: user
    };
    this.socket.send(JSON.stringify(msg));
    console.log(JSON.stringify(msg));

  }

  addUserName(name){
    let oldName = this.state.currentUser.name;
    let newName = name;
    // console.log('this is the name you want: ', name);
    if (newName !== oldName) {
      let notification = {
        type: 'postNotification',
        content: `${oldName} changed their name to ${newName}`
      }
      console.log(`${oldName} changed their name to ${newName}`);
      this.socket.send(JSON.stringify(notification));
    }
    // var msg = {
    //   type: 'sendMessage',
    //   content: this.state.messages,
    //   currentUser: name
    // };
    // this.socket.send(JSON.stringify(msg));
    // console.log(JSON.stringify(msg));
    this.setState({currentUser: {name: name}});
  }

  render() {
    console.log('rendering app');


    return (
      <div>
        <NavBar userCount={this.state.userCount}/>
        <MessageList messagez={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} onMessageSubmit={this.addMessage} onUserNameSubmit={this.addUserName}/>
        </div>

    );

  }
}
export default App;
