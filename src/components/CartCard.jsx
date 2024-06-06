import React, { useContext } from 'react'
import CartContext from './context/cart/CartContext'
import { removeFromCart } from './context/cart/CartAction';

const CartCard = ({item}) => {

  const {dispatch} = useContext(CartContext);

  const handleRemove=(id)=>{
    
    const data = removeFromCart(id)
    console.log(data)
    dispatch({
      type: "REMOVE_DATA",
      payload: id
    })
  }

  return (
    <div className="card">
    <div className="img">
    <img src={item.image}alt="" />
    </div>
    <div className="text">
    <p><b>${item.price}</b></p>
    <p>{item.title} </p>
    <button className='removebtn' onClick={()=>handleRemove(item.id)}>Remove</button>
    </div>
    </div>
  )
}

export default CartCard