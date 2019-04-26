import React, { Component } from 'react'

export default class UserForm extends Component{
  render(){
    return ( 
      <form onSubmit={this.props.onAddUser}>
          <input type="text" placeholder="Nombre" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <input type="text" placeholder="Telefono" name="phone" />
          <input type="text" placeholder="Direccion" name="address" />
          <input type="submit" value="Enviar" />
      </form>
    );
  }
}

