import React from 'react'
import Search from './Search'
import perfil from '../assets/perfil2.jpeg'

const Navbar = () => {
    return (
        <div className='flex justify-around px-5 py-2 items-center dark:bg-black dark:text-white'>
            <Search />
            <img src={perfil} className="flex-none rounded-full w-16 h-16 object-cover hover:ring-2 hover:ring-red-500" loading="lazy" />
        </div>
    )
}

export default Navbar