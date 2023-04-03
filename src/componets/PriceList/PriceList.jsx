import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices,setPrices] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    },[])
    return (
        <div>
            <h1 className='text-5xl bg-purple-200 text-center font-semibold'>Awesome Affordable Price</h1>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-5'>
                {
                    prices.map(price => <PriceCard key={price.id} price={price}></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceList;