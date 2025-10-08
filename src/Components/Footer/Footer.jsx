import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo.png';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="text-center py-8 bg-[#001931] text-white">
            <div className='container mx-auto flex flex-col md:flex-row gap-8 justify-between items-center md:border-0 md:border-b-1 md:border-gray-700 pt-2'>
                <div>
                    <Link to="/" className="text-3xl md:text-base font-bold flex items-center gap-1">
                        <img className='h-15 w-15 md:h-10 md:w-10' src={logo} alt="Logo" />
                        <span>HERO.IO</span>
                    </Link>
                </div>
                <div>
                    <h2 className='font-medium text-xl mb-2'>Social Links</h2>
                    <div className='flex items-center gap-4 justify-center md:justify-end'>
                        <FaXTwitter className='bg-white rounded-full text-black p-1 text-3xl md:text-xl' />
                        <FaLinkedinIn className='bg-white rounded-full text-black p-1 text-3xl md:text-xl' />
                        <FaFacebookF className='bg-white rounded-full text-black p-1 text-3xl md:text-xl' />
                    </div>

                </div>
            </div>
            <div className='pt-8'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;