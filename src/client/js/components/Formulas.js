import React from 'react';
import Header from './global/Header';
import request from 'superagent';
import GetFormulas from './GetFormulas';
import './css/Formulas.css';
import {Button, Icon} from 'react-materialize';
import { Table } from 'reactstrap';

export default class Formulas  extends React.Component {
  componentWillMount() {
  request
    .get('api/v1/formulas')
    .then(data => {
console.log(data.body[0].formulas_matprim);
      this.setState({
        formulas: data.body

      })
    })
  }

  constructor() {
    super();

    this.state = {
      formulas:[]
    };
  }

  render(){
    const {formulas} = this.state;


    return (
      <div>
      <div className="title">
      <h2>Formulas</h2>
      </div>
      <div className="row-container">
      <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Base</th>
          <th>Nombre</th>
          <th>Unidad</th>
        </tr>
      </thead>
      {formulas.map(formula =>
      <tbody key={formula.id}>
        <tr>
          <th scope="row">{formula.id}</th>
          <td><a className="enlace" href="/formulas/id">{formula.base}</a></td>
          <td>{formula.nombre}</td>
          <td>{formula.unidad}</td>
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
