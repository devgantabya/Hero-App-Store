import React from 'react';
import bannerImg from "../../assets/hero.png"
import googlePlayIcon from "../../assets/google-play-icon.png"
import appStoreIcon from "../../assets/app-store-icon.webp"
import { Link } from 'react-router';


const Banner = () => {
    return (
        <div className="container mx-auto md:px-20 md:pt-20 px-4 pt-8">
            <div className='space-y-4 md:space-y-10 text-center'>
                <h1 className=" text-[#001931] text-5xl md:text-7xl font-extrabold leading-15 md:leading-22">We Build
                    <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2]'><br />Productive</span> Apps</h1>
                <p className='text-[#627382] text-lg md:text-xl'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='flex flex-col md:flex-row items-center justify-center gap-4 mb-10'>
                    <Link to="https://play.google.com/">
                        <button className="outline outline-[#D2D2D2] text-[#001931] font-semibold text-xl rounded px-5 py-3 flex items-center justify-center gap-2 w-[200px] md:w-auto"><img className='w-6 h-6' src={googlePlayIcon} alt="" />
                            <span>Google Play</span>
                        </button>
                    </Link>
                    <Link to="https://www.apple.com/app-store/">
                        <button className="outline outline-[#D2D2D2] text-[#001931] font-semibold text-xl rounded px-5 py-3 flex items-center justify-center gap-2 w-[200px] md:w-auto"><img className='w-7 h-7' src={appStoreIcon} alt="" />
                            <span>App Store</span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className='text-center flex justify-center items-center'>
                <img
                    src={bannerImg}
                    className=""
                />
            </div>
        </div>
    );
};

export default Banner;