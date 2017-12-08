//Dependencies
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Assets

import '../css/Footer.css';


class Footer extends Component {

  render() {
    let {title, items} = this.props;
    return (
      <div className="footer-container">
        <p>Footer</p>
        <ul className="menu">
         {
           items && items.map(
             (item, key) => <li key={key}> <Link to={item.url}>{item.title}</Link></li>
         )}
        </ul>
      </div>
    );
  }
}

export default Footer;
