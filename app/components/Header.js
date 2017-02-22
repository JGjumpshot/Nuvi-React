import React from 'react';
import {Link} from 'react-router';
class Header extends React.Component{
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Link to="/home"><img className="logo" src="https://www.nuvi.com/images/nuvi-logo-824fd756.png" alt="" /></Link>
        <ul className="nav">
          <li className="nav2"><Link to="/">Home</Link></li>
          <li className="nav2"><Link to="/users">Users</Link></li>
          <li className="nav2">About</li>
        </ul>
        {this.props.children}

      </div>
    );
  }
}

export default Header;
