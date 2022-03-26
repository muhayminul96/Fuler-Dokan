import React, { useState } from 'react';
import { useEffect } from 'react';
import Flower from '../Flower/Flower';
import './Shop.css'

const Shop = () => {
    const [flowers,setFlowers] = useState([])
    useEffect(()=>{
      fetch('flower.json')
      .then(res => res.json())
      .then(data => setFlowers(data))
    },[])
    console.log(flowers)
    return (
        <div className='shop-container'>
            <div className="product-container">
            {
                flowers.map(flower => <Flower key ={flower._id} flower ={flower}></Flower> )
            }
            </div>
            <div className="order-container">
            <h1>hello order</h1>
            </div>
        </div>
        
    );
};

export default Shop;