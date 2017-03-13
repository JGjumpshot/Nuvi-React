import React from 'react';
import Users from './Users';
import axios from 'axios';
require('../../styles/profile.scss');

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    }
  }

  componentDidMount(id) {
    axios({
      method: 'GET',
      url: 'https://nuvi-challenge.herokuapp.com/activities/' + id
    }).then((response)=> {
      console.log(response.data);
      this.setState({
        user: response.data
      });
      // console.log(this.state.user);
    })
  }

  render() {
    // console.log(this.props);
    return(
      <div>
        <div className="profile-wrapper">
          <div className="profile-container">
            <img className="profile-image" src={this.state.user.actor_avator} />
            <div className="actor-text">
              <p>{this.state.user.actor_name}</p>
              <p>{this.state.user.provider}</p>
            </div>
          </div>
          <p style={{'font-family':'Montserrat'}}>Username: {this.state.user.actor_username}</p>
          <img src={this.state.user.activity_message} />
          <div className="status">
            <p>Likes: {this.state.user.activity_likes}</p>
            <p>Comments: {this.state.user.activity_comments}</p>
            <p>Shares: {this.state.user.activity_shares}</p>
          </div>
        </div>
      </div>
    );
  }
}


export default Profile
