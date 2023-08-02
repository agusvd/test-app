import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProfileMenu = ({ onClose }) => {
    return (
        <div className='bg-white text-black font-bold dark:text-white dark:bg-gray-500 absolute rounded-t-xl w-80 h-80 z-99 justify-center items-center flex bottom-0'>
            <div className='flex flex-col items-center p-2 space-y-3'>
                <Link className='text-xl items-center gap-2 hover:text-cyan-400'>
                    Configuracion
                </Link>
                <Link className='text-xl items-center gap-2 hover:text-cyan-400'>
                    Notificaciones
                </Link>
                <Link className='text-xl items-center gap-2 hover:text-cyan-400'>
                    Cerrar sesion
                </Link>
                <button className='text-xl items-center hover:text-cyan-400' onClick={onClose} >
                    Cancelar
                </button>
            </div>
        </div>
    )
}

export default ProfileMenu