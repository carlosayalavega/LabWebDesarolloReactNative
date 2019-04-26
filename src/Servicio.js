import React, { Component } from 'react';

class Servicio extends Component {
  render () {
    return (
      <li>
        {this.props.servicio} 
      </li>
    );
  }
}

export default Servicio;