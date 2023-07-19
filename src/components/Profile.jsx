import React, {useState} from 'react'
import perfil from '../assets/perfil2.jpeg'
import post1 from '../assets/post1.jpeg'
import { Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import ProfileMenu from './ProfileMenu'

const Profile = () => {
    const [ProfileMenuVisible, SetProfileMenuVisible] = useState(false)

    const handleOpenMenu = () => {
        SetProfileMenuVisible(true)
    }

    const handleCloseMenu = () => {
        SetProfileMenuVisible(false)
    }

    return (
        <div className='h-full bg-black'>
            <div className=''>
                <div className='p-2 flex justify-between'>
                    <h2 className='text-white text-2xl '>Duki</h2>
                    <button onClick={handleOpenMenu} className='text-white'>
                        <BiMenu size={40} />
                    </button>
                </div>
                <div className='p-5 justify-center items-center flex flex-col'>
                    <img src={perfil} className="flex-none rounded-full w-24 h-24" loading="lazy" />
                    <h2 className='text-white text-xl pt-2 '>Duki</h2>
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
                <div className='border-b-2'></div>
            </div>
            <div className='bg-black h-screen'>
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