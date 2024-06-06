import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Hero from './components/Hero'
import Products from './components/Products'
import Cart from './components/Cart'
import { CartProvider } from './components/context/cart/CartContext'


const App = () => {
  return (
   <CartProvider>
     <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Hero/>}/>
    <Route path="/Products" element={<Products/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    </Routes>
    </Router>
   </CartProvider>
  )
}

export default App