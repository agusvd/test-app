import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiFillHome, AiOutlineHome, AiOutlineSearch,  } from 'react-icons/ai'
import { BiStar } from 'react-icons/bi'

const MenuDown = () => {
    const location = useLocation()
    const isHome = location.pathname === '/'

    return (
        <div className='sticky bottom-0'>
            <div className='bg-black justify-around flex pb-3 py-2 px-2 items-center'>
                <Link className='text-white'>
                    <BiStar size={40} />
                </Link>
                <Link to="/" className='text-white'>
                    <div className='relative'>
                        <div className='absolute top-10 right-4 w-2 h-2 rounded-full bg-red-600 animate-ping duration-100'></div>
                        <div class="absolute top-10 right-4 w-2 h-2 rounded-full bg-red-600"></div>
                        {isHome ? 
                            <AiFillHome size={40} /> : <AiOutlineHome size={40} />}
                    </div>
                </Link>
                <Link className='text-white'>
                    <AiOutlineSearch size={40} />
                </Link>
            </div>
        </div>
    )
}

export default MenuDown
