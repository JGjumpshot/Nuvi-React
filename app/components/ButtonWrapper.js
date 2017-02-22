import React from 'react';
import {Link} from 'react-router';
class ButtonWrapper extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="bar-wrap">
        <div className="bar"><Link to="/users"><p>Get Started</p></Link></div>
        <div className="bar"><Link to="/users"><p>See Users</p></Link></div>
        <div className="bar"><p>About Us</p></div>
      </div>
    );
  }
}

export default ButtonWrapper;
