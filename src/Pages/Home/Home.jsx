import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TrendingApps from '../TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';
import Statistics from '../Statistics/Statistics';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Statistics></Statistics>
            <TrendingApps data={data}></TrendingApps>
        </div>
    );
};

export default Home;