import React from 'react';
import {CheckCircleIcon } from '@heroicons/react/24/solid'
const Fetuers = ({color}) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className="h-5 w-5 text-green-400" />
            <span className='pl-2'>{color}</span>
            
        </div>
    );
};

export default Fetuers;