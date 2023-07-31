import React from 'react'

const Cards = () => {
  return (
    <>
 

    <main>
        <section class="cart">
            <h2 class="cart-heading">Shopping Cart</h2>
            <div class="cart-container">
                <ul class="cart-items">
                </ul>
            </div>
            <p class="total">Total: <span class="cart-total">$0</span></p>
            <button class="checkout-btn">Checkout</button>
        </section>

        <section class="products">
            <h2 class="products-heading">Available Products</h2>
            <ul class="product-list">
                <li class="product-item" data-name="Product 1" data-price="10">
                    <img src="product1.jpg" alt="Product 1"/>
                    <div class="product-info">
                        <span class="product-name">Product 1</span>
                        <span class="product-price">$10</span>
                        <p class="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </li>
                <li class="product-item" data-name="Product 2" data-price="15">
                    <img src="product2.jpg" alt="Product 2"/>
                    <div class="product-info">
                        <span class="product-name">Product 2</span>
                        <span class="product-price">$15</span>
                        <p class="product-description">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </li>
                <li class="product-item" data-name="Product 3" data-price="20">
                    <img src="product3.jpg" alt="Product 3"/>
                    <div class="product-info">
                        <span class="product-name">Product 3</span>
                        <span class="product-price">$20</span>
                        <p class="product-description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    </div>
                </li>
            </ul>
        </section>
    </main>


    </>
  )
}

export default Cards