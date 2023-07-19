import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoSettingsSharp, IoClose } from 'react-icons/io5'

const ProfileMenu = ({ onClose }) => {
    return (
        <div className='bg-gray-900 p-4 right-0 absolute top-0 w-3/5 h-screen rounded-l-3xl z-99'>
            <div className='flex justify-start'>
                <button className='text-white' onClick={onClose}>
                    <IoClose size={40} />
                </button>
            </div>
            <div className='flex flex-col items-start'>
                <Link className='text-white text-2xl flex items-center gap-2'>
                    <IoSettingsSharp />Configuracion
                </Link>
            </div>
        </div>
    )
}

export default ProfileMenu