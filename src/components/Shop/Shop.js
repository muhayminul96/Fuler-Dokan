import React from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    return (
        <div className='shop-container'>
            <div className="product-container">
            <Products></Products>
            </div>
            <div className="order-container">
            <h1>hello order</h1>
            </div>
        </div>
        
    );
};

export default Shop;