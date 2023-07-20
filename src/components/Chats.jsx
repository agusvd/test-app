import React from 'react'
import { Link } from 'react-router-dom'
import perfil1 from '../assets/perfil3.jpeg'
import perfil2 from '../assets/perfil4.jpeg'
import perfil3 from '../assets/perfil5.jpeg'
import perfil4 from '../assets/perfil6.jpeg'
import { MdVerified, MdAddBox } from 'react-icons/md'
import { BsArrowLeftShort } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'

const Chats = () => {
    return (
        <div className='h-screen bg-white text-black dark:bg-black dark:text-white'>
            {/* Menu inicial */}
            <div className='sticky top-0 justify-between flex items-center p-2 bg-white dark:bg-black'>
                <div className='flex items-center justify-center gap-2'>
                    <Link to="/" className='cursor-pointer hover:scale-110 duration-100 transition-all ease-in'>
                        <BsArrowLeftShort size={35} />
                    </Link>
                </div>
                <div>
                    <h2 className='text-xl flex items-center gap-1'>Duki<MdVerified className='text-red-400' /></h2>
                </div>
                <button className='cursor-pointer hover:scale-110 duration-100 transition-all ease-in'>
                    <MdAddBox size={40} />
                </button>
            </div>
            {/* Fin */}
            {/* Para buscar los chats */}
            <div className='flex flex-col justify-center'>
                <div className='flex items-center bg-gray-300/50 dark:bg-gray-800 p-2 mx-4 rounded-lg justify-start'>
                    <BiSearch size={20} className='' />
                    <input type='text' className='bg-gray-200 dark:bg-gray-800/50 w-full outline-0' placeholder='Buscar..' />
                </div>
            </div>
            {/* Fin */}
            {/* Chats */}
            <div className='mx-4 my-2 space-y-2'>
                {/*CARD*/}
                <div className='flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-900/50 w-full p-2 cursor-pointer'>
                    <div className='flex justify-center items-center gap-4'>
                        <img src={perfil1} className="flex-none rounded-full w-20 h-20 object-cover" loading="lazy" />
                        <div className='flex flex-col'>
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-sm flex items-center gap-1'>Emilia Mernes<MdVerified className='text-red-400' /></h2>
                                <h3 className='text-sm text-gray-400'>Visto hace dos minutos</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* todavia nose que agregar aqui */}
                    </div>
                </div>
                {/*Fin CARD*/}
                {/*CARD*/}
                <div className='flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-900/50 w-full p-2 cursor-pointer'>
                    <div className='flex justify-center items-center gap-4'>
                        <img src={perfil2} className="flex-none rounded-full w-20 h-20 object-cover" loading="lazy" />
                        <div className='flex flex-col'>
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-sm flex items-center gap-1'>Coscu<MdVerified className='text-red-400' /></h2>
                                <h3 className='text-sm text-gray-400'>Enviado hace 10 min</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* todavia nose que agregar aqui */}
                    </div>
                </div>
                {/*Fin CARD*/}
                {/*CARD*/}
                <div className='flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-900/50 w-full p-2 cursor-pointer'>
                    <div className='flex justify-center items-center gap-4'>
                        <img src={perfil3} className="flex-none rounded-full w-20 h-20 object-cover" loading="lazy" />
                        <div className='flex flex-col'>
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-sm flex items-center gap-1'>Nicki Nicole<MdVerified className='text-red-400' /></h2>
                                <h3 className='text-sm text-gray-400'>Enviado hace 5 h</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* todavia nose que agregar aqui */}
                    </div>
                </div>
                {/*Fin CARD*/}
                {/*CARD*/}
                <div className='flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-900/50 w-full p-2 cursor-pointer'>
                    <div className='flex justify-center items-center gap-4'>
                        <img src={perfil4} className="flex-none rounded-full w-20 h-20 object-cover" loading="lazy" />
                        <div className='flex flex-col'>
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-sm flex items-center gap-1'>Ibai<MdVerified className='text-red-400' /></h2>
                                <h3 className='text-sm text-gray-400'>Enviado hace 12 h</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* todavia nose que agregar aqui */}
                    </div>
                </div>
                {/*Fin CARD*/}
            </div>
        </div>
    )
}

export default Chats