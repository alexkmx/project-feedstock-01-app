//Dependencies
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Assets
import '../css/Header.css';

class Header extends Component {

  render() {
    let {title, items} = this.props;
    return (
      <div className="header-container">
        <p>Header</p>
        <h2 className="title">{title}</h2>
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

export default Header;
