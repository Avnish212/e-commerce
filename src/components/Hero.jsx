// import React from 'react'
// import Heroimage from '../assets/Herobg.jpg'
import Hero_img from '../assets/Home1.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="text-section">
      <h1>Online Shopping</h1>
      <p>A tradition of excellent since 1995.</p>
      <button>Shop Now</button>
      </div>
      <div className="img-section">
      <img src={Hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero;