import React, { Component } from 'react'

export default class CarForm extends Component{
  render(){
    return ( 
      <form onSubmit={this.props.onAddCar}>
          <input type="text" placeholder="Modelo" name="Modelo" />
          <input type="text" placeholder="Placas" name="Placas" />
          <input type="text" placeholder="Estado" name="Estado" />
          <input type="text" placeholder="Color" name="Color" />
          <input type="text" placeholder="Año" name="Ano" />
          <input type="submit" value="Enviar" />
      </form>
    );
  }
}

