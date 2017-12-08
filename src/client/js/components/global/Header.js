//Dependencies
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Assets
import '../css/Header.css';
import {Navbar, NavItem} from 'react-materialize';

class Header extends Component {

  render() {

    return (
      <div className="header-container">
        <Navbar brand='Feedstock' right>
          <NavItem href='/about'>About</NavItem>
          <NavItem href='/formulas'>Formulas</NavItem>
          <NavItem href='/materiasprimas'>Materias Primas</NavItem>
          <NavItem href='/proveedores'>Proveedores</NavItem>
          <NavItem href='/login'>Login</NavItem>
          <NavItem href='/registromateriaprima'>Nueva Materia Prima</NavItem>
          <NavItem href='/registroproveedor'>Nuevo Proveedor</NavItem>
        </Navbar>
      </div>
    );
  }
}

export default Header;
