import React, {Component} from 'react';

class NavBar extends Component {
  render(){
    return(
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
      {this.props.userCount > 1 ? <span> Users online: {this.props.userCount}</span> : <span> {this.props.userCount} User online: </span>}
    </nav>
    );
  }
}

export default NavBar;
