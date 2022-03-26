import React from 'react';
import './Flower.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCoffee } from '@fortawesome/free-solid-svg-icons'

const Flower = ({flower, cartHandler}) => {
    
    const {picture,price,name } = flower;
    return (
        <div className='flower-container'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <button onClick={()=>cartHandler(flower)} className='add-cart'>
                <p className='cart-btn-txt'>Add to Cart  </p>
                <FontAwesomeIcon icon={faCartPlus} />
            
            </button>
        </div>
    );
};

export default Flower;