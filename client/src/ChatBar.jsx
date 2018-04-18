import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
  super(props);
  this.state={userName: ''}

  this.onSubmit = this.onSubmit.bind(this);
  this.changeUserName = this.changeUserName.bind(this);

}

changeUserName(event) {

  const userName = event.target.value;
  // console.log('this is the user name: ', userName);
  this.setState({userName: userName});

    if(event.keyCode === 13){
      const userName = event.target.value;
      this.props.onUserNameSubmit(userName);
    }

}


onSubmit(event) {
  if(event.keyCode === 13){
    let textMessage = event.target.value;
    let textName = event.target.value;
    console.log(textMessage);
    this.props.onMessageSubmit(textMessage, this.state.userName);
    event.target.value = '';
  }

}

  render() {
  console.log('rendering chat bar')
  return (
    <footer className="chatbar">
      <input className="chatbar-username"
      value = {this.state.userName}
      placeholder="Your Name (Optional)"
      type="text" name="textName"
      onKeyUp={this.changeUserName}
      onChange={this.changeUserName}/>
      <input className="chatbar-message" name="textMessage" onKeyUp={this.onSubmit} placeholder="Type a message and hit ENTER" />
    </footer>
  );
  }
}

export default ChatBar;
