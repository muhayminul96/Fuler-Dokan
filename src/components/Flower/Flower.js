import React from 'react';
import './Flower.css'

const Flower = (props) => {
    const {_id, picture,price,name } = props.flower;
    return (
        <div className='flower-container'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <button className='add-cart'>Add to Cart</button>
        </div>
    );
};

export default Flower;