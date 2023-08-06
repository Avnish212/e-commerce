import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Hero from './components/Hero'
import Products from './components/Products'
import Cart from './components/Cart'


const App = () => {
  return (
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Hero/>}/>
    <Route path="/Products" element={<Products/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    </Routes>
    </Router>
  )
}

export default App