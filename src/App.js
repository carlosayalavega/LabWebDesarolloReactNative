import React, { Component } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import ServicioList from './ServicioList';
import ServicioForm from './ServicioForm';
import CarList from './CarList';
import CarForm from './CarForm';
import './App.scss';

class App extends Component {
    constructor() {
        super();
        this.state = {    cars: [ ] , users: [ ] , servicios: [] };
  
    }
           

    handleOnAddUser (event) {
        event.preventDefault();
        let user = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            address: event.target.address.value
        };
       
        this.setState({
            users: this.state.users.concat([user]),
           
       });
    }

    handleOnAddCar (event) {
        event.preventDefault();
        let car = {
           
            Modelo: event.target.Modelo.value,
            Placas: event.target.Placas.value,
            Estado: event.target.Estado.value,
            Color: event.target.Color.value,
            Ano: event.target.Ano.value
        };
       
        this.setState({
           cars: this.state.cars.concat([car]),
           
        });
    }
   


    handleOnAddServicio(event) {
        event.preventDefault();
        let Servicio = {
            servicio: event.target.servicio.value,
          
        };
       
        this.setState({
            servicios: this.state.servicios.concat([Servicio]),
           
        });
    }


   

    render() {
    
        return (
          <div className="App">
            <div className="App-header">
                <h2>Sistema Taller Mecanico</h2>
            </div>
                    <ServicioList servicios={this.state.servicios}  />
                    <UserList users={this.state.users}  />
                    <CarList cars={this.state.cars}  />
                    

            <div>
              <p><strong>Agrega usuarios</strong></p>            
              <UserForm onAddUser={this.handleOnAddUser.bind(this)} />
          
              <p><strong>Agrega Carros</strong></p>            
              <CarForm onAddCar={this.handleOnAddCar.bind(this)} />

              <p><strong>Agrega Servicio</strong></p>            
              <ServicioForm onAddServicio={this.handleOnAddServicio.bind(this)} />

             </div>

            
              
          </div>
      );
       
    }
}

export default App;