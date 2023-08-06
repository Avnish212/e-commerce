import React from 'react'
import logo from '../assets/online-shop.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header class="nav1 p-3">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><img src={logo} alt="" /></li>
          <li><Link to="/" class="nav-link px-2 text-secondary">Home</Link></li>
          <li><Link to="/Products" class="nav-link px-2 text-white">Products</Link></li>
          <li><Link to="#" class="nav-link px-2 text-white">Pricing</Link></li>
          <li><Link to="#" class="nav-link px-2 text-white">FAQs</Link></li>
          <li><Link to="#" class="nav-link px-2 text-white">About</Link></li>
        </ul>

        <div class="text-end">
          <Link to="/Cart"><button type="button" class="btn btn-warning">Cart (0)</button></Link>
          
        </div>
      </div>
    </div>
  </header>
  )
}

export default Navbar