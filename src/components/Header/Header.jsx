import React from 'react';
import { BoltIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <div className='bg-gray-100 flex justify-between items-center'>
            {/* Logo section */}
            <div className='inline-flex items-center'>
                <BoltIcon className='h-6 w-6 text-blue-500' />
            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'> Next Page</span>
            </div>

            {/* nav item section */}
          
        </div>
    );
};

export default Header;