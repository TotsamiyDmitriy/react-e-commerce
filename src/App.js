import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Catalog from './pages/Catalog';
import Footer from '../src/components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="catalog" element={<Catalog />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
