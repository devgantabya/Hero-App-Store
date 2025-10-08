import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png';
import { FaGithub } from "react-icons/fa";


const Navbar = () => {

    const links = <>
        <li className='mx-2'>
            <NavLink to="/" className={({ isActive }) =>
                `text-base font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-white ${isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] after:content-[''] after:absolute after:left-0 after:-bottom-0 after:w-full after:h-[2px] after:bg-gradient-to-br after:from-[#632EE3] after:to-[#9F62F2]"
                    : "text-black"}`
            }>Home</NavLink>
        </li>
        <li className='mx-2'>
            <NavLink to="/all-apps" className={({ isActive }) =>
                `text-base font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-white ${isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] after:content-[''] after:absolute after:left-0 after:-bottom-0 after:w-full after:h-[2px] after:bg-gradient-to-br after:from-[#632EE3] after:to-[#9F62F2]"
                    : "text-black"}`
            }>Apps</NavLink>
        </li>
        <li className='mx-2'>
            <NavLink to="/installed-apps" className={({ isActive }) =>
                `text-base font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-white ${isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-br after:from-[#632EE3] after:to-[#9F62F2]"
                    : "text-black"}`
            }>Installation</NavLink>
        </li>
    </>

    return (
        <div className='bg-white'>
            <div className="flex justify-between items-center py-6 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] flex items-center gap-1">
                        <img className='h-10 w-10' src={logo} alt="Logo" />
                        <span>HERO.IO</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="https://github.com/devgantabya" className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-2 px-4 text-white rounded text-base font-semibold flex items-center gap-2 mr-4 md:mr-0'>
                        <span><FaGithub className='w-5 h-5' /></span>
                        <span>Contribute</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;