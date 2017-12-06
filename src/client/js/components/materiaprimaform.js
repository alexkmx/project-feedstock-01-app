//Dependecies
import React from 'react';
import Header from './global/Header';
import request from 'superagent';

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
console.log(data);
      })
    }

  handleSubmit(e){
    e.preventDefault();

    this.handleMateriaPrimaRegister({
      nombre_comercial: this.refs.nombre_comercial.value,
      nombre_quimico: this.refs.nombre_quimico.value,
      unidad: this.refs.unidad.value,
      precio_us_dll: this.refs.precio_us_dll.value,
      precio_mx_peso: this.refs.precio_mx_peso.value,
      existencia_almacen: this.refs.existencia_almacen.value,
    })
  }

  render(){
console.log(this.refs.nombre_quimico);
    return  <div className="materia-prima-form-container">
        <Header />
        <form onSubmit={this.handleSubmit} className = "form">
          <h3>Ingresa Materia Prima Nueva</h3>
          <input className="form__field"
            type="text"
            ref="nombre_comercial"
            placeholder="Nombre comercial(sin acentos, comas, caracteres especiales)" required/>
          <input className="form__field"
            type="text"
            ref="nombre_quimico"
            placeholder="Nombre químico(sin acentos, comas, caracteres especiales)"/>
          <input className="form__field"
            type="text"
            ref="unidad"
            placeholder="Unidad(Kg/Lt/Pza)"/>
          <input className="form__field"
            type="text"
            ref="precio_us_dll"
            placeholder="Precio US DLL(sin signo de pesos, con punto y hasta dos decimales)"/>
          <input className="form__field"
            type="text"
            ref="precio_mx_peso"
            placeholder="Precio MX PESO(sin signo de pesos, con punto y hasta dos decimales)"/>
          <input className="form__field"
            type="number"
            ref="existencia_almacen"
            placeholder="Existencia Almacén(puede ingresar punto y hasta dos decimales)"/>
          <input className="form__login-btn"
            type="submit"
            value="Registrar"/>
          <a className="inicio_btn" href="/home">INICIO</a>
        </form>
      </div>
  }
}
