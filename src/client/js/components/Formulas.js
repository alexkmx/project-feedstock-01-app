import React from 'react';
import Header from './global/Header';
import request from 'superagent';
import {Table} from 'react-materialize'

export default class Formulas  extends React.Component {


  render(){
    // console.log(this.state.formulas);
    let displayFormulas = this.state.formulas;

    function getAllFormulas(displayFormulas) {
      return(
        <div>
        <p>{displayFormulas.nombre}</p>
        <p>{displayFormulas.unidad}</p>
        <p>{displayFormulas.totalunidad}</p>
        </div>
      )
    }


    return (

      <div className="formulas-container">
      <GetFormulas />

          <a className="header--404__btn" href="/home">INICIO</a>
      </div>
    )
  }
}
