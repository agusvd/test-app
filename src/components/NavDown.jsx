import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiFillHome, AiOutlineHome, AiOutlineSearch, AiTwotoneFire, AiOutlineFire } from 'react-icons/ai'


const NavDown = () => {
    const location = useLocation()
    const isHome = location.pathname === '/'
    const isSearch = location.pathname === '/search'
    const isCategorias = location.pathname === '/search'

    return (
        <div className='bottom-0 sticky w-56 border-2'>
            <div className='dark:text-white dark:bg-black p-2 text-center'>
                <div className='flex flex-col items-start justify-center'>
                    <Link to="/" className='text-xl flex justify-center items-center hover:text-red-500 py-1 px-2 transition-all duration-200 ease-in-out gap-4'>
                        {isHome ?
                            <AiFillHome size={40} /> : <AiOutlineHome size={40} />
                        }
                        Inicio
                    </Link>
                    <Link to="/" className='text-xl flex justify-center items-center hover:text-red-500 py-1 px-2 transition-all duration-200 ease-in-out gap-4'>
                        {isSearch ?
                            <AiOutlineSearch size={40} /> : <AiOutlineSearch size={40} />
                        }
                        Buscar
                    </Link>
                    <Link to="/" className='text-xl flex justify-center items-center hover:text-red-500 py-1 px-2 transition-all duration-200 ease-in-out gap-4'>
                        {isCategorias ?
                            <AiTwotoneFire size={40} /> : <AiOutlineFire size={40} />
                        }
                        Categorias
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavDown