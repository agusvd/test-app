import React, { useState } from 'react'
import perfil from '../assets/perfil2.jpeg'
import { Link } from 'react-router-dom'
import { BiMenu, BiUserCheck, BiMessageRounded, BiHeart } from 'react-icons/bi'
import ProfileMenu from './ProfileMenu'
import { IoSettingsSharp, IoClose } from 'react-icons/io5'
import { MdVerified } from 'react-icons/md'

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
                    <Link>
                        <BiHeart size={35} />
                    </Link>
                </div>
                <div>
                    <h2 className='text-xl flex items-center gap-1'>Duki<MdVerified className='text-red-400' /></h2>
                </div>
                <button onClick={handleOpenMenu}>
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
                <div className='p-2 flex flex-col justify-around'>
                    <div className='flex justify-around gap-10'>
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
                    <button className='p-1 bg-red-500 hover:bg-red-500/80 text-white rounded-lg px-6 flex items-center font-bold'>Seguir</button>
                    <button className='px-1 bg-red-500 hover:bg-red-500/80 text-white rounded-lg flex items-center'><BiUserCheck size={30} /></button>
                    <button className='p-1 bg-black dark:bg-slate-800 hover:bg-slate-500/80 text-white rounded-lg px-6 flex items-center font-bold'>Mensaje</button>
                </div>
                <div className='border-b'></div>
            </div>
            <div className='h-screen'>
                <div className='grid grid-cols-2'>
                    <img src='' />
                    <img src='' />
                    <img src='' />
                </div>
            </div>
            {ProfileMenuVisible && (
                <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center z-[99]">
                    <ProfileMenu onClose={handleCloseMenu} />
                </div>
            )}
        </div>
    )
}

export default Profile