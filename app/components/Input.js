import React from 'react';
require('../../styles/users.scss');

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  filterUpdate() {
    const val = this.myValue.value;
    this.props.filterUpdate(val)
  }

  render() {
    return(
      <div className="input">
        <p>Name:</p><input type="text" ref={ (value) => this.myValue = value} placeholder="Search" onChange={this.filterUpdate.bind(this)}/>
      </div>
    );
  }
}

export default Input
