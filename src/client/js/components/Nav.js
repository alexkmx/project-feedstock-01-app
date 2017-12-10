import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize';
import request from 'superagent';
import './css/Nav.css';

export default class Nav extends React.Component {
  constructor() {
    super();

    this.logOut = this.logOut.bind(this);
  }

  logOut(evt) {
    evt.preventDefault()

    this.props.cerrarSesion();
  }

  render(){

    // if user is authtenticated ...
    if(typeof this.props.usarioAutenticado.email !== "undefined" ) {
      return (
        <div className="nav-container">
            <div className="navbar-registrado">
            <Navbar brand='Feedstock' right>
              <NavItem href='/about'>About</NavItem>
              <NavItem href='/formulas'>Formulas</NavItem>
              <NavItem href='/materiasprimas'>Materias Primas</NavItem>
              <NavItem href='/proveedores'>Proveedores</NavItem>
              <NavItem href='/register'>Registar Usuario</NavItem>
              <NavItem onClick={this.logOut}>Logout</NavItem>
            </Navbar>
            </div>
          </div>
      )
    }else if(typeof this.props.usarioAutenticado.email === 'admin@feedstock.com') {
      <div>
        <Navbar brand='Feedstock' right>
          <NavItem href='/registromateriaprima'>Registrar Materia Prima</NavItem>
          <NavItem href='/registroproveedor'>Registrar Proveedor</NavItem>
          <NavItem href='/register'>Registar Usuario</NavItem>
          <NavItem onClick={this.logOut}>Logout</NavItem>
        </Navbar>
      </div>
    }

    // if user is NOT authtenticated
    return   <div className="navbar-noregistrado">

        <div>
        <Navbar brand='Feedstock' right>
        <NavItem href='/about'>About</NavItem>
        <NavItem href='/login'>Iniciar Sesión</NavItem>
        </Navbar>
        </div>

      </div>


  }
}
