import React from 'react'
import img1 from '../assets/powder.jpeg'
import img2 from '../assets/product2.jpg'
import img3 from '../assets/product3.jpeg'


const Cart = () => {
  return (
    <>
    <div className="cart">
    <div className="box11">
    <div className="bill">
        <h2>Shopping Cart</h2>
        <div className="bilbox">
            <p>product1 - $10</p>
            <p>product2 - $30</p>
        </div>
        <p>Total: <b>$40</b></p> 
    </div>
    </div>
    <div className="box22">
        <div className="boxx1">
            <div className="boxx-img">
            <img src={img1}alt="" />
            </div>
            <div className="boxx-txt">
            <p>Product1 <b>$10</b></p>
            <p>any of your favourite product cab be </p>
            </div>
        </div>
        <div className="boxx1">
            <div className="boxx-img">
            <img src={img2} alt="" />
            </div>
            <div className="boxx-txt">
            <p>Product1 <b>$10</b></p>
            <p>any of your favourite product cab be </p>
            </div>
        </div>
        <div className="boxx1">
            <div className="boxx-img">
            <img src={img3} alt="" />
            </div>
            <div className="boxx-txt">
            <p>Product1 <b>$10</b></p>
            <p>any of your favourite product cab be </p>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Cart