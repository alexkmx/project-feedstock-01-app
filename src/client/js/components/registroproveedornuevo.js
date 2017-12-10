//Dependecies
import React from 'react';
import Header from './global/Header';
import request from 'superagent';
import {Row, Input, Button, Icon} from 'react-materialize';

//Assets
import './css/proveedorform.css';


export default class ProveedorForm  extends React.Component {
  constructor(){
    super();

    this.handleProveedorRegister = this.handleProveedorRegister.bind(this)
    this.handleSubmitInfo = this.handleSubmitInfo.bind(this)
  }

  handleProveedorRegister(datos){
    request
    .post('/api/v1/proveedores')
    .send(datos)
    .then(data => {
        console.log(data);
    })
  }

  handleSubmitInfo(e) {
    e.preventDefault();

    this.handleProveedorRegister({
      razon_social: this.refs.razon_social.value,
      rfc: this.refs.rfc.input.defaultValue,
      direccion: this.refs.direccion.input.defaultValue,
      telefono1: this.refs.telefono1.input.defaultValue,
      telefono2: this.refs.telefono2.input.defaultValue,
      correo_e: this.refs.correo_e.input.defaultValue,
      contacto1: this.refs.contacto1.input.defaultValue,
      contacto2: this.refs.contacto2.input.defaultValue,
    })
  }

  render(){

    return  <div className="proveedor-form-container">

        <form onSubmit={this.handleSubmitInfo} className = "form">
          <h3>Registro proveedor nuevo</h3>
          <Row>
           <Input ref="razon_social" type="text" label="Razón Social" s={12} />
           <Input ref="rfc" type="text" label="RFC" s={4} />
           <Input ref="direccion" type="text" label="Dirección Fiscal" s={12} />
           <Input ref="telefono1" type="text" label="# Tel. Fijo" s={4} />
           <Input ref="telefono2" type="text" label="# Tel. Móvil" s={4} />
           <Input ref="correo_e" type="text" label="Correo Electrónico" s={4} />
           <Input ref="contacto1" type="text" label="Contacto 1" s={4} />
           <Input ref="contacto2" type="text" label="Contacto 2" s={4} />
        </Row>
          <Button type="submit" waves='light' value="registrar">AGREGAR A LA BASE DE DATOS</Button>
        </form>
        <Button waves='light' node='a' href="/home">Home<Icon left>home</Icon></Button>
      </div>
  }
}
