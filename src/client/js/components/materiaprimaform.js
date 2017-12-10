//Dependecies
import React from 'react';
import Header from './global/Header';
import request from 'superagent';
import {Row, Input, Button, Icon} from 'react-materialize';


//Assets
import './css/mateprimform.css';

export default class MateriaPrimaForm  extends React.Component {
  constructor() {
    super();


    this.handleMateriaPrimaRegister = this.handleMateriaPrimaRegister.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleMateriaPrimaRegister(datos) {
    request
      .post('/api/v1/materiasprimas')
      .send(datos)
      .then(data => {

      })
    }

  handleSubmit(e){
    e.preventDefault();
// console.log(this.refs.nombre_comercial.input.defaultValue);

    this.handleMateriaPrimaRegister({

      nombre_comercial: this.refs.nombre_comercial.input.defaultValue,
      nombre_quimico: this.refs.nombre_quimico.input.defaultValue,
      unidad: this.refs.unidad.input.defaultValue,
      precio_us_dll: this.refs.precio_us_dll.input.defaultValue,
      precio_mx_peso: this.refs.precio_mx_peso.input.defaultValue,
      cantidad: this.refs.cantidad.input.defaultValue,
    })
  }

  render(){

    return(
      <div className="materia-prima-form-container">
        <form onSubmit={this.handleSubmit} className = "form">
            <h4>Ingresa Materia Prima Nueva</h4>
          <Row>
  		     <Input ref="nombre_comercial" type="text" label="Nombre Comercial" s={12} />
  		     <Input ref="nombre_quimico" type="text" label="Nombre Químico" s={12} />
  		     <Input ref="unidad" type="text" label="Unidad" s={4} />
           <Input ref="precio_us_dll" type="text" label="Precio US dll" s={4} />
           <Input ref="precio_mx_peso" type="text" label="Precio MX peso" s={4} />
           <Input ref="cantidad" type="text" label="Cantidad que ingresa" s={4} />
          </Row>
        <Button type="submit" waves='light' value="registrar">AGREGAR A LA BASE DE DATOS</Button>
       </form>
        <Button waves='light' node='a' href="/home">Home<Icon left>home</Icon></Button>
     </div>
    )
  }
}
