//Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import request from 'superagent';
import 'bootstrap/dist/css/bootstrap.css';

//Assests
import Header from './components/global/Header';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import about from './components/About';
import Proveedores from './components/Proveedores';
import NoMatch404 from './components/NoMatch404';
import Nav from './components/Nav';
import Formulas from './components/Formulas';
import Materiasprimas from './components/Materiasprimas';
import Home from './components/home';
import MateriaPrimaForm from './components/materiaprimaform';
import ProveedorForm from './components/registroproveedornuevo';
import Graficas from './components/Graficas';
import Reportes from './components/Reportes';


const DynamicRoute = (props) => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: '#0E6655'}
  return <h2 style={styleObj}>Rutas dinamicas: <u>{props.match.params.routeVal}</u></h2>
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      usarioAutenticado : {}
    }
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    //if( typeof this.state.usarioAutenticado.email !== "undefined" )
  }

  handleAuthentication(credentials) {
    request
      .post('auth/login')
      .send(credentials)
      .then(data => {
        console.log("server res: ", data)
        const userObject = data.body
        this.setState({
          usarioAutenticado: typeof userObject === "object" && userObject.email ? userObject : {}
        });
      })
      .catch(err => console.log(err));
}

  handleLogout() {
        console.log("logging out from App")
        request
          .get('/auth/logout')
          .then(() => {
            console.log('logout!!!');
            this.setState({
              usarioAutenticado: {},

            });
          })
          .catch(err => console.log(err));
        }


  componentWillMount() {
    request
      .get('/auth/current')
      .then(data => {
        const user = data.body
        console.log('Active Session - USER:', user);
        this.setState({
          usarioAutenticado: typeof user === "object" && user.email ? user : {}

        });
      })
      .catch(err => console.log(err));
  }

  render (){
    
        return <div>
    <Nav
        cerrarSesion={this.handleLogout}
        usarioAutenticado={this.state.usarioAutenticado} />
    <Switch>
      <Route path = '/home' component={Home}/>
      <Route path = '/about' component={about}/>
      <Route path = '/proveedores' component={Proveedores}/>
      <Route path = '/login' component={ ()=>{ return <LoginForm login={this.handleAuthentication}/> } }/>
      <Route path = '/register' component={RegisterForm}/>
      <Route path = '/nav' component={Nav} usuario={this.usarioAutenticado}/>
      <Route path = '/formulas' component={Formulas}/>
      <Route path = '/formulas/:routeVal' component={DynamicRoute} />
      <Route path = '/materiasprimas' component={Materiasprimas}/>
      <Route path = '/registromateriaprima' component={MateriaPrimaForm}/>
      <Route path = '/registroproveedor' component={ProveedorForm}/>
      <Route path = '/graficas' component={Graficas}/>
      <Route path = '/reportes' component={Reportes}/>
      <Route component={NoMatch404}/>
    </Switch>

    </div>
  }
}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app-container'));
