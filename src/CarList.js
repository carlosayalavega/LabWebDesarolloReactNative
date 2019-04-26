import React, { Component } from 'react'
import Car from './Car'

class CarList extends Component {
  render () {
    return (
        <ul>
          {this.props.cars.map(u => {
            return (
              <Car
                key={u.id}
               Modelo={u.Modelo}
               Placas={u.Placas}
               Estado={u.Estado}
                Color={u.Color}
                Ano={u.Ano}
              />
            );
          })}
        </ul>
    );
  }
}

export default CarList;