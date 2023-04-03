import React from 'react';
import Fetuers from '../Fetuers/Fetuers';

const PriceCard = (props) => {
    return (
        <div className='bg-indigo-400 mt-5 rounded-md p-5 flex flex-col'>
            <h5 className='text-3xl text-center text-white font-semibold'>{props.price.name}</h5>
            <h5 className='text-2xl text-center text-white font-extrabold'>{props.price.price}$</h5>
            <p className='text-xl  '>{props.price.description}</p>
            <p className='text-xl text-white  underline'>Color</p>
            {
                props.price.colors.map((color,idx)  => <Fetuers key={idx} color={color}></Fetuers>)
            }
            <button className='w-full  bg-green-600 text-white p-2 rounded-md mt-auto '>Buy Now</button>
        </div>
    );
};

export default PriceCard;