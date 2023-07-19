import React from 'react'
import { Link } from 'react-router-dom'
import { BiMessageRounded, BiHeart } from 'react-icons/bi'

const MenuUp = () => {
    return (
        <div className='top-0'>
            <div className='flex justify-between bg-white text-black dark:bg-black dark:text-white items-center pr-2 pl-2'>
                <Link>
                    <BiHeart size={30} />
                </Link>
                <h1 className='text-2xl p-2 font-primary'>WhatsNew</h1>
                <Link>
                    <BiMessageRounded size={30} />
                </Link>
            </div>
        </div>
    )
}

export default MenuUp