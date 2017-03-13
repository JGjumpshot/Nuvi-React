import React, {Component} from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import Input from './Input';
import Profile from './Profile';
require('../../styles/users.scss');
class Users extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filterText: ''
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
  const filterText = this.state.filterText;
  return this.state.users
  .filter(user => {
    // Compare filterText to lowerCase and user.name to lowerCase.
    // Loop through each letter in filterText
    // If the letter doesn't match user.name at same index
    // Return false
    // Otherwise...
    // After checking each letter
    // Return true.
    for(var i = 0; i < filterText.length; i++) {
      if(filterText.toLowerCase()[i] !== user.actor_name.toLowerCase()[i]) {
        return false;
      }
    }
    return true;
  })
  .map((val, i) =>{
    return (
        <li className="names" key={i} value={val.id}><p className="text-names"><Link to={"/users/profile/" + val.id}>{val.actor_name}</Link></p><img className="img" src={val.actor_avator}/><p className="provider">{val.provider}</p></li>
    );
  })
}

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }
  render() {
    return (
      <div className="modal-wrapper">
        <Input filterText={this.state.filterText} filterUpdate={this.filterUpdate.bind(this)}/>
        <ul className="usernames">
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
}

export default Users
