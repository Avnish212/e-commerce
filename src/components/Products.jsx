import React, { useContext, useEffect, useState } from 'react'
import Cards from './Cards'
import ProductsContext from './context/products/ProductsContext'
import { getProducts } from './context/products/ProductsAction'


const Products = () => {
  const { products, dispatch } = useContext(ProductsContext)
  const getData=async ()=>{
    const data = await getProducts();
    
    dispatch({
      type: "GET_DATA",
      payload: data,
    })
  }
  useEffect(()=>{
    getData()
  },[])

  if (!products || products.length === 0) {
    return (
        <div class="d-flex justify-content-center d-flex my-5">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
  return (
    <>
      <div id='ct1' className="container">
        {
          products.map((product) => <Cards key={product.id} product={product} />)
        }
      </div>
    </>
  )
}

export default Products