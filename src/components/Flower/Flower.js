import React from 'react';
import './Flower.css'

const Flower = ({flower, cartHandler}) => {
    
    const {picture,price,name } = flower;
    return (
        <div className='flower-container'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <button onClick={()=>cartHandler(flower)} className='add-cart'>Add to Cart</button>
        </div>
    );
};

export default Flower;