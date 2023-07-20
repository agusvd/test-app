import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiFillHome, AiOutlineHome, AiOutlineSearch, AiTwotoneFire, AiOutlineFire } from 'react-icons/ai'

import { BiMessageRounded, BiHeart, BiHeading } from 'react-icons/bi'


const MenuDown = () => {
    const location = useLocation()
    const isHome = location.pathname === '/'
    const isProfile = location.pathname === '/profile'
    const isHistorias = location.pathname === '/historias'

    return (
        <div className='sticky bottom-0'>
            <div className='bg-white text-black dark:text-white dark:bg-black justify-around flex p-1 items-center'>
                <Link to="/" className='cursor-pointer hover:scale-110 duration-100 transition-all ease-in'>
                    <div className='relative text-sm text-center items-center flex flex-col'>
                        <div className='absolute button-8 right-0 w-2 h-2 rounded-full bg-red-600 animate-ping duration-300'></div>
                        <div className="absolute button-8 right-0 w-2 h-2 rounded-full bg-red-600"></div>
                        {isHome ?
                            <AiFillHome size={30} /> : <AiOutlineHome size={30} />
                        }
                        Inicio
                    </div>
                </Link>
                <Link to="/historias" className='text-sm text-center items-center flex flex-col cursor-pointer hover:scale-110 duration-100 transition-all ease-in'>
                    <div className='relative text-sm text-center items-center flex flex-col'>
                        <div className='absolute button-8 right-3 w-2 h-2 rounded-full bg-red-600 animate-ping duration-300'></div>
                        <div className="absolute button-8 right-3 w-2 h-2 rounded-full bg-red-600"></div>
                        {isHistorias ? <AiTwotoneFire size={30} /> : <AiOutlineFire size={30}/>
                        }                      
                        Historias
                    </div>
                </Link>
                <Link to="/notificaciones" className='text-sm text-center items-center flex flex-col cursor-pointer hover:scale-110 duration-100 transition-all ease-in'>
                    <BiHeart size={30}/>
                    Notificaciones
                </Link>
                <Link to="/chats" className='text-sm text-center items-center flex flex-col cursor-pointer hover:scale-110 duration-100 transition-all ease-in'>
                    <BiMessageRounded size={30} />
                    Chats
                </Link>
            </div>
        </div>
    )
}

export default MenuDown
