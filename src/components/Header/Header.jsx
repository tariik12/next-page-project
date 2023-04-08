import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BoltIcon, Bars3BottomRightIcon,XMarkIcon} from '@heroicons/react/24/solid'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md: max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
             <div className='relative flex justify-between items-center'>
            {/* Logo section */}
            <Link to='/' className='inline-flex items-center'>
                <BoltIcon className='h-6 w-6 text-blue-500' />
            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'> Next Page</span>
            </Link>

            {/* nav item section */}

            <ul className='items-center hidden space-x-8 lg:flex'>
                <li>
                    <NavLink
                    to='/'
                    title='Home link'
                    className={({isActive}) =>(isActive ? 'text-blue-500' : '')}
                    >Home</NavLink>

                </li>
              
                <li>
                    <NavLink to='/book'
                    title='Books link'
                    className={({isActive}) => (isActive ? 'text-blue-500': '')}>
                        Books
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about'
                    title='About link'
                    className={({isActive}) =>(isActive ? 'text-blue-500' : '')} >
                    About us
                    </NavLink>
                </li>
            </ul>

            { /**mobile nav section */ }
            <div className='lg:hidden'>
                {/* Dropdown open Button  */}
                <button 
                aria-label='Open Menu'
                title='Open Menu'
                onClick={() => setIsMenuOpen(true)}
                >
                    <Bars3BottomRightIcon className='w-5 text-gray-600' />
                </button>
                {isMenuOpen && (
                    <div className='absolute top-0 left-0 w-full z-10'>
                        <div className='p-5 bg-white border rounded shadow-sm'>
                            {/* logo & button section */}
                        <div className='flex items-center justify-between mb-4'>
                            <div>
                                <Link to='/' className='inline-flex items-center'>
                                    <BoltIcon className='h-6 w-6   text-blue-500' />
<span className=' ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>nextPage</span>
{/* Dropdown menu close button */}
                                </Link>
                            </div>
<div>
    <button
    aria-label='Close Menu'
    title = 'Close Menu'
    onClick={() => setIsMenuOpen(false)}
    ><XMarkIcon className='w-5 text-gray-600' /></button>
</div>
                        </div>
{/* mobile nav items section  */}
<nav>
    <ul className='space-y-4'>
        <li>
            <Link to ='/'
             >
                Home
            </Link>
        </li>
        <li>
            <Link to ='/book'
            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400' >
                Books
            </Link>
        </li>
        <li>
            <Link to ='/about'
            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400' >
               About Us
            </Link>
        </li>

    </ul>
</nav>
                        </div>
                        
                    </div>
                )}
            </div>

        </div>
        </div>
       
    );
};

export default Header;