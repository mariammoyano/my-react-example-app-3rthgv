import React from 'react';
import { Link } from 'react-router-dom'

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        
        <li className="nav-item">
          <Link to="login" className="nav-link">
            Sign in
          </Link>
        </li>
        
        <li className="nav-item">
          {/* TODO link to register */}
          <a className="nav-link">
            Sign up
          </a>
        </li>

      </ul>
    );
    
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="" className="nav-link">
            Home
          </Link>
        </li>
        
        <li className="nav-item">
          {/* TODO link to editor */}
          <a className="nav-link">
            <i className="ion-compose"></i>&nbsp;New Post
          </a>
        </li>
        
        <li className="nav-item">
          {/* TODO link to settings */}
          <a className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </a>
        </li>

        <li className="nav-item">
          {/* TODO link to profile */}
          <a  className="nav-link">
            <img src={props.currentUser.image} className="user-pic" />
            {props.currentUser.username}
          </a>
        </li>

      </ul>
    );    
  }

  return null;
};

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">

          <Link to="/" className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />
        </div>
      </nav>
    );
  }
}

export default Header;
