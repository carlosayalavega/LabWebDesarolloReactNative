import React, { Component } from 'react'
import Servicio from './Servicio'

class ServicioList extends Component {
  render () {
    return (
        <ul>
          {this.props.servicios.map(u => {
            return (
              <Servicio
                key={u.id}
                servicio={u.servicio}
             
              />
            );
          })}
        </ul>
    );
  }
}

export default ServicioList;