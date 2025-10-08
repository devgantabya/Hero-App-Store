import React, { Suspense } from 'react';
import TrendingApp from '../TrendingApp/TrendingApp';
import { Link } from "react-router";

const TrendingApps = ({ data }) => {


    return (
        <div className='container mx-auto pb-15'>
            <h1 className='text-4xl md:text-5xl text-[#001931] font-bold text-center py-5 mt-20'>Trending Apps</h1>
            <p className='text-[#627382] text-xl text-center pb-10'>Explore All Trending Apps on the Market developed by us</p>
            <div >
                <Suspense fallback={<span>Loading...</span>} hydrateFallback={<span>Loading initial data...</span>}>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                        {
                            data.slice(0, 8).map((singleApp) => <TrendingApp singleApp={singleApp} key={singleApp.id}></TrendingApp>)
                        }
                    </div>
                </Suspense>
            </div>
            <div className='text-center mt-15'>
                <Link to="/all-apps" className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-3 px-8 text-white rounded text-base font-semibold shadow'>
                    Show All
                </Link>
            </div>
        </div>
    );
};

export default TrendingApps;