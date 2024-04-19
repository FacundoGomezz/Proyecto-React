import React from 'react';
import AddItemButton from './AddItemButton';

const ItemList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="product-details">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <AddItemButton productId={product.id} addToCart={addToCart} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;



