import React from 'react';

const AddItemButton = ({ productId, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(productId);
  };

  return (
    <button onClick={handleAddToCart}>Agregar al carrito</button>
  );
}

export default AddItemButton;


