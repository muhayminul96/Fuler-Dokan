import React from 'react';

const Flower = (props) => {
    const {_id, picture,price,name } = props.flower;
    return (
        <div className='flower-container'>
            <img src={picture} alt="" />
        </div>
    );
};

export default Flower;