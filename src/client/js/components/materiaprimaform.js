//Dependecies
import React from 'react';
import Header from './global/Header';
import request from 'superagent';
import {Row, Input, Button} from 'react-materialize';

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
console.log(e);
    // this.handleMateriaPrimaRegister({
    //
    //   nombre_comercial: this.refs.nombre_comercial.value,
    //   nombre_quimico: this.refs.nombre_quimico.value,
    //   unidad: this.refs.unidad.value,
    //   precio_us_dll: this.refs.precio_us_dll.value,
    //   precio_mx_peso: this.refs.precio_mx_peso.value,
    //   cantidad: this.refs.cantidad.value,
    // })
  }

  render(){

    return(
      <div className="materia-prima-form-container">

      <form onSubmit={this.handleSubmit} className = "form">
      <h4>Ingresa Materia Prima Nueva</h4>
        <Row>
		     <Input ref="nombre_comercial" type="text" label="Nombre Comercial" s={12} />
		     <Input ref="nombre_quimico" type="text" label="Nombre Químico" s={12} />
		     <Input ref="unidad" type="text" label="Unidad" s={12} />
         <Input ref="precio_us_dll" type="text" label="Precio US dll" s={12} />
         <Input ref="precio_mx_peso" type="text" label="Precio MX peso" s={12} />
         <Input ref="cantidad" type="text" label="Cantidad que ingresa" s={12} />
         <Button type="submit" waves='light' value="registrar">button</Button>
      </Row>
      </form>

      </div>
    )
  }
}
