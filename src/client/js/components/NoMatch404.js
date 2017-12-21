import React from 'react';
import {Card, CardTitle} from 'react-materialize';
import './css/NoMatch404.css';
import {Button, Icon} from 'react-materialize';

export default class NoMatch404 extends React.Component {
  render(){
    return(
      <div className="error-container">
        <div className="container-error">
        <h1>ERROR 404</h1>
        <hr/>
        <p>PAGE NOT FOUND</p>
        </div>

        <Button waves='light' node='a' href="/home">Home<Icon left>home</Icon></Button>
       </div>
    )
  }
}
