//Dependecies
import React from 'react';
import Header from './global/Header';
import Footer from './global/Footer';
import Nav from './Nav';

//Assets
import lab from "./imagenes/lab.jpg";
import './css/Home.css';

export default class Home extends React.Component {
  render() {
    return(
    <div className="home-container">
      <div className="image-container">
      <h3 className="title-home">Feedstock</h3>
      <img src={lab} alt="imagen" className="imagen"/>
      </div>
    </div>
    )
  }
}
