//Dependecies
import React from 'react';
import Header from './global/Header';
import Footer from './global/Footer';

//Assets
import lab from "./imagenes/lab.jpg";
import './css/Home.css';

export default class Home extends React.Component {
  render() {
    return(
    <div className="home-container">
      <Header />
      <div className="image-container">
      <img src={lab} alt="imagen" />
      </div>
    </div>
    )
  }
}
