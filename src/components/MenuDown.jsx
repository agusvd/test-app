import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiFillHome, AiOutlineHome, AiOutlineSearch,  } from 'react-icons/ai'
import { BiStar } from 'react-icons/bi'
import { FaRegUserCircle, FaUserCircle } from 'react-icons/fa'


const MenuDown = () => {
    const location = useLocation()
    const isHome = location.pathname === '/'
    const isProfile = location.pathname === '/profile'

    return (
        <div className='sticky bottom-0'>
            <div className='bg-white text-black dark:text-white dark:bg-black justify-around flex pb-3 py-2 px-2 items-center'>
                <Link>
                    <BiStar size={30} />
                </Link>
                <Link to="/">
                    <div className='relative'>
                        <div className='absolute top-8 right-2.5 w-2 h-2 rounded-full bg-red-600 animate-ping duration-300'></div>
                        <div class="absolute top-8 right-2.5 w-2 h-2 rounded-full bg-red-600"></div>
                        {isHome ? 
                            <AiFillHome size={30} /> : <AiOutlineHome size={30} />}
                    </div>
                </Link>
                <Link>
                    <AiOutlineSearch size={30} />
                </Link>
                <Link to="/profile">
                {isProfile ? 
                    <FaUserCircle size={30}/> :
                    <FaRegUserCircle size={30}/> 
                }     
                </Link>
            </div>
        </div>
    )
}

export default MenuDown
