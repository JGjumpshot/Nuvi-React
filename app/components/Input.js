import React from 'react';
require('../../styles/users.scss');

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }
  render() {
    return(
      <div className="input">
        <p>Name:</p><input type="text" value={this.state.value} placeholder="Search" onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Input
