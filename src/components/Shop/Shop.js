import React, { useState } from 'react';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';
import Flower from '../Flower/Flower';
import './Shop.css'

const Shop = () => {
    // load data 
    const [flowers,setFlowers] = useState([])
    useEffect(()=>{
      fetch('flower.json')
      .then(res => res.json())
      .then(data => setFlowers(data))
    },[])
    
    // set cart and order part 

    const [cart, setCart] = useState([])

    const addCartHandler = (flower) => {
        if (cart.length < 4){
            if(cart.indexOf(flower)){
                const newCart = [...cart , flower]
                setCart(newCart)
            }
            else{
                alert('This item already added')
            }
            
        }
        else{
            alert("maximum 4 item added");
        } 
    }
    const clearCart = () => setCart([])

    const randomSelections = () => {
        if(cart.length > 1){
            const random = Math.floor(Math.random() * cart.length);
            alert( "You can take " + cart[random].name);
        }
        
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
            {
                flowers.map(flower => <Flower key ={flower._id} flower ={flower} cartHandler = {addCartHandler}></Flower> )
            }
            </div>
            <div className="order-container">
            <h1>Total selection  {cart.length}</h1>
            {
                cart.map(flower => <Cart key={flower._id} flower={flower}></Cart>)
            }
            <button onClick={clearCart} className='clear'> Select Again</button>
            <button onClick={randomSelections} className='random'>Random Choice</button>
            </div>
        </div>
        
    );
};

export default Shop;