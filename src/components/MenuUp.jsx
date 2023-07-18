import React from 'react'
import { Link } from 'react-router-dom'
import {BiMessageRounded, BiHeart} from 'react-icons/bi'
import {FaRegUserCircle} from 'react-icons/fa'
const MenuUp = () => {
    return (
        <div className=' top-0'>
            <div className='flex justify-between bg-black text-white items-center pr-2 pl-2'>
                <div className='flex gap-4'>
                <Link to="/profile">
                    <FaRegUserCircle size={30}/>
                </Link>
                <Link>
                    <BiHeart size={30}/>
                </Link>
                </div>
                <h1 className='text-2xl p-2 font-primary'>WhatsNew</h1>
                <Link>
                    <BiMessageRounded size={30}/>
                </Link>
            </div>
        </div>
    )
}

export default MenuUp