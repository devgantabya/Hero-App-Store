import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import InsideAllApps from "../InsideAllApps/InsideAllApps";
import { CiSearch } from "react-icons/ci";
import Loader from "../../Components/Loader/Loader";

const AllApps = () => {
  const allAppData = useLoaderData();
  const [searchInputValue, setSearchInputValue] = useState("");
  const [filteredApps, setFilteredApps] = useState(allAppData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const result = allAppData.filter((app) =>
        app.title.toLowerCase().includes(searchInputValue.toLowerCase())
      );
      setFilteredApps(result);
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchInputValue, allAppData]);

  return (
    <div className="container mx-auto pb-15 px-4 md:px-0">
      <h1 className="text-4xl md:text-5xl text-[#001931] font-bold text-center py-5 mt-5 md:mt-20">
        Our All Applications
      </h1>
      <p className="text-[#627382] text-xl text-center pb-10">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center px-4 md:px-0 pb-5 md:pb-2">
        <div className="py-5">
          <h3 className="text-[#001931] text-2xl font-semibold">
            ({filteredApps.length}) Apps Found
          </h3>
        </div>
        <div className="relative w-full md:w-64">
          <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-2xl" />
          <input
            type="text"
            placeholder="Search apps"
            value={searchInputValue}
            onChange={(e) => setSearchInputValue(e.target.value)}
            className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <Loader></Loader>
        </div>
      ) : filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {filteredApps.map((insideApps, index) => (
            <InsideAllApps insideApps={insideApps} key={index}></InsideAllApps>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-2xl mt-10">
          No App Found
        </div>
      )}
    </div>
  );
};

export default AllApps;
