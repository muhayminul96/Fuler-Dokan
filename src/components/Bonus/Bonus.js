import React from 'react';
import './Bonus.css'


const Bonus = () => {
    return (
        <div className='bonus-container'>
            <div>
            <h2> How React Work?</h2>
            <p> The heart of react app is components, it must be have one components, components are made by jsx, components are may be class based or function  based. main feature is virtaul dom , it  compare to real dom if need to change it change only that part.</p>
            </div>
            
            
            <div>
            <h2> State vs Props</h2>
            <p> we use props when we need send data parent to child components , state use on current components, Props is are immutable  but state is mutable. Props are external and controlled by whatever renders the component, whereas state is internal and controlled by the component itself.   </p>
            </div>
            
            <div>
            <h2>How UseState Hook works? </h2>
            <p> useState() is a Hook that enables state variables to be used in functional components. This function takes the starting state and returns a variable with the current state value. It is not always the original state, and another function must be used to update its value.   </p>
            </div>
            

        </div>
    );
};

export default Bonus;