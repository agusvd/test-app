import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProfileMenu = ({ onClose }) => {
    return (
        <div className='bg-white text-black dark:bg-black dark:text-white absolute bottom-0 rounded-xl w-full z-99'>
            <div className='flex flex-col items-center p-2 space-y-3'>
                <Link className='text-xl items-center gap-2'>
                    Configuracion
                </Link>
                <Link className='text-xl items-center gap-2'>
                    Notificaciones
                </Link>
                <Link className='text-xl items-center gap-2'>
                    Cerrar sesion
                </Link>
                <button className='text-xl items-center' onClick={onClose}>
                    Cancelar
                </button>
            </div>
        </div>
    )
}

export default ProfileMenu