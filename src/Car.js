import React, { Component } from 'react';

class Car extends Component {
  render () {
    return (
      <li>
        {this.props.Modelo} - {this.props.Placas} - {this.props.Estado} - {this.props.Color} - {this.props.Ano}
      </li>
    );
  }
}

export default Car;