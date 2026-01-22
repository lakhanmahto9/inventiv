import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { logos } from "../../utils/logo";
import { motion, useInView } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

  const settings = {
  infinite: true,
  speed: 700,          // slide animation duration
  slidesToShow: 3,     // show 3 cards
  slidesToScroll: 1,   // move ONE card at a time
  autoplay: true,
  autoplaySpeed: 3000, // wait 3 seconds before sliding
  cssEase: "ease-in-out",
  arrows: false,
  dots: false,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


  return (
    <Layout>
      <div className="w-full flex flex-col bg-[#1d1e5d]">
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          stopOnHover={false}
          swipeable
          emulateTouch
        >
          {[
            "/imgi_5_iitism_banner_new.gif",
            "/benner020.JPG",
            "/benner030.jpg",
            "/benner040.JPG",
            "/benner050.JPG",
            "/benner06.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="h-auto lg:h-[890px] w-full flex items-center justify-center"
            >
              <img
                src={src}
                alt="Banner"
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </Carousel>

        <div className="p-4 lg:p-16 bg-[#1d1e5d]">
          <motion.p
            className="text-2xl lg:text-5xl font-bold text-[#ffa343] mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Message from five organising Directors
          </motion.p>

          <div className="relative rounded-2xl p-px overflow-hidden">
            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500 via-[#ffa343] to-red-500"></div>

            <div className="relative bg-[#1d1e5d] rounded-2xl p-6">
              <Slider {...settings}>
                {/* CARD 1 */}
                <div className="px-3">
                  <div className="bg-white rounded-2xl p-5 h-full flex gap-4">
                    <img
                      src="/director_iitdhanbad.jpg"
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <p className="font-bold text-sm">Prof. Sukumar Mishra</p>
                      <p className="text-xs text-[#9B0225] text-justify mt-1">
                        Earth Sciences play a vital role in resource
                        sustainability, climate resilience, and energy security.
                        As the host institute, IIT (ISM) Dhanbad is honoured to
                        lead the Earth Sciences theme at IInvenTiv 2026. We aim
                        to highlight innovations in geosciences, mining, and
                        environmental engineering that support responsible
                        development and national priorities.
                      </p>
                      <p className="text-xs font-semibold text-right mt-2">
                        Director, IIT (ISM) Dhanbad
                      </p>
                      <small className="text-[10px] font-semibold text-right block">
                        (Theme: Earth Science)
                      </small>
                    </div>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="px-3">
                  <div className="bg-white rounded-2xl p-5 h-full flex gap-4">
                    <img
                      src="/director_iitkharagpur.png"
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <p className="font-bold text-sm">
                        Prof. Suman Chakraborty
                      </p>
                      <p className="text-xs text-[#9B0225] text-justify mt-1">
                        Healthcare innovation is no longer optional, but rather
                        imperative for human dignity, resilience, and equity. At
                        IIT Kharagpur, we view healthcare as a grand convergence
                        of engineering, medicine, data, and societal need. By
                        anchoring the Healthcare theme at IInvenTiv 2026, we
                        reaffirm our commitment to translational innovation that
                        moves decisively from laboratory insight to bedside
                        impact. We invite partners across academia, industry,
                        and policy to co-create affordable, scalable, and
                        globally relevant healthcare solutions that can redefine
                        access, outcomes, and quality of life for billions.
                      </p>
                      <p className="text-xs font-semibold text-right mt-2">
                        Director, IIT Kharagpur
                      </p>
                      <small className="text-[10px] font-semibold text-right block">
                        (Theme: Healthcare)
                      </small>
                    </div>
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="px-3">
                  <div className="bg-white rounded-2xl p-5 h-full flex gap-4">
                    <img
                      src="/director_iitbhu.jpeg"
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <p className="font-bold text-sm">Prof. Amit Patra</p>
                      <p className="text-xs text-[#9B0225] text-justify mt-1">
                        Advanced materials form the backbone of modern
                        technology and sustainable development. IIT (BHU)
                        Varanasi is proud to lead the Materials Science theme at
                        IInvenTiv 2026, showcasing innovations spanning energy,
                        infrastructure, manufacturing, and advanced functional
                        materials. We anticipate strong collaboration between
                        academia and industry to translate fundamental research
                        into impactful real-world applications.
                      </p>
                      <p className="text-xs font-semibold text-right mt-2">
                        Director, IIT (BHU) Varanasi
                      </p>
                      <small className="text-[10px] font-semibold text-right block">
                        (Theme: Materials Science)
                      </small>
                    </div>
                  </div>
                </div>

                {/* CARD 4 */}
                <div className="px-3">
                  <div className="bg-white rounded-2xl p-5 h-full flex gap-4">
                    <img
                      src="/iit-patna-director.jpg"
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <p className="font-bold text-sm">
                        Prof. Trilok Nath Singh
                      </p>
                      <p className="text-xs text-[#9B0225] text-justify mt-1">
                        Artificial Intelligence is transforming industries,
                        governance, and society at large. IIT Patna is delighted
                        to anchor the Artificial Intelligence theme at IInvenTiv
                        2026, promoting responsible, scalable, and impactful AI
                        solutions. We look forward to engaging with industry and
                        global partners to demonstrate how AI-driven innovation
                        can address complex societal and industrial challenges.
                      </p>
                      <p className="text-xs font-semibold text-right mt-2">
                        Director, IIT Patna
                      </p>
                      <small className="text-[10px] font-semibold text-right block">
                        (Theme: Artificial Intelligence)
                      </small>
                    </div>
                  </div>
                </div>

                {/* CARD 5 */}
                <div className="px-3">
                  <div className="bg-white rounded-2xl p-5 h-full flex gap-4">
                    <img
                      src="/director_iitbhuneswar.jpg"
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <p className="font-bold text-sm">
                        Prof. Shreepad Karmalkar
                      </p>
                      <p className="text-xs text-[#9B0225] text-justify mt-1">
                        Semiconductor technology is foundational to digital
                        sovereignty and technological leadership. IIT
                        Bhubaneswar is proud to lead the Semiconductor
                        Technology and Chip Design theme at IInvenTiv 2026,
                        aligned with India’s Semiconductor Mission. We seek to
                        foster innovation across design, fabrication, packaging
                        and systems, strengthening India’s position in the
                        global semiconductor ecosystem.
                      </p>
                      <p className="text-xs font-semibold text-right mt-2">
                        Director, IIT Bhubaneswar
                      </p>
                      <small className="text-[10px] font-semibold text-right block">
                        (Theme: Semiconductor Technology & Chip Design)
                      </small>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>

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
