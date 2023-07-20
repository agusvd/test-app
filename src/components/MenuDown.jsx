import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiFillHome, AiOutlineHome, AiOutlineSearch, } from 'react-icons/ai'
import { FaRegUserCircle, FaUserCircle } from 'react-icons/fa'
import { BiMessageRounded } from 'react-icons/bi'


const MenuDown = () => {
    const location = useLocation()
    const isHome = location.pathname === '/'
    const isProfile = location.pathname === '/profile'

    return (
        <div className='sticky bottom-0'>
            <div className='bg-white text-black dark:text-white dark:bg-black justify-around flex p-1 items-center'>
                <Link to="/">
                    <div className='relative text-sm text-center items-center flex flex-col'>
                        <div className='absolute button-8 right-1 w-2 h-2 rounded-full bg-red-600 animate-ping duration-300'></div>
                        <div className="absolute button-8 right-1 w-2 h-2 rounded-full bg-red-600"></div>
                        {isHome ?
                            <AiFillHome size={30} /> : <AiOutlineHome size={30} />
                        }
                        Inicio
                    </div>
                </Link>
                <Link className='text-sm text-center items-center flex flex-col'>
                    <AiOutlineSearch size={30} />
                    Buscar
                </Link>
                <Link to="/profile" className='text-sm text-center items-center flex flex-col'>
                    {isProfile ?
                        <FaUserCircle size={30} /> : <FaRegUserCircle size={30} />
                    }
                    Perfil
                </Link>
                <Link className='text-sm text-center items-center flex flex-col'>
                    <BiMessageRounded size={30} />
                    Chats
                </Link>
            </div>
        </div>
    )
}

export default MenuDown
