import React from 'react'
import Cards from './Cards'

const Products = () => {
  return (
    <>
    <div className="container ">
        <div className="row">
            <div className="col">
                <Cards/>
            </div>
            <div className="col">
                <Cards/>
            </div>
            <div className="col">
                <Cards/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Products