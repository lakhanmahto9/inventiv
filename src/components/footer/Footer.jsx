

import React from "react";
import { Link } from "react-router-dom";
import { Facebook, LinkedIn, Twitter } from "../../icons/Icons";
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
  className="relative w-full bg-[#1d1e5d] p-8 lg:p-20 xl:p-40 flex justify-between flex-col lg:flex-row"
  variants={footerParent}
  initial="hidden"
  whileInView="visible"
  viewport={{ amount: 0.4 }}
>
  {/* 🔥 Gradient Top Border */}
  <div className="absolute top-0 left-0 w-full h-px 
      bg-linear-to-r from-blue-500 via-[#ffa343] to-red-500"></div>

      {/* Logo */}
      <motion.div
        className="flex gap-4 justify-between items-center bg-white p-4 my-4"
        variants={footerItem}
      >
        <div className="p-4">
          <img src="/logo.png" alt="logo" className="w-60" />
        </div>
      </motion.div>

      {/* Column 1 */}
      <motion.div className="flex flex-col my-4" variants={footerItem}>
        <p className="text-2xl text-[#ffa343] font-semibold">Important Links</p>
        <Link className="text-white text-sm lg:text-lg">Home</Link>
        <Link className="text-white text-sm lg:text-lg">R&D Showcase</Link>
        <Link className="text-white text-sm lg:text-lg">Program Summary</Link>
      </motion.div>

      {/* Column 2 */}
      <motion.div className="flex flex-col my-4" variants={footerItem}>
        <p className="text-2xl text-[#ffa343] font-semibold">Important Links</p>
        <Link className="text-white text-sm lg:text-lg">Collaboration</Link>
        <Link className="text-white text-sm lg:text-lg">Events & Workshop</Link>
      </motion.div>

      {/* Social Icons */}
      <motion.div className="flex flex-col gap-2 my-4" variants={footerItem}>
        <p className="text-2xl text-[#ffa343] font-semibold">Social Media</p>
        <div className="flex gap-4">
          <motion.div variants={iconHover} whileHover="hover">
            <Twitter color="#fff" width="20" height="20" />
          </motion.div>

          <motion.div variants={iconHover} whileHover="hover">
            <Facebook color="#fff" width="20" height="20" />
          </motion.div>

          <motion.div variants={iconHover} whileHover="hover">
            <LinkedIn color="#fff" width="20" height="20" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;

