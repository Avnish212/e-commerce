import React, { useContext } from 'react'
import { addToCart } from './context/cart/CartAction'
import CartContext from './context/cart/CartContext'

const Cards = ({product}) => {

  const{dispatch} = useContext(CartContext)
  const handleClick=(product)=>{
    const data = addToCart(product)
    dispatch({
      type: "ADD_CART",
      payload: data
    })

   
    
    console.log(product);
  }
  return (
    <>
    <div className="card my-3 mx-4 shadow">
            <div className="img p-1">
                <img src={product.image} alt="" />
            </div>
            <div className="text">
                <h4 className='px-2'>$ {product.price}</h4>
            <p className='px-2'>This is the highly effective product.</p>
            <button className='btn btn-primary btn-sm w-100' onClick={()=>{handleClick(product)}}>Add to Cart</button>
            </div>
        </div>
    </>
  )
}

export default Cards