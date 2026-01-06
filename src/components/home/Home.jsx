import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";
import { logos } from "../../utils/logo";
import { motion, useInView } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";
import { useRef } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  const [active, setActive] = useState("iit");
  const [error, setError] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const goOnline = () => {
      setIsOnline(true);
      setError(null);
    };

    const goOffline = () => {
      setIsOnline(false);
      setError("You are offline! Unable to load institutes.");
    };

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  const handleTab = (tab) => {
    if (!isOnline) {
      setError("No Internet Connection! Cannot load this tab.");
      return;
    }

    setError(null); // clear errors
    setActive(tab);
  };

  const handleClick = (index) => {
    if (window.innerWidth < 1024) {
      setActiveIndex(index);
      setTimeout(() => setActiveIndex(null), 2000);
    }
  };

  const sortedItems =
    active === "top"
      ? [...logos[active]].sort((a, b) => a.name.localeCompare(b.name))
      : logos[active];

  const floatVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1], // smooth Apple-like curve
        bounce: 0.3,
      },
    },
  };

  const waveVariants = {
    initial: { y: 0 },
    animate: (index) => ({
      y: [0, -10, 0], // up → down → back to normal
      transition: {
        duration: 2.5,
        delay: index * 0.15, // creates wave ripple effect
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    }),
  };

  return (
    <Layout>
      <div className="w-full flex flex-col">
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          stopOnHover={false}
          swipeable={true}
          emulateTouch={true}
        >
          <img
            src="/imgi_5_iitism_banner_new.gif"
            alt="Banner"
            className="w-full h-auto object-contain"
          />
          <img
            src="/benner02.JPG"
            alt="Banner"
            className="w-full object-contain "
          />
          <img
            src="/benner03.jpg"
            alt="Banner"
            className="w-full object-contain "
          />
          <img
            src="/benner04.JPG"
            alt="Banner"
            className="w-full object-contain "
          />
          <img
            src="/benner05.JPG"
            alt="Banner"
            className="w-full object-contain "
          />
          <img
            src="/benner06.jpg"
            alt="Banner"
            className="w-full object-contain "
          />
        </Carousel>

        {/* <div className="p-4 lg:p-16 bg-[#1d1e5d]">
          <motion.p
            className="text-2xl lg:text-5xl font-bold text-[#ffa343]"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Thematic Areas & Coordinating Institutes
          </motion.p>

          <div className="relative w-full my-4 rounded-2xl p-px overflow-hidden">
            <div
              className="absolute inset-0 rounded-2xl 
               bg-linear-to-r from-blue-500 via-[#ffa343] to-red-500"
            ></div>

            <div
              className="relative w-full p-4 rounded-2xl 
              flex flex-wrap justify-center lg:justify-between gap-6 font-semibold text-center bg-[#1d1e5d]"
            >
                   
              {logos.theme.map((item, index) => (
                <motion.div
                  key={index}
                  variants={floatVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.4 }}
                  className="flex flex-col items-center"
                  onClick={() => navigate(item.link)}
                >
              
                  <div className="relative w-28 h-28 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-2xl overflow-hidden group">
            
                    <div
                      className="absolute inset-0 bg-cover bg-center md:opacity-80 object-cover group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundImage: `url(${item.logo})` }}
                    ></div>

                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>

                    <div className="absolute top-2 left-0 right-0 text-center">
                      <span className="text-white text-[8px] sm:text-sm lg:text-md xl:text-lg flex items-center justify-center font-semibold drop-shadow-md bg-black/40 px-2 py-1 rounded-md">
                        {item.themes}
                      </span>
                    </div>
                  </div>

                  <div className="text-white text-xs sm:text-base lg:text-lg mt-3 font-medium">
                    {item.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div> */}

        <div className="p-4 lg:p-16 bg-[#1d1e5d]">
          <motion.p
            className="text-2xl lg:text-5xl font-bold text-[#ffa343]"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Thematic Areas & Coordinating Institutes
          </motion.p>

          <div className="relative w-full my-4 rounded-2xl p-px overflow-hidden">
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500 via-[#ffa343] to-red-500"></div>

            {/* CONTENT CONTAINER */}
            <div
              className="
        relative w-full p-4 rounded-2xl bg-[#1d1e5d]

        /* Mobile & Tablet */
        grid grid-cols-2 gap-6

        /* Large screens */
        xl:flex xl:flex-nowrap xl:justify-between
      "
            >
              {logos.theme.map((item, index) => (
                <motion.div
                  key={index}
                  variants={floatVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.4 }}
                  onClick={() => navigate(item.link)}
                  className="
            flex flex-col items-center cursor-pointer

            /* 👇 center ONLY the 3rd card on small screens */
            [&:nth-child(3)]:col-span-2
            [&:nth-child(3)]:justify-self-center

            /* reset for xl+ */
            xl:col-span-1
          "
                >
                  {/* CARD */}
                  <div
                    className="
             relative

 

    /* Tablet */
    w-[clamp(9rem,18vw,20rem)]
    h-[clamp(9rem,18vw,20rem)]

    /* Desktop / Large */
    lg:w-[clamp(10rem,16vw,22rem)]
    lg:h-[clamp(10rem,16vw,22rem)]

    /* Ultra-wide */
    2xl:w-[clamp(12rem,14vw,24rem)]
    2xl:h-[clamp(12rem,14vw,24rem)]

    rounded-2xl overflow-hidden group
            "
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center md:opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundImage: `url(${item.logo})` }}
                    ></div>

                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>

                    <div className="absolute top-2 left-0 right-0 text-center">
                      <span className="text-white text-[8px] sm:text-sm lg:text-md xl:text-lg font-semibold drop-shadow-md bg-black/40 px-2 py-1 rounded-md">
                        {item.themes}
                      </span>
                    </div>
                  </div>

                  {/* TITLE */}
                  <div className="text-white text-xs sm:text-base lg:text-lg mt-3 font-medium text-center">
                    {item.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-white bg-[#1d1e5d] p-4 lg:p-16">
          <motion.p
            className="text-2xl lg:text-5xl font-bold text-[#ffa343]"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Potential Participating Institutes
          </motion.p>
          <div className="w-full flex items-center  gap-3 my-4 overflow-x-auto lg:overflow-x-visible scrollbar-hide">
            <button
              onClick={() => handleTab("iit")}
              type="button"
              className={`${
                active === "iit"
                  ? "bg-amber-500 text-white"
                  : "hover:text-amber-500"
              } px-4 py-3 shrink-0 cursor-pointer rounded-2xl font-semibold text-sm lg:text-lg `}
            >
              IISc + 23 IITs
            </button>

            <button
              onClick={() => handleTab("nit")}
              type="button"
              className={`${
                active === "nit"
                  ? "bg-amber-500 text-white"
                  : "hover:text-amber-500"
              } px-4 py-3 shrink-0 cursor-pointer rounded-2xl font-semibold text-sm lg:text-lg `}
            >
              IIEST + 31 NITs
            </button>
            <button
              onClick={() => handleTab("iiser")}
              type="button"
              className={`${
                active === "iiser"
                  ? "bg-amber-500 text-white"
                  : "hover:text-amber-500"
              } px-4 py-3 shrink-0 cursor-pointer rounded-2xl font-semibold text-sm lg:text-lg`}
            >
              7 IISERs
            </button>
            <button
              onClick={() => handleTab("top")}
              type="button"
              className={`${
                active === "top"
                  ? "bg-amber-500 text-white"
                  : "hover:text-amber-500"
              } px-4 py-3 shrink-0 cursor-pointer rounded-2xl font-semibold text-sm lg:text-lg`}
            >
              TOP 100 NIRF-Ranked Institutes
            </button>
          </div>

          {!error && (
            <div className="relative w-full rounded-2xl p-px overflow-hidden">
              <div
                className="absolute inset-0 rounded-2xl 
               bg-linear-to-r from-blue-500 via-[#ffa343] to-red-500"
              ></div>
              <div
                className="relative rounded-2xl w-full flex flex-wrap justify-center md:justify-start items-center 
              gap-2 p-1 sm:px-4 py-8 font-semibold text-2xl bg-[#1d1e5d]"
              >
                {sortedItems.map((item, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={waveVariants}
                    initial="initial"
                    animate="animate"
                    className="relative group flex justify-center sm:justify-normal"
                    onClick={() => handleClick(index)}
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52 
                   bg-[#eeeeee] rounded-2xl shadow-amber-50 p-4 
                     transition-transform duration-300 ease-in-out hover:scale-90"
                    />

                    <div
                      className={`
                     absolute bottom-full left-1/2 transform -translate-x-1/2
                    bg-white text-black text-sm px-3 py-1 rounded-md whitespace-nowrap shadow-md
                   transition-all duration-300
                    ${
                      activeIndex === index
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }
                    lg:group-hover:opacity-100 lg:pointer-events-auto
                  `}
                    >
                      {item.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          {error && (
            <div className="w-full bg-red-600 text-white p-3 rounded-md text-center font-semibold mb-4">
              {error}
            </div>
          )}
        </div>
        {/* <div className="p-4 lg:p-16 bg-[#1d1e5d]">
          <motion.p
            className="text-2xl lg:text-5xl font-bold text-[#ffa343]"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Organizing Institutes
          </motion.p>

          <div className="relative w-full my-4 rounded-2xl p-px">
            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500 via-[#ffa343] to-red-500"></div>
            <div
              className="relative w-full p-4 lg:p-8 px-4 md:px-20 rounded-2xl 
             flex flex-wrap justify-center items-center gap-4 font-semibold bg-[#1d1e5d]"
            >
              {logos.organizer.map((item, index) => {
                const animations = [
                  {
                    hidden: { x: -80, opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  },
                  {
                    hidden: { x: -80, opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  },
                  {
                    hidden: { scale: 0.3, opacity: 0 },
                    visible: { scale: 1, opacity: 1 },
                  },
                  {
                    hidden: { x: 80, opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  },
                  {
                    hidden: { x: 80, opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  },
                ];

                const ref = useRef(null);
                const inView = useInView(ref, { amount: 0.4 });

                return (
                  <motion.div
                    key={index}
                    ref={ref}
                    variants={animations[index]}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col justify-center items-center"
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-28 h-28 sm:w-48 sm:h-48 lg:w-60 lg:h-60 
                       bg-[#eeeeee] rounded-2xl shadow-amber-50 p-4 
                         transition-transform duration-300 ease-in-out hover:scale-90"
                    />

                    <div className="text-white text-xs sm:text-base lg:text-lg">
                      {item.name}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div> */}
        <div className="p-4 lg:p-16 bg-[#1d1e5d]">
          <motion.p
            className="text-2xl lg:text-5xl font-bold text-[#ffa343]"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Organizing Institutes
          </motion.p>

          {/* 🔥 Gradient Border Wrapper */}
          <div className="relative w-full my-4 rounded-2xl p-px overflow-hidden">
            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500 via-[#ffa343] to-red-500"></div>

            {/* CONTENT CONTAINER */}
            <div
              className="
        relative w-full rounded-2xl bg-[#1d1e5d]

        p-4 md:p-6 lg:p-8

        /* Mobile & Tablet */
        grid grid-cols-2 gap-6

        /* Desktop & above */
        xl:flex xl:flex-nowrap xl:justify-between xl:items-center
      "
            >
              {logos.organizer.map((item, index) => {
                const animations = [
                  {
                    hidden: { x: -80, opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  },
                  {
                    hidden: { x: -80, opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  },
                  {
                    hidden: { scale: 0.3, opacity: 0 },
                    visible: { scale: 1, opacity: 1 },
                  },
                  {
                    hidden: { x: 80, opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  },
                  {
                    hidden: { x: 80, opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  },
                ];

                const ref = useRef(null);
                const inView = useInView(ref, { amount: 0.4 });

                return (
                  <motion.div
                    key={index}
                    ref={ref}
                    variants={animations[index]}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="
              flex flex-col items-center justify-center cursor-pointer

              /* 👇 center ONLY the 3rd logo on small screens */
              [&:nth-child(3)]:col-span-2
              [&:nth-child(3)]:justify-self-center

              /* reset on large screens */
              xl:col-span-1
            "
                  >
                    {/* LOGO CARD */}
                    <div
                      className="
                bg-[#eeeeee] rounded-2xl shadow-md p-4
                transition-transform duration-300 ease-in-out hover:scale-95

                
            

                /* Tablet */
                w-[clamp(9rem,18vw,20rem)]
                h-[clamp(9rem,18vw,20rem)]

                /* Desktop */
                lg:w-[clamp(10rem,16vw,22rem)]
                lg:h-[clamp(10rem,16vw,22rem)]

                /* Ultra-wide */
                2xl:w-[clamp(12rem,14vw,24rem)]
                2xl:h-[clamp(12rem,14vw,24rem)]

                flex items-center justify-center
              "
                    >
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* NAME */}
                    <div className="text-white text-xs sm:text-base lg:text-lg mt-3 text-center font-medium">
                      {item.name}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
