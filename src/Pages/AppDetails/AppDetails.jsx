import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from 'react-router';
import iconDownloads from "../../assets/icon-downloads.png"
import iconRatings from "../../assets/icon-ratings.png"
import iconReviews from "../../assets/icon-review.png"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const AppDetails = () => {
    const { id } = useParams();
    const singleAppId = parseInt(id);
    const data = useLoaderData();

    const singleApp = data.find((app) => app.id === singleAppId)

    const { image, companyName, description, ratingAvg, ratings, title, size, downloads, reviews } = singleApp;

    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        setInstalledApps(storedApps);
    }, []);

    const handleMarkAsInstalled = (appId) => {
        const numericId = Number(appId);
        if (!installedApps.includes(numericId)) {
            const updatedApps = [...installedApps, numericId];
            setInstalledApps(updatedApps);
            localStorage.setItem("installedApps", JSON.stringify(updatedApps));
        }
    };

    const isInstalled = installedApps.includes(singleAppId);


    return (
        <div className='container mx-auto'>
            <div className='flex flex-col md:flex-row gap-4 md:gap-10 w-full pt-5 md:pt-20 pb-10 border-0 border-b-1 border-[#dddddd] px-4 md:px-0'>
                <div className='bg-white md:w-3/8 flex justify-center items-center'>
                    <img className='w-2/3' src={image} alt={title} />
                </div>
                <div className='md:w-5/8'>
                    <h2 className='text-[#001931] font-bold text-[32px] text-center md:text-left'>{title}</h2>
                    <p className='text-[#627382] text-xl pb-5 pt-2 text-center md:text-left'>Developed by <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2]'>{companyName}</span></p>
                    <div>
                        <div className='flex flex-col md:flex-row justify-center items-center md:justify-between gap-7 py-5 border-0 border-t-1 border-[#dddddd] md:w-3/5'>
                            <div className='w-full flex flex-col md:justify-start  justify-center md:items-start items-center'>
                                <img className='h-15 md:h-10 w-15 md:w-10' src={iconDownloads} alt="Download icon" />
                                <p className='text-[#001931] pt-3 text-2xl md:text-base'>Downloads</p>
                                <h3 className='text-[#001931] font-extrabold text-[40px]'>{downloads}</h3>
                            </div>
                            <div className='w-full flex flex-col md:justify-start  justify-center md:items-start items-center'>
                                <img className='h-15 md:h-10 w-15 md:w-10' src={iconRatings} alt="Rating icon" />
                                <p className='text-[#001931] pt-3 text-2xl md:text-base'>Average Ratings</p>
                                <h3 className='text-[#001931] font-extrabold text-[40px]'>{ratingAvg}</h3>
                            </div>
                            <div className='w-full flex flex-col md:justify-start  justify-center md:items-start items-center'>
                                <img className='h-15 md:h-10 w-15 md:w-10' src={iconReviews} alt="Review icon" />
                                <p className='text-[#001931] pt-3 text-2xl md:text-base'>Total Reviews</p>
                                <h3 className='text-[#001931] font-extrabold text-[40px]'>{reviews}</h3>
                            </div>
                        </div>
                        <div className='text-center md:text-left'>
                            <button onClick={() => handleMarkAsInstalled(id)}
                                className={'bg-[#00D390] text-white rounded px-5 py-3 text-xl font-semibold ${isInstalled ? "opacity-50 cursor-not-allowed" : ""}'}>
                                {isInstalled ? "Installed" : `Install Now ( ${size} )`}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-10 border-0 border-b-1 border-[#dddddd] px-4 md:px-0'>
                <h4 className='text-[#001931] font-semibold text-2xl text-center md:text-left pb-5'>Ratings</h4>
                <ResponsiveContainer width="100%" height={300} style={{ outline: "none" }}>
                    <BarChart
                        layout="vertical"
                        data={ratings
                            .slice()
                            .sort((a, b) => b.name - a.name)
                            .map(rating => ({
                                name: rating.name,
                                value: rating.count || rating.value || 0,
                            }))}
                    >
                        <CartesianGrid horizontal={false} stroke="none" />
                        <XAxis type="number" axisLine={false} tickLine={false} />
                        <YAxis type="category" dataKey="name" reversed axisLine={false} tickLine={false} tick={{ dx: -10 }} />
                        <Tooltip />
                        <Bar dataKey="value" fill="#ff8811" barSize={30} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className='py-10 border-0 border-b-1 border-[#dddddd] px-4 md:px-0'>
                <h4 className='text-[#001931] font-semibold text-2xl text-center md:text-left pb-5'>Description</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;