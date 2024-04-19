import React, { useState } from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <div>
      <h2>Detalles del producto</h2>
      <p>Nombre del producto: Producto de ejemplo</p>
      <p>Precio: $10</p>
      <ItemQuantitySelector initialQuantity={quantity} onQuantityChange={handleQuantityChange} />
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ProductDetails;
