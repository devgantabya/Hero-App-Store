import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utilities/storeDataInLocal';

const AppDetails = () => {
    const { id } = useParams();
    const singleAppId = parseInt(id);
    const data = useLoaderData();

    const singleApp = data.find((app) => app.id === singleAppId)

    const { image, companyName, description, ratingAvg, ratings, title } = singleApp;


    const handleMarkAsRead = id => {
        addToStoredDB(id);
    }


    return (
        <div className='flex justify-between items-center gap-10 w-full'>
            <div className='w-1/2 p-20 bg-gray-100 rounded-2xl'>
                <img className='object-cover' src={image} alt={title} />
            </div>
            <div className='w-1/2 space-y-4'>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <p className='font-medium text-xl'>By: {companyName}</p>
                <div className='border border-t-0 border-gray-400'></div>
                <p className='font-medium text-xl'></p>
                <div className='border border-t-0 border-gray-400'></div>
                <p className=''><span className='font-bold'>Review: </span>{description}</p>
                <h4 className='font-bold'><span className='mr-5'>Tag</span>
                    {
                        ratings.map((rating) => <button className='text-green-400 px-2 py-1 mx-5 bg-green-100 rounded'>#{rating.name}</button>)
                    }
                </h4>
                <div className='border border-t-0 border-gray-400'></div>
                <div className='space-y-4'>
                    <p>Number of Pages: </p>
                    <p>Publisher: </p>
                    <p>Year of Publishing: </p>
                    <p>Rating: {ratingAvg}</p>
                </div>
                <div className='flex gap-4'>
                    <button onClick={() => handleMarkAsRead(id)} className='btn btn-outline'>Mark as Read</button>
                    <button className='btn btn-primary'>Add to Wishlist</button>
                </div>
            </div>

        </div>
    );
};

export default AppDetails;