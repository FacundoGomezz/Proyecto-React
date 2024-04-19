
import React from 'react';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import './index.css';

function App() {
  return (
    <div>
      <NavBar />
      <CartWidget />
      <ItemListContainer />
    </div>
  );
}

export default App;

