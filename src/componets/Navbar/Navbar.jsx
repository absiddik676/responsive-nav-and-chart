import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
const Navbar = () => {
    const [open,setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Product Details', path: '/products/:id' },
        { id: 5, name: '404 Not Found', path: '/404' },
      ];
      
    return (
        <div className='bg-purple-400 px-6'>
            <div onClick={()=>setOpen(!open)} className='md:hidden'>                 
            {
                open === true ? <XMarkIcon className="h-6 w-6 text-blue-500" />:<Bars3Icon className="h-6 w-6 text-blue-500" />
            }
            </div>
            
            <ul className={`md:flex absolute md:static duration-500 bg-purple-400 p-4 ${open ? 'top-5' : '-top-52'}`}>
                {
                    routes.map(route  => <Link key={route.key} route={route}></Link>)
                }
            </ul>
        </div>
    );
};

export default Navbar;