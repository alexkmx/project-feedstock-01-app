import React from 'react';
import request from 'superagent';
import { Button, Form, FormGroup, Label, Input, Row} from 'react-materialize';


export default class RegisterForm  extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRegisterUser = this.handleRegisterUser.bind(this)
  }

  handleRegisterUser(datos) {
    request
      .post('/auth/register')
      .send(datos)
      .then(data => {

    })
  }

  handleSubmit(e) {
    e.preventDefault();
console.log(this.refs.email.input.defaultValue);
console.log(this.refs.password.input.defaultValue);
    this.handleRegisterUser({

      email: this.refs.email.input.defaultValue,
      password: this.refs.password.input.defaultValue,
    })
  }

  render(){
    return(
      <div className="">
      <form onSubmit={this.handleSubmit} className="form">
        <h3>Registrar</h3>
        <Row>
          <Input ref="email" type="text" label="Email" s={12} />
          <Input ref="password" type="text" label="password" s={12} />
        </Row>
          <Button type="submit" waves='light' value="registrar">Registrar usuario nuevo</Button>
      </form>
          <Button color="info">Home</Button>{' '}
      </div>
    )
  }
}
