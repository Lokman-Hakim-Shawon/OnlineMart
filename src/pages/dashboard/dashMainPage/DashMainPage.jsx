import React from 'react';
import { Outlet } from 'react-router-dom';
import DashNavBar from '../dashComponents/dashNavBar';

const DashMainPage = () => {
    return (
        <div className='h-full w-full'>
            <DashNavBar/>
            <div className='lg:w-[80%] mx-auto'><Outlet/></div>
        </div>
    );
};

export default DashMainPage;