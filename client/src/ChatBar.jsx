import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state={userName: 'Anon',
                type: ''}

    this.submitMessage = this.submitMessage.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
  }

// function ChatBar({name, changeName}){
//   const checkName = (e) =>{
//     if(e.target.value !== name){
//       changeName(e.target.value);
//     }
//   };
//   return (<div>
//     <input type='text' defaultValue={name} onBlur={checkName}/>
//     <input type='text' placeholder='message'/>
//   </div>);
// }

  changeUserName(event) {
    if (event.target.value === ''){
      this.setState({userName: 'Anonymous'});

    // } else if (event.target.value !== this.state.userName) {
      // this.setState({userName: event.target.value});
    //   console.log('new name is:', event.target.value)

    } else {
        // const userName = event.target.value;
        // console.log('this is the user name: ', userName);
        this.setState({userName: event.target.value});
        this.props.onUserNameSubmit(event.target.value);
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
