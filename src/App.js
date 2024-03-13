import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/Navbar';

function App() {
  const brandName = "TutuMarket";
  const categories = [
    { id: 1, name: "Cocina y Alimentos" },
    { id: 2, name: "Electrónica" },
    { id: 3, name: "Hogar y Jardín" },
  ];

  return (
  <div className="App">
    <NavBar brandName={brandName} categories={NavBar} />
    <div className="App">
    <ItemListContainer greeting="¡Bienvenido a nuestro Market Online!" />
    </div>
    </div>   

  


  );
}

export default App;



