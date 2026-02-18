import React from "react";
import { Link } from "react-router-dom";
import {
  CalenderIcon,
  Facebook,
  InstaIcon,
  LinkedIn,
  LocationIcon,
  Twitter,
} from "../../icons/Icons";
import { motion } from "framer-motion";

const footerParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const footerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const iconHover = {
  hover: {
    scale: 1.3,
    rotate: 5,
    transition: { type: "spring", stiffness: 300 },
  },
};

const Footer = () => {
  return (
    <motion.div
      className="relative w-full bg-[#1d1e5d] p-8 flex flex-wrap justify-around flex-col lg:flex-row"
      variants={footerParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4 }}
    >
      {/* 🔥 Gradient Top Border */}
      <div
        className="absolute top-0 left-0 w-full h-px 
      bg-linear-to-r from-blue-500 via-[#ffa343] to-red-500"
      ></div>

      {/* Logo */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
        <motion.div
          className="flex gap-4 justify-center items-center bg-white p-4 my-4 rounded-2xl"
          variants={footerItem}
        >
          <div className="p-4">
            <img src="/logo.png" alt="logo" className="w-60" />
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-8 my-4 flex flex-col justify-center items-center"
          variants={footerItem}
        >
          <motion.div className="flex gap-2 items-center">
            <LocationIcon color="#9E0024" width="18" height="18" />
            <p className="text-[#9E0024] text-xl font-semibold">Venue</p>
          </motion.div>
          <p className="ml-6 text-xl font-semibold text-blue-900">
            IIT(ISM) Dhanbad
          </p>
          <motion.div className="flex gap-2 items-center">
            <CalenderIcon color="#9E0024" width="18" height="18" />
            <p className="text-[#9E0024] text-xl font-semibold">
              April 6-7th, 2026
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Column 1 */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-16">
        <motion.div className="flex flex-col my-4" variants={footerItem}>
          <p className="text-2xl text-[#ffa343] font-semibold">
            Important Links
          </p>
          <div className="text-white text-sm lg:text-lg">Home</div>
          <div className="text-white text-sm lg:text-lg">R&D Innovations</div>
          <div className="text-white text-sm lg:text-lg">Contact</div>
        </motion.div>

        {/* Social Icons */}
        <motion.div className="flex flex-col gap-2 my-4" variants={footerItem}>
          <p className="text-2xl text-[#ffa343] font-semibold">Social Media</p>
          <div className="flex gap-4">
            <motion.div
              variants={iconHover}
              whileHover="hover"
              className="flex items-center justify-center"
            >
              <a
                href="https://x.com/iinventiv2026"
                target="_blank"
                rel="noopener noreferrer"
                className="
      w-10 h-10 sm:w-11 sm:h-11
      flex items-center justify-center
      bg-white rounded-full
      shadow-md
      border border-blue-200
      cursor-pointer
      transition-all duration-300
      hover:shadow-lg hover:scale-110
      active:scale-95
    "
              >
                <Twitter color="#000000" width={20} height={20} />
              </a>
            </motion.div>

            <motion.div
              variants={iconHover}
              whileHover="hover"
              className="flex items-center justify-center"
            >
              <a
                href="https://www.facebook.com/people/IInvenTiv-2026/61586354344750/?sk=about"
                target="_blank"
                rel="noopener noreferrer"
                className="
      w-10 h-10 sm:w-11 sm:h-11
      flex items-center justify-center
      bg-white rounded-full
      shadow-md
      border border-blue-200
      cursor-pointer
      transition-all duration-300
      hover:shadow-lg hover:scale-110
      active:scale-95
    "
              >
                <Facebook color="#1A73E8" width={20} height={20} />
              </a>
            </motion.div>

            <motion.div
              variants={iconHover}
              whileHover="hover"
              className="flex items-center justify-center"
            >
              <a
                href="https://www.linkedin.com/company/iinventiv-2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="
      w-10 h-10 sm:w-11 sm:h-11
      flex items-center justify-center
      bg-white rounded-full
      shadow-md
      border border-blue-200
      cursor-pointer
      transition-all duration-300
      hover:shadow-lg hover:scale-110
      active:scale-95
    "
              >
                <LinkedIn color="#1A73E8" width={20} height={20} />
              </a>
            </motion.div>
            <motion.div
              variants={iconHover}
              whileHover="hover"
              className="flex items-center justify-center"
            >
              <a
                href="https://www.instagram.com/iinventiv2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="
      w-10 h-10 sm:w-11 sm:h-11
      flex items-center justify-center
      bg-white rounded-full
      shadow-md
      border border-blue-200
      cursor-pointer
      transition-all duration-300
      hover:shadow-lg hover:scale-110
      active:scale-95
    "
              >
                <InstaIcon  width={36} height={24} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
