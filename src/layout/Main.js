import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/navbar/Nav';

const Main = () => {
    return (
        <div>
            <Nav />
            <Outlet />
        </div>
    );
};

export default Main;