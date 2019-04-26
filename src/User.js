import React, { Component } from 'react';

class User extends Component {
  render () {
    return (
      <li>
        {this.props.name} - {this.props.email} - {this.props.phone} - {this.props.address}
      </li>
    );
  }
}

export default User;