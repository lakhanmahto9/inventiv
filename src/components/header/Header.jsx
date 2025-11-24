import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Facebook, LinkedIn, MenuIcon, MoonIcon, SunIcon, Twitter } from "../../icons/Icons";
import Sidebar from "../drawer/Sidebar";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDark } from "../../store/darkSlice";

const Header = () => {
  // const dark = useSelector((state) => state.dark.dark);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const darkHandle = () => {

  }
  return (
    <div
      className={`sticky top-0 z-50 w-full transition-all duration-500 
    ${isScrolled ? "bg-[#f0ddab] opacity-100 dark:bg-[#18254f] dark:border-b-gray-500   border-b border-b-amber-50" : "bg-[#f0ddab] dark:bg-[#18254f] "}
  `}
    >
      <div className="flex items-center justify-between w-full px-4">

        <div className="p-4 dark:bg-white">
          <img src="/logo.png" alt="Logo" className="w-40 sm:w-60" />
        </div>

        <div className="text-white hidden lg:flex gap-8 font-semibold items-center">
          <div className="cursor-pointer" onClick={() => dispatch(setDark())}>
            {/* {dark ? <MoonIcon color={"#000000"} width={18} height={18} /> : <SunIcon color={"#000000"} width={18} height={18} />} */}
          </div>
          <Link className="text-black dark:text-white" to={"/"}>Home</Link>
          <Link className="text-black dark:text-white" to={"/showcase"}>R&D Showcase</Link>
          <div className="relative inline-block text-left">
            <button className="text-black dark:text-white cursor-pointer" onClick={() => setOpen(!open)}>
              Hosts
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-60 bg-[#f5ce6d] dark:bg-[#09153f] shadow-lg rounded-lg p-2 z-50">
                <ul className="space-y-2">
                  <li onClick={() => navigate("/hosts/kharagpur/1")} className="hover:bg-gray-100 dark:hover:bg-[#18254f] text-black dark:text-white px-2 py-1 rounded cursor-pointer">
                    IIT KHARAGPUR
                  </li>
                  <li onClick={() => navigate("/hosts/varanasi/2")} className="hover:bg-gray-100 dark:hover:bg-[#18254f] text-black dark:text-white px-2 py-1 rounded cursor-pointer">
                    IIT(BHU) VARANASI
                  </li>
                  <li onClick={() => navigate("/hosts/dhanbad/3")} className="hover:bg-gray-100 dark:hover:bg-[#18254f] text-black dark:text-white px-2 py-1 rounded cursor-pointer">
                    IIT(ISM) DHANBAD
                  </li>
                  <li onClick={() => navigate("/hosts/patna/4")} className="hover:bg-gray-100 dark:hover:bg-[#18254f] text-black dark:text-white px-2 py-1 rounded cursor-pointer">
                    IIT PATNA
                  </li>
                  <li onClick={() => navigate("/hosts/bhubaneswar/5")} className="hover:bg-gray-100 dark:hover:bg-[#18254f] text-black dark:text-white px-2 py-1 rounded cursor-pointer">
                    IIT BHUBANESWAR
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link className="text-black dark:text-white" to={"/contact"}>Contact</Link>
        </div>

        {/* Sidebar for mobile */}
        <div className="block lg:hidden">
          <Sidebar />
        </div>
      </div>
    </div>

  );
};

export default Header;
