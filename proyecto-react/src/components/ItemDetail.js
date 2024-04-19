import React from 'react';
import Description from './Description';

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Precio: ${item.price}</p>
      <Description description={item.description} />
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetail;


