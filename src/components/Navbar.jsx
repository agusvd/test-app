import React from 'react'
import Search from './Search'
import perfil from '../assets/perfil2.jpeg'

const Navbar = () => {
    return (
        <div className='flex justify-between px-5 items-center dark:bg-black dark:text-white border-b-2 py-2 sticky'>
            <a>WhatsNew?</a>
            <Search />
        </div>
    )
}

export default Navbar