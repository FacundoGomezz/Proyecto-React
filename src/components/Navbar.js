import React from 'react';
import CartWidget from './CartWidget';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const NavBar = () => {
  return (
    
    <nav className="navbar">
      
      <div className="container-fluid">
        <h1 className="navbar-brand">TutuMarket</h1>
        <div className="navbar-itemss" id="navbarSupportedContent">
          <a class="nav-item" href='#'>Productos</a>
          <a class="nav-item" href='#'>Acerca De</a>
          <a class="nav-item" href='#'>Contactos</a>

          <CartWidget /> {}
        </div>
      </div>
    </nav>
    
  );
};

export default NavBar;


<nav>
    </nav>