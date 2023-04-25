import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../Header/Header';

const DashboardLayout = () => {
    return (
        <div>     
            <div className='dashboard_menu'>
                <Link className='dashboard_menu_item' to={'users'}>Users</Link>
                <Link className='dashboard_menu_item' to={'orders'}>Orders</Link>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;