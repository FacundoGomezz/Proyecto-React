import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CategoryButton from './components/CategoryButton';
import CartWidget from './components/CartWidget';
import '../src/index.css';
import Carrito from './components/Carrito';
import producto1Image from './img/Producto 1.png';
import producto2Image from './img/Producto 2.png';
import producto3Image from './img/Producto 3.png';
import producto4Image from './img/Producto 4.png';

const App = () => {

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <div className="App">

      <Navbar>
        <CategoryButton title="Productos" link="/productos" />
        <CategoryButton title="Acerca de" link="/acerca-de" />
        <CategoryButton title="Contacto" link="/contacto" />
        <CartWidget />
      </Navbar>
      <div className="container">
        <h2>Productos Destacados</h2>
        <div className="product-grid">
          <div class="products">
          <ProductCard 
            image={producto1Image}
            title="Arroz"
            price="$900"
            description="Descripción"
            onAgregarAlCarrito={() => agregarAlCarrito({
            id:1, 
            title: 'Arroz',
            price:'$900',
            description:'Descripción'
            })}
          />
          </div>
          <div class="products">
          <ProductCard
            image={producto2Image}
            title="Fideos Lucchetti"
            price="$950"
            description="Descripción"
            onAgregarAlCarrito={() => agregarAlCarrito({
              id:2, 
              title: 'Fideos Lucchetti',
              price:'$950',
              description:'Descripción'
            })}
          />
          </div>  
          <div class="products">        
          <ProductCard
            image={producto3Image}
            title="Pepsi"
            price="$1200"
            description="Descripción"
            onAgregarAlCarrito={() => agregarAlCarrito({
              id:3, 
              title: 'Pepsi',
              price:'$1200',
              description:'Descripción'
            })}
          />
          </div> 
          <div class="products">   
          <ProductCard
            image={producto4Image}
            title="Pepitos"
            price="$1500"
            description="Descripción"
            onAgregarAlCarrito={() => agregarAlCarrito({
              id:4, 
              title: 'Pepitos',
              price:'$1500',
              description:'Descripción'
            })}
          />
          </div>  
          <Carrito carrito={carrito} />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

