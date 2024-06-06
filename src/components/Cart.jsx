import React, { useContext } from 'react'
import img2 from '../assets/product2.jpg'
import img3 from '../assets/product3.jpeg'
import CartCard from './CartCard'
import CartContext from './context/cart/CartContext'
import CartRow from './CartRow'


const Cart = () => {
   const {cart} = useContext(CartContext)

   const total = cart.reduce((p,c)=>{
    return p+c.price;
   },0)

  return (
    <>
    <div className="cart">
    <div className="box11 p-3">
        <h2 className='mx-5'>Shopping Cart</h2>
        <div className="bilbox my-3 ">
            <div className="row">
                <div className="col">
                    <h5>Products Name</h5>
                </div>
                <div className="col">
                    <h5>Price</h5>
                </div>
            </div>
            {
                cart.map((item)=><CartRow key={item.id} item={item}/>)
            }
          
            <hr />
            <div className="row">
                <div className="col">
                   <h5>Total</h5> 
                </div>
                <div className="col">
                    <h5>${total}</h5>
                </div>
            </div> 
        </div>
        
    </div>
    <div className="box22">
       
    {
        cart.map((item)=><CartCard key={item.id} item={item} />)
    }
      
       
    </div>
    </div>
    </>
  )
}

export default Cart