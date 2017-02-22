import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import Input from './Input';
import Profile from './Profile';
require('../../styles/users.scss');
class Users extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
componentDidMount() {
  axios({
    method: 'GET',
    url: 'https://nuvi-challenge.herokuapp.com/activities'
  }).then((response)=> {
    console.log(response);
    this.setState({
      users: response.data
    });
  })
}

renderUsers(){
  return this.state.users.map((val, i) =>{
    return (
        <li className="names" key={i} value={val.id}><p className="text-names"><Link to="/users/profile">{val.actor_name}</Link></p><img className="img" src={val.actor_avator}/><p className="provider">{val.provider}</p></li>
    );
  })
}

  render() {
    return (
      <div className="modal-wrapper">
        <Input />
        <ul className="usernames">
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
}

export default Users
