import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ itemId }) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      const fetchedItem = {
        id: itemId,
        name: 'Producto de ejemplo',
        price: 10,
        description: 'Esta es una descripción de ejemplo del producto.'
      };
      setItem(fetchedItem);
      setLoading(false);
    }, 1000);
  }, [itemId]);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemDetail item={item} />
      )}
    </div>
  );
};

export default ItemDetailContainer;


