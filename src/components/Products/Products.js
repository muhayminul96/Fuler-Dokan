import React, { useState } from 'react';
import { useEffect } from 'react';
import Flower from '../Flower/Flower';

const Products = () => {
    const [flowers,setFlowers] = useState([])
    useEffect(()=>{
      fetch('flower.json')
      .then(res => res.json())
      .then(data => setFlowers(data))
    },[])
    console.log(flowers)
    
    return (
        <div>
            <h2> ami product asci {flowers.length} </h2>
            {
                flowers.map(flower => <Flower key ={flower._id} flower ={flower}></Flower> )
            }
                        
        </div>
    );
};

export default Products;