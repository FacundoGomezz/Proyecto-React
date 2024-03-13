// En el archivo ItemListContainer.js

import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container" style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ color: '#333' }}>{greeting}</h2>
      {/* Aquí puedes agregar más contenido si es necesario */}
    </div>
  );
};

export default ItemListContainer;

