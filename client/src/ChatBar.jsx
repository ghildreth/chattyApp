import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
  super(props);
  this.state={userName: 'Anon'}

  this.submitMessage = this.submitMessage.bind(this);
  this.changeUserName = this.changeUserName.bind(this);

}

changeUserName(event) {
  if (event.target.value === ''){
    this.setState({userName: 'Anon'});
  } else {
      const userName = event.target.value;
      console.log('this is the user name: ', userName);
      this.setState({userName: userName});
      this.props.onUserNameSubmit(userName);
  }
}


submitMessage(event) {
  if(event.keyCode === 13){
    let textMessage = event.target.value;
    let textName = event.target.value;
    console.log(textMessage);
    this.props.onMessageSubmit(textMessage, this.state.userName);
    event.target.value = '';
  }

}
// add an onBlur

  render() {
  console.log('rendering chat bar')
  return (
    <footer className="chatbar">
      <input className="chatbar-username"
      placeholder="Your Name (Optional)"
      type="text"
      name="textName"
      onBlur={this.changeUserName}/>
      <input className="chatbar-message" name="textMessage" onKeyUp={this.submitMessage} placeholder="Type a message and hit ENTER" />
    </footer>
  );
  }
}

export default ChatBar;
