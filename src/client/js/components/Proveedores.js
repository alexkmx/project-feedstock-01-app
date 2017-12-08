//Dependencies
import React, {Component} from 'react';

//Assests
import Header from './global/Header';
import Footer from './global/Footer';


class Proveedores extends Component {
  render() {
    return(
<div>
    <Header />
    <h1>Proveedores</h1>
    <a className="header--404__btn" href="/home">INICIO</a>
    
</div>
    );
  }
}

export default Proveedores;
