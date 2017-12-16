//Dependencies
import React from 'react';
import request from 'superagent';

//Assests
import Header from './global/Header';
import Footer from './global/Footer';
import {Button, Icon} from 'react-materialize';
import { Table } from 'reactstrap';
import './css/Proveedores.css';

export default class Proveedores extends React.Component {
  componentWillMount() {
    request
     .get('api/v1/proveedores')
     .then(data => {

       this.setState({
         proveedores: data.body
       })
     })
  }

  constructor() {
    super();

    this.state = {
      proveedores:[]
    }
  }

  render() {
    const {proveedores} = this.state;

    return(
      <div className="grid-container">
        <div className="title">
          <h3>Proveedores</h3>
        </div>
        <div className="row-container-prov">
        <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Razón Social</th>
            <th>RFC</th>
            <th>Domicilio Fiscal</th>
            <th>Teléfono fijo</th>
            <th>Teléfono móvil</th>
            <th>Correo electrónico</th>
            <th>Contacto</th>
          </tr>
        </thead>
        {proveedores.map(proveedor =>
        <tbody key={proveedor.id}>
          <tr>
            <th scope="row">{proveedor.id}</th>
            <td>{proveedor.razon_social}</td>
            <td>{proveedor.rfc}</td>
            <td>{proveedor.direccion}</td>
            <td>{proveedor.telefono1}</td>
            <td>{proveedor.telefono2}</td>
            <td>{proveedor.correo_e}</td>
            <td>{proveedor.contacto1}</td>
          </tr>
        </tbody>
      )}
      </Table>
      </div>
        <Button waves='light' node='a' href="/home"><Icon left>home</Icon></Button>
      </div>
    );
  }
}
