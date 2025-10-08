import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utilities/storeDataInLocal';
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


    const handleMarkAsInstalled = id => {
        addToStoredDB(id);
    }


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
                            <button onClick={() => handleMarkAsInstalled(id)} className='bg-[#00D390] text-white rounded px-5 py-3 text-xl font-semibold'>Install Now ( {size} )</button>
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
        // <div className='flex justify-between items-center gap-10 w-full'>
        //     <div className='w-1/2 p-20 bg-gray-100 rounded-2xl'>
        //         <img className='object-cover' src={image} alt={title} />
        //     </div>
        //     <div className='w-1/2 space-y-4'>
        //         <h1 className='text-4xl font-bold'>{title}</h1>
        //         <p className='font-medium text-xl'>By: {companyName}</p>
        //         <div className='border border-t-0 border-gray-400'></div>
        //         <p className='font-medium text-xl'></p>
        //         <div className='border border-t-0 border-gray-400'></div>
        //         <p className=''><span className='font-bold'>Review: </span>{description}</p>
        //         <h4 className='font-bold'><span className='mr-5'>Tag</span>
        //             {
        //                 ratings.map((rating) => <button className='text-green-400 px-2 py-1 mx-5 bg-green-100 rounded'>#{rating.name}</button>)
        //             }
        //         </h4>
        //         <div className='border border-t-0 border-gray-400'></div>
        //         <div className='space-y-4'>
        //             <p>Number of Pages: </p>
        //             <p>Publisher: </p>
        //             <p>Year of Publishing: </p>
        //             <p>Rating: {ratingAvg}</p>
        //         </div>
        //         <div className='flex gap-4'>
        //             <button onClick={() => handleMarkAsRead(id)} className='btn btn-outline'>Mark as Read</button>
        //             <button className='btn btn-primary'>Add to Wishlist</button>
        //         </div>
        //     </div>

        // </div>
    );
};

export default AppDetails;