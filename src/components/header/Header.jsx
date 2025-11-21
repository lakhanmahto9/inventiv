import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Facebook,
  LinkedIn,
  MenuIcon,
  MoonIcon,
  SunIcon,
  Twitter,
} from "../../icons/Icons";
import Sidebar from "../drawer/Sidebar";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDark } from "../../store/darkSlice";

const Header = () => {
  const dark = useSelector((state) => state.dark.dark);
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

  const darkHandle = () => {};
  return (
      <div
        className={`sticky top-0 z-50 w-full transition-all duration-500
      ${isScrolled ? "bg-[#f0ddab] opacity-100 border-b border-b-amber-50" : "bg-[#f0ddab] opacity-90"}
    `}
      >
    {/* <div
      className={`sticky top-0 z-50 w-full transition-all duration-500 
    ${
      isScrolled
        ? dark
          ? "bg-[#18254f] border-b border-b-gray-700" // dark + scrolled
          : "bg-[#f0ddab] border-b border-b-amber-50" // light + scrolled
        : dark
        ? "bg-[#18254f]" // dark + not scrolled
        : "bg-[#f0ddab] opacity-90" // light + not scrolled
    }
  `}
    > */}
      <div className="flex items-center justify-between w-full px-4">
        {/* <div className="p-4">
          <img src="/logo.png" alt="Logo" className="w-40 sm:w-60" />
        </div> */}

        <div className="dark:bg-white">
          <img src="/logo.png" alt="Logo" className="w-40 sm:w-60" />
        </div>

        <div className="text-white hidden lg:flex gap-8 font-semibold items-center">
          {/* <div className="cursor-pointer" onClick={() => dispatch(setDark())}>
            {dark ? (
              <MoonIcon
                color= "#000000"
                width={18}
                height={18}
              />
            ) : (
              <SunIcon
                color={dark ? "#fff" : "#000000"}
                width={18}
                height={18}
              />
            )}
          </div> */}
          <Link className={dark ? "#fff" : "text-black"} to={"/"}>
            Home
          </Link>
          <Link className={dark ? "#fff" : "text-black"} to={"/showcase"}>
            R&D Showcase
          </Link>
          <div className="relative inline-block text-left">
            <button
              className={`${dark ? "text-white" : "text-black"} cursor-pointer`}
              onClick={() => setOpen(!open)}
            >
              Hosts
            </button>

            {open && (
              <div
                className={`absolute right-0 mt-2 w-60  shadow-lg rounded-lg p-2 z-50 ${
                  dark ? "bg-[#09153f]" : "bg-[#f5ce6d]"
                }`}
              >
                <ul className="space-y-2">
                  <li
                    onClick={() => navigate("/hosts/kharagpur/1")}
                    className={`
                      px-2 py-1 rounded cursor-pointer 
                       ${
                         dark
                           ? "text-white hover:bg-[#18254f]"
                           : "text-black hover:bg-gray-100"
                       }
                      `}
                  >
                    IIT KHARAGPUR
                  </li>
                  <li
                    onClick={() => navigate("/hosts/varanasi/2")}
                    className={`
                      px-2 py-1 rounded cursor-pointer 
                       ${
                         dark
                           ? "text-white hover:bg-[#18254f]"
                           : "text-black hover:bg-gray-100"
                       }
                      `}
                  >
                    IIT(BHU) VARANASI
                  </li>
                  <li
                    onClick={() => navigate("/hosts/dhanbad/3")}
                    className={`
                      px-2 py-1 rounded cursor-pointer 
                       ${
                         dark
                           ? "text-white hover:bg-[#18254f]"
                           : "text-black hover:bg-gray-100"
                       }
                      `}
                  >
                    IIT(ISM) DHANBAD
                  </li>
                  <li
                    onClick={() => navigate("/hosts/patna/4")}
                    className={`
                      px-2 py-1 rounded cursor-pointer 
                       ${
                         dark
                           ? "text-white hover:bg-[#18254f]"
                           : "text-black hover:bg-gray-100"
                       }
                      `}
                  >
                    IIT PATNA
                  </li>
                  <li
                    onClick={() => navigate("/hosts/bhubaneswar/5")}
                    className={`
                      px-2 py-1 rounded cursor-pointer 
                       ${
                         dark
                           ? "text-white hover:bg-[#18254f]"
                           : "text-black hover:bg-gray-100"
                       }
                      `}
                  >
                    IIT BHUBANESWAR
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link
            className={`${dark ? "text-white" : "text-black"}`}
            to={"/contact"}
          >
            Contact
          </Link>
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
