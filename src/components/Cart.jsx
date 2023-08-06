import React from 'react'
import img1 from '../assets/powder.jpeg'
import img2 from '../assets/product2.jpg'
import img3 from '../assets/product3.jpeg'


const Cart = () => {
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
            <div className="row">
                <div className="col">
                <p>product1</p>
                </div>
                <div className="col">
                <p>$10</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <p>product2</p>
                </div>
                <div className="col">
                <p>$100</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <p>product3</p>
                </div>
                <div className="col">
                <p>$30</p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col">
                   <h5>Total</h5> 
                </div>
                <div className="col">
                    <h5>$40</h5>
                </div>
            </div> 
        </div>
        
    </div>
    <div className="box22">
        <div className="card">
            <div className="img">
            <img src={img1}alt="" />
            </div>
            <div className="text">
            <p>Product1 <b>$10</b></p>
            <p>any of your favourite product cab be </p>
            <button className='removebtn'>Remove</button>
            </div>
        </div>
        <div className="card">
            <div className="img">
            <img src={img2} alt="" />
            </div>
            <div className="text">
            <p>Product1 <b>$10</b></p>
            <p>any of your favourite product cab be </p>
            <button className='removebtn'>Remove</button>
            </div>
        </div>
        <div className="card">
            <div className="img">
            <img src={img3} alt="" />
            </div>
            <div className="text">
            <p>Product1 <b>$10</b></p>
            <p>any of your favourite product cab be </p>
            <button className='removebtn'>Remove</button>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Cart