import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './navBar.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {name: 'Anonymous' },
      messages: [],
      userCount: 0,
      fontColor: '',
    };
  this.addMessage = this.addMessage.bind(this);
  this.addUserName = this.addUserName.bind(this);
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001/');

    this.socket.onmessage = (msg) => {
      // this 'msg' comes in from the server which was craeted from the input field
      let parsedMsg = JSON.parse(msg.data)
      const oldlMessages = this.state.messages;
      const newMessages = [...oldlMessages, {image: parsedMsg.image, color: parsedMsg.color, id: parsedMsg.id, username: parsedMsg.username, content: parsedMsg.content, type:parsedMsg.type}]

      switch(parsedMsg.type){


        case 'incomingNotification':
        case 'incomingMessage':
          this.setState({messages: newMessages});
          break;

        case 'userCount':
          this.setState({userCount: parsedMsg.numOfUsers})
          break;

        case 'colorMessage':
          this.setState({fontColor: parsedMsg.color})
          break;
        default:

          throw new Error('Unknown event type ' + parsedMsg.type);
      }
    }
    //  this was setTimout was added in not only as a test but I turned it into a bot that greets each user
    setTimeout(() => {
      // adds a bew nessage to the list in the data store
      const newMessage ={id: 3, username: 'Chatty App Bot', content: 'Hello there, friends, chat nice and have fun!', type: 'incomingMessage'};
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
    }, 3000);
  }

  addMessage(message, user){
    // this is information is coming in from the chat bar component
    let url = message.match(/(http)?s?:?(\/\/[^“’]*\.(?:png|jpg|jpeg|gif|png|svg))/g);
    message = message.split(url);

    let msg = {
      type: 'postMessage',
      content: message,
      color: this.state.fontColor,
      username: user,
      image: url,
    };
    this.socket.send(JSON.stringify(msg));
    // double checking the mesagging going to to the server is correct,
    // at this point it arrived here to the App from the input
  }

  addUserName(name){

    let oldName = this.state.currentUser.name;
    let newName = name;
    // made sure the name from the ChatBar was correct before using the conditional statement
    // this is how the App knows if the user changes their name
    // console.log('this is the name you want: ', name);
    if (newName !== oldName) {
      let notification = {
        type: 'postNotification',
        content: `${oldName} changed their name to ${newName}`
      }
      //this was my confirmation the first name was correctly added to the state and the new one is being tracked/compared
      // console.log(`${oldName} changed their name to ${newName}`);
      this.socket.send(JSON.stringify(notification));
    }
    this.setState({currentUser: {name: name}});
  }

  render() {
    // console.log('Rendering App');
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
