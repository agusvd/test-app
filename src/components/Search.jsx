import React from 'react'
import { BiSearch } from 'react-icons/bi';

const Search = () => {
    return (
        <button className="hidden sm:flex items-center justify-center border-2 border-black rounded-full py-1 px-10 gap-3 shadow-xl dark:border-white">
            <BiSearch size={20} className="text-black dark:text-white dark:bg-black" />
            <input type="text" placeholder="Buscar..." className="rounded-xl p-1 outline-none dark:bg-black" />
        </button>

    )
}

export default Search