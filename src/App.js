import React from 'react';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from './AboutPage'; 
import ContactPage from './ContactPage';

function App() {
  const brandName = "";
  const categories = [
    { id: 1, name: "" },
    { id: 2, name: "" },
    { id: 3, name: "" },
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






