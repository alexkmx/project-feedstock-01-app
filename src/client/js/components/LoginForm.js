//Dependencies
import React from 'react';
import request from 'superagent';
import {Redirect} from 'react-router-dom';

//Assets
import './css/LoginForm.css';
import {Button, Icon, Input, Row} from 'react-materialize';


export default class LoginForm  extends React.Component {


  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e){
    e.preventDefault();

      this.props.login({
      email: this.refs.email.input.defaultValue,
      password: this.refs.password.input.defaultValue,
    });
   }

  render(){
    return (
      <div className="login-container">
      <form onSubmit={this.handleSubmit} className="form">
        <h3>Ingresar</h3>
        <Row>
          <Input ref="email" type="text" label="Email" s={12} />
          <Input ref="password" type="text" label="password" s={12} />
        </Row>
          <Button type="submit" waves='light' value="registrar">Ingresar</Button>
      </form>
          <Button waves='light' node='a' href="/home">Home<Icon left>home</Icon></Button>
        </div>
    )
  }
}
