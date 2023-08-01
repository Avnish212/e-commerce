import React from 'react'
import product from '../assets/product2.jpg'

const Cards = () => {
  return (
    <>
    <div className="card">
            <div className="img">
                <img src={product} alt="" />
            </div>
            <div className="text">
                <h4>Rs.2000</h4>
            <p>This is the highly effective product.</p>
            </div>
        </div>
    </>
  )
}

export default Cards