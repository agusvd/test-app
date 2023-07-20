import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaRegUserCircle, FaUserCircle } from 'react-icons/fa'

const MenuUp = () => {
    const location = useLocation()
    const isProfile = location.pathname === '/profile'

    return (
        <div className='sticky top-0'>
            <div className='flex justify-between bg-white text-black dark:bg-black dark:text-white items-center px-2'>
                <Link to="/profile" className='text-sm text-center items-center flex flex-col cursor-pointer hover:scale-110 duration-100 transition-all ease-in'>
                    {isProfile ?
                        <FaUserCircle size={30} /> : <FaRegUserCircle size={30} />
                    }
                </Link>
                <h1 className='text-2xl p-2 font-primary'>WhatsNew</h1>
                <Link className='cursor-pointer hover:scale-110 duration-100 transition-all ease-in'>
                    <AiOutlineSearch size={30} />
                </Link>
            </div>
        </div>
    )
}

export default MenuUp