// InstalledApps.jsx
import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const InstalledApps = () => {
    const allApps = useLoaderData();

    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        setInstalledApps(storedApps);
    }, []);

    const handleUninstall = (appId) => {
        const numericId = Number(appId);
        const updatedApps = installedApps.filter(id => id !== numericId);
        setInstalledApps(updatedApps);
        localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    };

    const installedAppsData = allApps.filter(app => installedApps.includes(app.id));

    return (
        <div className="container mx-auto py-10">
            <h1 className='text-4xl md:text-5xl text-[#001931] font-bold text-center pt-15'>Your Installed Apps</h1>
            <p className='text-[#627382] text-xl text-center py-5 pb-10'>Explore All Trending Apps on the Market developed by us</p>

            <div className='flex flex-col md:flex-row justify-center md:justify-between items-center px-4 md:px-0'>
                <div className='py-5'>
                    <h3 className='text-[#001931] text-2xl font-semibold'>({allApps.length}) Apps Found</h3>
                </div>
                <div className="relative w-full md:w-64">
                    <select name="" id="" className="w-full">
                        <option value="High-Low">High-Low</option>
                        <option value="Low-High">Low-High</option>
                    </select>

                </div>
            </div>

            {installedAppsData.length === 0 ? (
                <p className="text-center py-20">No apps installed yet.</p>
            ) : (
                installedAppsData.map(app => (
                    <div key={app.id} className="flex justify-between items-center bg-white p-4 rounded mb-4">
                        <div>
                            <div className="flex items-center gap-3 ">
                                <img className="w-20 h-20" src={app.image} alt="" />
                                <div className="space-y-3">
                                    <h2 className="text-xl font-semibold">{app.title}</h2>
                                    <div className="flex items-center gap-4">
                                        <div className="text-[#00D390] text-base font-medium flex items-center gap-1"><FiDownload />
                                            <span>{app.downloads}</span></div>

                                        <div className="text-[#FF8811] text-base flex items-center gap-1"><FaStar />
                                            <span>{app.ratingAvg}</span></div>
                                        <div className="text-[#627382] text-base">
                                            <span>{app.size}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => handleUninstall(app.id)}
                            className="bg-[#00D390] text-white px-4 py-2 font-semibold rounded"
                        >
                            Uninstall
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default InstalledApps;
