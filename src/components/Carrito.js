import React from 'react';

const Carrito = ({ carrito }) => {
  return (
    <div class="cart">
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map(producto => (
          <li key={producto.id}>
            <span>{producto.title}</span>
            <span>{producto.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carrito;
