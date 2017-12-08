import React from 'react';
import request from 'superagent';

export default class GetFormulas extends React.Component {
  componentWillMount() {
    request
    .get('api/v1/formulas')
    .then(data => {
      // console.log(data.body);
      this.setState({
        formulas:data.body

      })
    });
  }

  constructor() {
    super();

    this.state = {
      formulas:[]
    };
  }
}
