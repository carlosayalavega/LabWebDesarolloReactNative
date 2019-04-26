import React, { Component } from 'react'

export default class ServicioForm extends Component{
  render(){
    return ( 
      <form onSubmit={this.props.onAddServicio}>
      
             <select name="servicio">
                    <option value="Afinacion">Afinacion</option>
                    <option value="Compostura">Compostura</option>
                    <option value="Cambio de Partes">Cambio de Partes</option>
                    <option value="Mantenimiento">Mantenimiento</option>
          </select>
          <input type="submit" value="Enviar" />
      </form>
    );
  }
}

