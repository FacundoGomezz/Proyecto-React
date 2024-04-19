import React from 'react';

const NavBar = () => {
  return (
    <nav>
        <ul>
    <li><a href="/">Inicio</a></li>
    <li><a href="/productos">Productos</a></li>
    <li><a href="/carrito">Carrito</a></li>
    <li><a href="/checkout">Checkout</a></li>
        </ul>
    </nav>
  );
}

export default NavBar;
