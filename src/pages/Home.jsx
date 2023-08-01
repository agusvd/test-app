// Home.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Inicio from '../components/Inicio';

const Home = () => {
    return (
        <div className="flex dark:bg-black">
            <Sidebar />
            <div className='h-screen w-full flex flex-col'>
                <Inicio />
            </div>
        </div>
    );
};

export default Home;
