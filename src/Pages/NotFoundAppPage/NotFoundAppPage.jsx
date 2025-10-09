import React from "react";
import errorAppImg from "../../assets/App-Error.png";
import { Link } from "react-router";

const NotFoundAppPage = () => {
  return (
    <div>
      <div className="px-4 py-10 md:py-20 md:px-20 flex justify-center items-center bg-[#f5f5f5]">
        <div className="text-center space-y-4">
          <img
            src={errorAppImg}
            alt="404 - App Not Found"
            className="w-full h-full md:w-1/2 md:h-auto mx-auto"
          />
          <h1 className="text-[#001931] font-semibold text-3xl md:text-5xl mt-10 uppercase">
            OPPS!! App not found
          </h1>
          <p className="text-[#627382] text-xl py-4">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <Link
            to="/all-apps"
            className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-2 px-4 text-white rounded text-base font-semibold"
          >
            <button>Go Back!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundAppPage;
