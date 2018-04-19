import React, {Component} from 'react';

export default class NavBar extends Component {
  render(){
    return(

    <nav className="navbar">
    <i className="far fa-comment-alt"></i>
      <a href="/" className="navbar-brand">Chatty</a>
      {this.props.userCount > 1 ? <span> Users online: {this.props.userCount}</span> : <span> {this.props.userCount} User online: </span>}
    </nav>
    );
  }
}

