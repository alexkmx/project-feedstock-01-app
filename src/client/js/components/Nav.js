import React from 'react';
import {Link, NavLink} from 'react-router-dom'

const routesJsx =  [
  <nav>
    <ul class="menu">
   <li><a href="#"><i classname="icon-home"></i>HOME</a>
   <ul class="sub-menu">
   <li><a href="#">About</a></li>
   <li><a href="#"></a></li>
   <li><a href="#">Sub-Menu 3</a></li>
   </ul>
   </li>
  <li><a  href="#"><i classname="icon-user"></i>FORMULAS</a></li>
  <li><a  href="#"><i classname="icon-camera"></i>PROVEEDORES</a>
  <ul class="sub-menu">
   <li><a href="#">Materias primas por proveedor</a></li>
   <li><a href="#">Formulas por proveedor</a>
    <ul>
    <li><a href="#">Sub-Menu 4</a></li>
   	<li><a href="#">Sub-Menu 5</a></li>
	<li><a href="#">Sub-Menu 6</a></li>
    </ul>
   </li>
   </ul>
  </li>
  <li><a  href="#"><i classname="icon-bullhorn"></i>PROVEEDORES</a></li>
  <li><a  href="#"><i classname="icon-envelope-alt"></i>MATERIAS PRIMAS</a></li>
  </ul>
  </nav>
]

export default class Nav extends React.Component {
  render(){
    return   <div className="navbar">

        <div>
          {routesJsx}
        </div>
        <a className="header--404__btn" href="/home">INICIO</a>
      </div>
  }
}
