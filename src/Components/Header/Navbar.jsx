import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = (
    <>
      <li className="mx-2" onClick={() => setMenuOpen(false)}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-base font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-white ${
              isActive
                ? "text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] after:content-[''] after:absolute after:left-0 after:-bottom-0 after:w-full after:h-[2px] after:bg-gradient-to-br after:from-[#632EE3] after:to-[#9F62F2]"
                : "text-black"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li className="mx-2" onClick={() => setMenuOpen(false)}>
        <NavLink
          to="/all-apps"
          className={({ isActive }) =>
            `text-base font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-white ${
              isActive
                ? "text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] after:content-[''] after:absolute after:left-0 after:-bottom-0 after:w-full after:h-[2px] after:bg-gradient-to-br after:from-[#632EE3] after:to-[#9F62F2]"
                : "text-black"
            }`
          }
        >
          Apps
        </NavLink>
      </li>
      <li className="mx-2" onClick={() => setMenuOpen(false)}>
        <NavLink
          to="/installed-apps"
          className={({ isActive }) =>
            `text-base font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-white ${
              isActive
                ? "text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-br after:from-[#632EE3] after:to-[#9F62F2]"
                : "text-black"
            }`
          }
        >
          Installation
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-white relative">
      <div className="flex justify-between items-center py-6 container mx-auto relative z-50">
        <div className="navbar-start">
          <button
            className="btn  lg:hidden bg-white border-0 shadow-none hover:bg-white hover:border-0 hover:shadow-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black hover:bg-white hover:border-0 hover:shadow-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </button>

          <Link
            to="/"
            className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2] flex items-center gap-1"
          >
            <img className="h-10 w-10" src={logo} alt="Logo" />
            <span>HERO.IO</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          <Link
            to="https://github.com/devgantabya"
            className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-2 px-4 text-white rounded text-base font-semibold flex items-center gap-2 mr-4 md:mr-0"
          >
            <span>
              <FaGithub className="w-5 h-5" />
            </span>
            <span>Contribute</span>
          </Link>
        </div>
      </div>
      {menuOpen && (
        <ul className="menu menu-sm bg-white rounded-box p-2 shadow absolute top-full left-0 z-40">
          {links}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
