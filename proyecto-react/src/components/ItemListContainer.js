import React, { useState } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    console.log(`Producto ${productId} agregado al carrito`);
    setCart([...cart, productId]);
  };

  const products = [
    { id: 1, name: 'Camiseta', price: 20, description: 'Una camiseta cómoda y elegante para cualquier ocasión.', image: '/img/camiseta.jpg' },
    { id: 2, name: 'Pantalones', price: 30, description: 'Pantalones de mezclilla de alta calidad para un ajuste perfecto.', image: '/img/pantalon.jpg' },
    { id: 3, name: 'Zapatos', price: 50, description: 'Zapatos deportivos modernos y elegantes para correr o caminar.', image:'/img/zapatos.jpg' }
  ];

  return (
    <div className="item-list-container">
      <h2>Bienvenido a nuestra tienda en línea</h2>
      <ItemList products={products} addToCart={addToCart} />
    </div>
  );
}

export default ItemListContainer;

