import React from 'react'
import perfil from '../assets/perfil2.jpeg'
import { Link } from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'

const Profile = () => {
    return (
        <div className='h-full bg-black'>
            <div className=''>
                <div className='p-2 flex justify-between'>
                    <Link></Link>
                    <Link className='text-white'>
                        <BiMenu size={40}/>
                    </Link>
                </div>
                <div className='p-5 justify-center items-center flex flex-col'>
                    <img src={perfil} className="flex-none rounded-full w-24 h-24" loading="lazy" />
                    <h2 className='text-white text-xl pt-2'>Duki</h2>
                </div>
                <div className='p-2 flex justify-around'>
                    <Link className='text-center'>
                        <p className='text-white font-bold'>12.9 mill.</p>
                        <h2 className='text-white text-sm'>Seguidores</h2>
                    </Link>
                    <Link className='text-center'>
                        <p className='text-white font-bold'>463</p>
                        <h2 className='text-white text-sm'>Seguidos</h2>
                    </Link>
                    <div className='text-center'>
                        <p className='text-white font-bold'>Bresh</p>
                        <h2 className='text-white text-sm'>Miembro</h2>
                    </div>
                </div>
                <div className='p-2'>
                    <p className='text-white text-start'>Descripcion del usuario</p>
                </div>
            </div>
        </div>
    )
}

export default Profile