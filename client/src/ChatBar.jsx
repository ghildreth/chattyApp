import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state={userName: 'Anonymous',
                type: ''}

    this.submitMessage = this.submitMessage.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
  }

  changeUserName(event) {
    if (event.target.value === ''){
      this.setState({userName: 'Anonymous'});
    }else {
      this.setState({userName: event.target.value});
      this.props.onUserNameSubmit(event.target.value);
    }
  }

  submitMessage(event) {
    if(event.keyCode === 13){
      let textMessage = event.target.value;
      // making sure the message is captured correctly
      // console.log(textMessage);
      this.props.onMessageSubmit(textMessage, this.state.userName);
      event.target.value = '';
    }
  }
    render() {
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
