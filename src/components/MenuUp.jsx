import React from 'react'
import { Link } from 'react-router-dom'
import {BiMessageRounded, BiHeart} from 'react-icons/bi'
const MenuUp = () => {
    return (
        <div className='sticky top-0'>
            <div className='flex justify-around bg-black text-white items-center'>
                <Link>
                    <BiHeart size={30}/>
                </Link>
                <h1 className='text-2xl p-2 font-primary'>WhatsNew</h1>
                <Link>
                    <BiMessageRounded size={30}/>
                </Link>
            </div>
        </div>
    )
}

export default MenuUp