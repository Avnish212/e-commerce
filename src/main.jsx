import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductsContext, { ProductsProvider } from './components/context/products/ProductsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProvider >
        <App />
    </ProductsProvider>
  </React.StrictMode>,
)
