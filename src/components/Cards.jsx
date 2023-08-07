import React from 'react'

const Cards = ({product}) => {
  return (
    <>
    <div className="card my-3 mx-4 shadow">
            <div className="img p-1">
                <img src={product.image} alt="" />
            </div>
            <div className="text">
                <h4 className='px-2'>$ {product.price}</h4>
            <p className='px-2'>This is the highly effective product.</p>
            <button className='btn btn-primary btn-sm w-100'>Add to Cart</button>
            </div>
        </div>
    </>
  )
}

export default Cards