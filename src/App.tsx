import Header from './components/Header';
import './App.css'

function App() {
  return (
    <>
    <Header />
    </>
  )
}

export default App;

/*
// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header'
import Categories from './components/categories';
import CartContext from './components/cartContext';
import LogIn from './components/logIn';
import Product from './components/product';
import ShoppingCart from './components/shoppingCart';
import PopUp from './components/popUp';

function App() {
  return (
    <BrowserRouter>
          <Header />
          <Categories />
          <PopUp />
    </BrowserRouter>
  );
}

export default App;
*/