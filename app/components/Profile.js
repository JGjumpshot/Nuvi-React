import React from 'react';
import Users from './Users';
require('../../styles/profile.scss');

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return(
      <div>
        <div className="profile-wrapper">
          {/*console.log(this.context.router.location.pathname)*/}
        </div>
      </div>
    );
  }
}

// Profile.contextTypes = {
//   router: React.PropTypes.object
// }


export default Profile
