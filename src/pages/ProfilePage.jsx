// Home.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';

const ProfilePage = () => {
    return (
        <div className="flex dark:bg-black">
            <Sidebar />
            <div className='h-screen w-full flex flex-col'>
                <Profile />
            </div>
        </div>
    );
};

export default ProfilePage;
