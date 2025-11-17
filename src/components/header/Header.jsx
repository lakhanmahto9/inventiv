import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, LinkedIn, MenuIcon, Twitter } from "../../icons/Icons";
import Sidebar from "../drawer/Sidebar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="sm:relative w-full">
      <div
        className={`sticky sm:fixed top-0 z-50 w-full gap-2 lg:gap-0 flex justify-between items-center sm:px-4 transition-all duration-500 ${isScrolled ? "bg-[#f0ddab] opacity-100 border-b border-b-amber-50" : "bg-[#f0ddab] opacity-90"
          }`}
      >
        <div className="flex gap-2 lg:gap-4 justify-between items-center">
          <div className="p-4">
            <img src="logo.png" alt="" className="w-40 sm:w-60" />
          </div>

        </div>
        <div className="text-white hidden lg:flex gap-8 font-semibold">
          <Link className="text-black" to={"/"}>
            Home
          </Link>
          <Link className="text-black" to={"/showcase"}>
            R&D Showcase
          </Link>
          <div className="relative inline-block text-left">
            <button
              className="text-black cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              Hosts
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-60 bg-[#f5ce6d] shadow-lg rounded-lg p-2 z-50">
                <ul className="space-y-2">
                  <li className="hover:bg-gray-100 text-black px-2 py-1 rounded cursor-pointer">
                    IIT KHARAGPUR
                  </li>
                  <li className="hover:bg-gray-100 text-black px-2 py-1 rounded cursor-pointer">
                    IIT (ISM) DHANBAD
                  </li>
                  <li className="hover:bg-gray-100 text-black px-2 py-1 rounded cursor-pointer">
                    IIT (BHU) VARANASI
                  </li>
                  <li className="hover:bg-gray-100 text-black px-2 py-1 rounded cursor-pointer">
                    IIT PATNA
                  </li>
                  <li className="hover:bg-gray-100 text-black px-2 py-1 rounded cursor-pointer">
                    IIT BHUBANESWAR
                  </li>

                </ul>
              </div>
            )}
          </div>
          <Link className="text-black" to={"/contact"}>
            Contact
          </Link>
          {/* <div className="flex gap-4">
            <Twitter color="#0E8AE9" width="20" height="20" />
            <Facebook color="#0866FF" width="20" height="20" />
            <LinkedIn color="#0E8AE9" width="20" height="20" />
          </div> */}

        </div>
        <div className="block lg:hidden">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Header;
