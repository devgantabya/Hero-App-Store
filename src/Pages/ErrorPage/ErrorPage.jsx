import React from 'react';
import errorPageImg from "../../assets/error-404.png";
import { Link } from 'react-router';
import Navbar from '../../Components/Header/Navbar';

const ErrorPage = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <Navbar></Navbar>
            </div>
            <div className='p-20 flex justify-center items-center bg-[#f5f5f5]'>
                <div className='text-center'>
                    <img src={errorPageImg} alt="404 - Page Not Found" />
                    <h1 className='text-[#001931] font-semibold text-5xl mt-10'>Oops, page not found!</h1>
                    <p className='text-[#627382] text-xl py-4'>The page you are looking for is not available.</p>
                    <Link to="/" className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-1 px-4 text-white rounded text-base font-semibold'><button>Go Back!</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;