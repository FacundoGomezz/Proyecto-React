import React, { useState } from 'react';

const ItemQuantitySelector = ({ initialQuantity, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <div>
      <label htmlFor="quantity">Cantidad:</label>
      <input
        type="number"
        id="quantity"
        value={quantity}
        min={1}
        onChange={handleQuantityChange}
      />
    </div>
  );
};

export default ItemQuantitySelector;

