import React from "react";
import { Link } from "react-router-dom";
import { Facebook, LinkedIn, Twitter } from "../../icons/Icons";

const Footer = () => {
  return (
    <div className="w-full bg-[#1d1e5d] border-t border-t-slate-400 p-4 lg:p-40 flex justify-between flex-col lg:flex-row">
      <div className="flex gap-4 justify-between items-center bg-white p-4">
        <div className="p-4">
          <img src="/logo.png" alt="logo" className="w-60" />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-2xl text-[#ffa343] font-semibold">Important Links</p>
        <Link className="text-white text-sm lg:text-lg">Home</Link>
        <Link className="text-white text-sm lg:text-lg">R&D Showcase</Link>
        <Link className="text-white text-sm lg:text-lg">Program Summary</Link>
      </div>
      <div className="flex flex-col">
        <p className="text-2xl text-[#ffa343] font-semibold">Important Links</p>
        <Link className="text-white text-sm lg:text-lg">Collaboration</Link>
        <Link className="text-white text-sm lg:text-lg">Events & Workshop</Link>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-2xl text-[#ffa343] font-semibold">Social Links</p>
        <div className="flex gap-4">
          <Twitter color="#fff" width="20" height="20" />
          <Facebook color="#fff" width="20" height="20" />
          <LinkedIn color="#fff" width="20" height="20" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
