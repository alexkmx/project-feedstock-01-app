import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
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


const DynamicRoute = (props) => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: '#0E6655'}
  return <h2 style={styleObj}>Rutas dinamicas: <u>{props.match.params.routeVal}</u></h2>
}

class App extends React.Component {
  render (){
    return <div>
    <Switch>
      <Route path = '/ex/:routeVal' component={DynamicRoute}/>
      <Route path = '/home' component={Home}/>
      <Route path = '/about' component={about}/>
      <Route path = '/proveedores' component={Proveedores}/>
      <Route path = '/login' component={LoginForm}/>
      <Route path = '/register' component={RegisterForm}/>
      <Route path = '/nav' component={Nav}/>
      <Route path = '/formulas' component={Formulas}/>
      <Route path = '/materiasprimas' component={Materiasprimas}/>
      <Route component={NoMatch404}/>
    </Switch>

    </div>
  }
}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app-container'));
