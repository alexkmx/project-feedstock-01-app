import React from 'react';
import {Card, CardTitle} from 'react-materialize';
import maze from './imagenes/maze.jpg';
import './css/NoMatch404.css';

export default class NoMatch404 extends React.Component {
  render(){
    return(
      <div>
        <h1>ERROR 404</h1>
        <a className="header--404__btn" href="/home">INICIO</a>
       </div>
    )
  }
}
