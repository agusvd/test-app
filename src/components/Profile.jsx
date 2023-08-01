import React, { useState } from 'react'
import perfil from '../assets/perfil2.jpeg'
import { Link } from 'react-router-dom'
import { BiMenu, BiUserCheck } from 'react-icons/bi'
import ProfileMenu from './ProfileMenu'
import { MdVerified } from 'react-icons/md'
import { BsArrowLeftShort } from 'react-icons/bs'

const Profile = () => {
    const [ProfileMenuVisible, SetProfileMenuVisible] = useState(false)

    const handleOpenMenu = () => {
        SetProfileMenuVisible(true)
    }

    const handleCloseMenu = () => {
        SetProfileMenuVisible(false)
    }

    return (
        <div className='h-full bg-white text-black dark:bg-black dark:text-white'>
            <div className='sticky top-0 justify-between flex items-center p-2 bg-white dark:bg-black border-b-2'>
                <div className='flex items-center justify-center gap-2'>
                    <Link to="/" className='cursor-pointer hover:scale-110 duration-100 transition-all ease-in'>
                        <BsArrowLeftShort size={35} />
                    </Link>
                </div>
                <div>
                    <h2 className='text-xl flex items-center gap-1'>Duki<MdVerified className='text-cyan-400' /></h2>
                </div>
                <button onClick={handleOpenMenu} className='cursor-pointer hover:scale-110 duration-100 transition-all ease-in'>
                    <BiMenu size={40} />
                </button>
            </div>
            <div className='p-2'>
                <div className='p-5 justify-center items-center flex gap-10'>
                    <img src={perfil} className="flex-none rounded-full w-32 h-32 object-cover" loading="lazy" />
                    <div className='flex flex-col'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-xl flex items-center gap-1'>L♡veStar</h2>
                            <h3>Aqui va la descripcion</h3>
                        </div>
                    </div>
                </div>
                <div className='p-2 flex flex-col justify-center items-center'>
                    <div className='flex justify-between items-center w-64'>
                        <Link className='text-center'>
                            <p className='font-bold'>12.9 mill.</p>
                            <h2 className='text-sm'>Seguidores</h2>
                        </Link>
                        <Link className='text-center'>
                            <p className='font-bold'>463</p>
                            <h2 className='text-sm'>Seguidos</h2>
                        </Link>
                        <div className='text-center'>
                            <p className='font-bold'>Bresh</p>
                            <h2 className='text-sm'>Miembro</h2>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center gap-4 p-2'>
                    <button className='p-1 bg-cyan-500 hover:bg-cyan-500/80 text-white rounded-lg px-6 flex items-center font-bold'>Seguir</button>
                    <button className='px-1 bg-cyan-500 hover:bg-cyan-500/80 text-white rounded-lg flex items-center'><BiUserCheck size={30} /></button>
                    <button className='p-1 bg-black dark:bg-slate-800 hover:bg-slate-500/80 text-white rounded-lg px-6 flex items-center font-bold'>Mensaje</button>
                </div>
                <div className='border-b'></div>
            </div>
            <div className='h-screen'>
                <div className='flex gap-4 items-center justify-center'>
                    <div className='p-2 hover:text-cyan-500 transition-all ease-out cursor-pointer dark:text-white'>Publicaciones</div>
                    <div className='p-2 hover:text-cyan-500 transition-all ease-out cursor-pointer dark:text-white'>Calendario</div>
                    <div className='p-2 hover:text-cyan-500 transition-all ease-out cursor-pointer dark:text-white'>Resenas</div>
                </div>
                <div className='border-b pt-2'></div>
                <div className='grid grid-cols-2'>
                </div>
            </div>
            {ProfileMenuVisible && (
                <div className="fixed top-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center z-[99]">
                    <ProfileMenu onClose={handleCloseMenu} />
                </div>
            )}
        </div>
    )
}

export default Profile