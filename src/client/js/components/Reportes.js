import React from 'react';
import Header from './global/Header';

export default class Reportes  extends React.Component {

  render(){
    return(
      <div className="reportes">
          <Header />
          <h2>Reportes</h2>
          <a className="header--404__btn" href="/home">INICIO</a>
      </div>
    )
  }
}
