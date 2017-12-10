//Dependencias
import React from 'react';

//Assests
import './css/About.css';
import lab from './imagenes/lab.jpg';
import sumi from './imagenes/suministro.jpg';
import formula from './imagenes/naturalproduct.jpg';
import deliver from './imagenes/deliver.jpg';
import price from './imagenes/price.jpg';

//Materialize
import {Button, Icon, Carousel, Slider, Slide} from 'react-materialize'

export default class about extends React.Component {

  render() {
    return(
      <div className="about-container">
        <Slider>
	       <Slide className="slide"
            src="true"
        		title="Datos precisos cuando se requiren">
        		<hr/>
            Imaginen tener el control de materias extraídas de la naturaleza que después usamos para elaborar productos de bienes de consumo.
	       </Slide>
	       <Slide className="slide"
            src="true"
            title="Datos de Existencias"
          	placement="left">
          	Cantidades precisas cuando se requieren.<hr/>
            Hay muchos tipos de materias primas, y por consecuencia podemos elaborar demasiados productos para la población.
	       </Slide>
	       <Slide className="slide"
        	  src="true"
        		title="Formulas de productos"
        		placement="right">
        		Base de datos por formula.<hr/>
            Feedstock es un gestor de contenidos que permitirá a todo el personal con acceso visualizar estas fórmulas y el porcentaje de sus componentes que se necesita para poder elaborar un producto exitoso.
	       </Slide>
         <Slide className="slide"
            src="true"
        		title="Precio por Formula"
        		placement="right">
        		Otro punto a destacar, Feedstock tendrá la posibilidad de mostrar también su precio, tanto en pesos mexicanos como en dólares.
	        </Slide>
          <Slide className="slide"
        		src="true"
        		title="Base de Datos de Proveedores"
        		placement="right">
        		Además de poder consultar las fórmulas bases con los productos necesarios también será posible identificar el proveedor de cada una y lo más importante, podremos consultar nuestro inventario y saber en cada momento cuantos productos tenemos de cada materia prima.
	        </Slide>
          </Slider>

          <Button waves='light' node='a' href="/home"><Icon left>home</Icon></Button>
      </div>
    )
  }
}
