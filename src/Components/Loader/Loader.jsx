import React from 'react';
import logo from '../../assets/logo.png';

const Loader = () => {
    return (
        <div className="flex justify-center items-center ">
            <img
                src={logo}
                alt="Loading..."
                className="h-15 w-15 animate-spin-slow"
            />
            <style>
                {`
          @keyframes spin360 {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin360 1s linear infinite;
          }
        `}
            </style>
        </div>
    );
};

export default Loader;
