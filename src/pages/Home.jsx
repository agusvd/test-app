// Home.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Inicio from '../components/Inicio';
import Navbar from '../components/Navbar';


const Home = () => {
    return (
        <div className="flex flex-col dark:bg-black sticky top-0">
            <Navbar />
            <div className='flex sticky right-0'>
                <Sidebar />
                <div className='h-screen w-full flex flex-col'>
                    <Inicio />
                </div>
            </div>
        </div>
    );
};

export default Home;
