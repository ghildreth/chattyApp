import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
  super(props);
  this.onSubmit = this.onSubmit.bind(this);
}

onSubmit(e) {
if(e.keyCode === 13){
  let textMessage = e.target.value;
  console.log(textMessage);
  this.props.onEnter(textMessage);
  e.target.value = '';
}

}

  render() {
  console.log('rendering chat bar')
  return (
    <footer className="chatbar">
      <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.currentUser.name}/>
      <input className="chatbar-message" name="textMessage" onKeyUp={this.onSubmit} placeholder="Type a message and hit ENTER" />
    </footer>
  );
  }
}

export default ChatBar;
