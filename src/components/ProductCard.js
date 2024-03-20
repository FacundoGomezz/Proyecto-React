import React from 'react';

const ProductCard = ({ image, title, price, description, onAgregarAlCarrito }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
      <p>{description}</p>
      <button onClick={onAgregarAlCarrito}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;


