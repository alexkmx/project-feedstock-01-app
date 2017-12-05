
const AppRoutes () => {
  <Switch>
    <Route path='/ex/:routeVal' component={DynamicRoute}/>
    <Route path='/about' component={about}/>
    <Route path='/proveedores' component={Proveedores}/>
    <Route path='/login' component={LoginForm}/>
    <Route path='/register' component={RegisterForm}/>
    <Route path='/nav' component={Nav}/>
    <Route path='/formulas' component={Formulas}/>
    <Route path='/materiasprimas' component={Materiasprimas}/>
    <Route component={NoMatch404}/>
  </Switch>
}

export default AppRoutes;
