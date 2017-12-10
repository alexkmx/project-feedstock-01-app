import React from 'react';
import {Link} from 'react-router-dom'
import Header from './global/Header';
import {Button, Icon} from 'react-materialize';
import request from 'superagent';
import { Table } from 'reactstrap';

export default class Materiasprimas extends React.Component {
  componentWillMount() {
    request
     .get('api/v1/materiasprimas')
     .then(data => {

       this.setState({
         materiasprimas: data.body
       })
     });
  }

  constructor() {
    super();

    this.state = {
      materiasprimas:[]
    }
  }

  render(){
    const {materiasprimas} = this.state;

    return(
      <div className="materiasprimas-container">
        <div className="title">
          <h3>Materias primas</h3>
        </div>
        <div className="row-container">
        <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre Comercial</th>
            <th>Nombre Químico</th>
            <th>Unidad</th>
            <th>Precio US Dll</th>
            <th>Precio MX peso</th>
            <th>Existencia en Almacén</th>
          </tr>
        </thead>
        {materiasprimas.map(materiaprima =>
        <tbody key={materiaprima.id}>
          <tr>
            <th scope="row">{materiaprima.id}</th>
            <td>{materiaprima.nombre_comercial}</td>
            <td>{materiaprima.nombre_quimico}</td>
            <td>{materiaprima.unidad}</td>
            <td>{materiaprima.precio_us_dll}</td>
            <td>{materiaprima.precio_mx_peso}</td>
            <td>{materiaprima.existencia_almacen}</td>
          </tr>
        </tbody>
      )}
      </Table>
        </div>
        <Button waves='light' node='a' href="/home"><Icon left>home</Icon></Button>
      </div>
    )
  }
}
