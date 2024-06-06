import React from 'react'

const CartRow = ({item}) => {
    console.log(item)
  return (
    <>
    <div className="row">
                <div className="col">
                <p>{item.title}</p>
                </div>
                <div className="col">
                <p>${item.price}</p>
                </div>
            </div>
   </>    
)}

export default CartRow