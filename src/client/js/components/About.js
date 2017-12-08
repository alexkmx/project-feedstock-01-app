import React from 'react';
import {Card, CardTitle} from 'react-materialize';
import lab from './imagenes/lab.jpg';
import './css/About.css';

export default class about extends React.Component {

  render() {
    return(
      <div className="about-container">
        <Card className='large'
        	header={<CardTitle className="tarjeta" image={lab}><br/>About</CardTitle>}
        	actions={[<a href='/home'>Home</a>]}>
          Imaginen tener el control de materias extraídas de la naturaleza que después usamos para elaborar productos de bienes de consumo. Hay muchos tipos de materias primas, y por consecuencia podemos elaborar demasiados productos para la población.
          ¿Que quiere decir? Que existen muchas fórmulas bases para elaborar estos productos. Feedstock es un gestor de contenidos que permitirá a todo el personal con acceso visualizar estas fórmulas y el porcentaje de sus componentes que se necesita para poder elaborar un producto exitoso. Otro punto a destacar, Feedstock tendrá la posibilidad de mostrar también su precio, tanto en pesos mexicanos como en dólares.
          Además de poder consultar las fórmulas bases con los productos necesarios también será posible identificar el proveedor de cada una y lo más importante, podremos consultar nuestro inventario y saber en cada momento cuantos productos tenemos de cada materia prima.
          Esta aplicación permitirá visualizar fórmulas  y  porcentajes de sus componentes así como el precio tanto en dólares americanos  como en pesos mexicanos, de cada fórmula para fabricación de distintas cantidades. los usuarios que requieran consultar materias primas que componen cada una de las fórmulas, también les será posible identificar el proveedor de cada materia prima así  como la cantidad disponible en almacén ya que todos la información estará almacenada en una base de datos relacional.
        </Card>
      </div>
    )
  }
}
