import React, { Component } from 'react';
import {MenuItens} from './MenuItens';
import './Navbar.css';
import {Link} from "react-router-dom";

class Navbar extends Component{

  render(){
    return(
      <nav className="navbar-itens">
        <h1 className="navbar-logo">Devolu Ti</h1>
        <ul className="nav-menu">
          {
            MenuItens.map((item,index) => {
              return(
                <li key={index}>
                  <Link to={item.url} className={item.cName}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    )
  }

}

export default Navbar
