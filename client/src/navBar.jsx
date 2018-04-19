import React, {Component} from 'react';

export default class NavBar extends Component {
  render(){
    return(

    <nav className="navbar">
    <i className="far fa-comment-alt"></i>
      <a href="/" className="navbar-brand">Chatty</a>
     {this.props.userCount > 1 ? <span className="userCounter"> {this.props.userCount} Users Online </span> : <span className="userCounter"> {this.props.userCount} User Online  </span>}
    </nav>
    );
  }
}

