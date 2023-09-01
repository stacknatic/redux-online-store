import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { StoreNavbar } from './components/Store.Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import List from './components/List';
import { Cart } from './components/Cart';


function App() {
  return (
    <div className="App">
     App goes here
     <StoreNavbar />
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
