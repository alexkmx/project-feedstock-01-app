//Dependecies
import React from 'react';
import Header from './global/Header';
import request from 'superagent';

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
      rfc: this.refs.rfc.value,
      direccion: this.refs.direccion.value,
      telefono1: this.refs.telefono1.value,
      telefono2: this.refs.telefono2.value,
      correo_e: this.refs.correo_e.value,
      contacto1: this.refs.contacto1.value,
      contacto2: this.refs.contacto2.value,
    })
  }

  render(){

    return  <div className="proveedor-form-container">
        <Header />
        <form onSubmit={this.handleSubmitInfo} className = "form">
          <h3>Ingresa Materia Prima Nueva</h3>
          <input className="form__field"
            type="text"
            ref="razon_social"
            placeholder="Razón Social" required/>
          <input className="form__field"
            type="text"
            ref="rfc"
            placeholder="RFC"/>
          <input className="form__field"
            type="text"
            ref="direccion"
            placeholder="Domicilio fiscal"/>
          <input className="form__field"
            type="number"
            ref="telefono1"
            placeholder="Teléfono fijo"/>
          <input className="form__field"
            type="number"
            ref="telefono2"
            placeholder="Móvil"/>
          <input className="form__field"
            type="text"
            ref="correo_e"
            placeholder="correo electrónico"/>
          <input className="form__field"
            type="text"
            ref="contacto1"
            placeholder="Nombre de contacto 1"/>
          <input className="form__field"
            type="text"
            ref="contacto2"
            placeholder="Nombre de contacto 2"/>
          <input className="form__login-btn"
            type="submit"
            value="Registrar"/>
          <a className="inicio_btn" href="/home">INICIO</a>
        </form>
      </div>
  }
}
