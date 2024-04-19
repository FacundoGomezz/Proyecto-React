const Products = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Producto 1', price: 10, image: '/img/camiseta.jpg' },
    { id: 2, name: 'Producto 2', price: 15, image: '/img/pantalon.jpg' },
    { id: 3, name: 'Producto 3', price: 20, image: '/img/zapatos.jpg' },
  ];

  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <div>
              <p>{product.name} - ${product.price}</p>
              <button onClick={() => addToCart(product)}>Agregar al carrito</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};



let cart = [];

const addToCart = (productId) => {

  const productToAdd = products.find(product => product.id === productId);
  if (productToAdd) {

    cart.push(productToAdd);
    console.log(`Producto ${productToAdd.name} agregado al carrito.`);
  } else {
    console.log(`No se encontró ningún producto con ID ${productId}.`);
  }
};

const getCart = () => {
  return cart;
};


export { products, addToCart, getCart };

