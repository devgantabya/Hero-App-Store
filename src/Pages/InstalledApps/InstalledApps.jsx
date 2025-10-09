import React, { useState, useEffect, useRef } from "react";
import { useLoaderData } from "react-router";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InstalledApps = () => {
  const allApps = useLoaderData();

  const [installedApps, setInstalledApps] = useState([]);

  const [sort, setSort] = useState("");

  const dropdownRef = useRef(null);

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(storedApps);
  }, []);

  const handleUninstall = (appId) => {
    const numericId = Number(appId);
    const updatedApps = installedApps.filter((id) => id !== numericId);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));

    const app = allApps.find((a) => a.id === appId);
    toast.info(`${app?.title || "App"} has been uninstalled`, {
      position: "top-right",
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "colored",
    });
  };

  const handleSort = (type) => {
    setSort(type);

    if (dropdownRef.current) {
      dropdownRef.current.removeAttribute("open");
    }

    const installedAppsData = allApps.filter((app) =>
      installedApps.includes(app.id)
    );

    const parseSize = (size) => parseFloat(size);

    let sortedData = [];

    if (type === "High-Low") {
      sortedData = [...installedAppsData].sort(
        (a, b) => parseSize(b.size) - parseSize(a.size)
      );
      console.log("Clicked High-Low");
    }

    if (type === "Low-High") {
      sortedData = [...installedAppsData].sort(
        (a, b) => parseSize(a.size) - parseSize(b.size)
      );
      console.log("Clicked Low-High");
    }

    setInstalledApps(sortedData.map((app) => app.id));
  };

  const installedAppsData = allApps
    .filter((app) => installedApps.includes(app.id))
    .sort((a, b) => installedApps.indexOf(a.id) - installedApps.indexOf(b.id));
  return (
    <div className="container mx-auto pb-15 px-4 md:px-0">
      <h1 className="text-4xl md:text-5xl text-[#001931] font-bold text-center py-5 mt-5 md:mt-20">
        Your Installed Apps
      </h1>
      <p className="text-[#627382] text-xl text-center py-5 pb-10">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center px-4 md:px-0">
        <div className="py-5">
          <h3 className="text-[#001931] text-2xl font-semibold">
            ({installedApps.length}) Apps Found
          </h3>
        </div>
        <details className="dropdown" ref={dropdownRef}>
          <summary className="btn m-1">
            {sort
              ? `Sort by size: ${
                  sort === "High-Low" ? "High to Low" : "Low to High"
                }`
              : "Sort by size"}
            <FaCaretDown />
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("High-Low")}>High-Low</a>
            </li>
            <li>
              <a onClick={() => handleSort("Low-High")}>Low-High</a>
            </li>
          </ul>
        </details>
      </div>

      {installedAppsData.length === 0 ? (
        <p className="text-center py-20">No apps installed yet.</p>
      ) : (
        installedAppsData.map((app) => (
          <div
            key={app.id}
            className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded mb-4"
          >
            <div>
              <div className="flex items-center gap-3 ">
                <img className="w-20 h-20" src={app.image} alt="" />
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold">{app.title}</h2>
                  <div className="flex items-center gap-4">
                    <div className="text-[#00D390] text-base font-medium flex items-center gap-1">
                      <FiDownload />
                      <span>{app.downloads}</span>
                    </div>

                    <div className="text-[#FF8811] text-base flex items-center gap-1">
                      <FaStar />
                      <span>{app.ratingAvg}</span>
                    </div>
                    <div className="text-[#627382] text-base">
                      <span>{app.size}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleUninstall(app.id)}
              className="bg-[#00D390] text-white px-4 py-2 w-full md:w-auto font-semibold rounded self-end md:self-center"
            >
              Uninstall
            </button>
          </div>
        ))
      )}
      <ToastContainer />
    </div>
  );
};

export default InstalledApps;
