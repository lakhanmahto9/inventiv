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
  const [activeIndex, setActiveIndex] = useState(null);
  const [active, setActive] = useState("iit");
  const [error, setError] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const sliderRef = useRef(null);
  const [slides, setSlides] = useState(3);

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

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;

      if (w < 768) setSlides(1);
      else if (w < 1024) setSlides(1);
      else setSlides(1);
    };

    handleResize(); // ✅ run on first load
    window.addEventListener("resize", handleResize);

    // ✅ force slick update after resize set
    const timer = setTimeout(() => {
      sliderRef.current?.slickGoTo(0, true);
    }, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="home">
      <div className="w-full flex flex-col bg-[#1d1e5d] relative">
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
              className="h-auto lg:h-[890px] w-full flex items-center justify-center relative"
            >
              <img
                src={src}
                alt="Banner"
                className="h-full w-auto object-contain"
              />
              {/* <div className="absolute top-[35%] left-1/2 -translate-x-1/2 bg-[#f0ddab] w-[90%] md:w-1/2 p-2 md:p-3 text-sm md:text-lg font-semibold rounded-lg shadow-md border border-amber-400">
                <marquee behavior="scroll" direction="left" scrollamount="6">
                  📢 <span className="font-bold text-amber-900">Update:</span>{" "}
                  <span className="text-gray-800">
                    InvenTiv 2026 has been rescheduled and the new dates will be
                    announced soon.
                  </span>
                </marquee>
              </div> */}
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
            About IInvenTiv
          </motion.p>
          <div className="relative rounded-2xl p-px overflow-hidden">
            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500 via-[#ffa343] to-red-500"></div>
            <div className="relative bg-[#1d1e5d] rounded-2xl p-6 overflow-hidden">
              <p className="text-justify text-white">
                IInvenTiv is a flagship annual R&D fair organized by the
                Ministry of Education, Government of India, to showcase
                indigenous innovations and strengthen the research-to-technology
                ecosystem. Launched in 2022 at IIT Delhi as part of Azadi ka
                Amrit Mahotsav, it initially brought together all IITs and later
                expanded to include NITs, IISc, and leading universities. The
                platform bridges academia and industry by promoting technology
                transfer, commercialization, and collaborative innovation across
                priority sectors such as healthcare, energy, manufacturing,
                digital technologies, mobility, and infrastructure. IInvenTiv
                supports national initiatives like Make in India and Atmanirbhar
                Bharat, advancing India’s vision of self-reliance and
                innovation-led growth.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 lg:p-16 bg-[#1d1e5d]">
          <motion.p
            className="text-2xl lg:text-5xl font-bold text-[#ffa343] mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our Chief Guest
          </motion.p>
          <div className="relative rounded-2xl p-px overflow-hidden">
            <div className="w-full flex justify-center items-center">
              <section className="w-full bg-gradient-to-r from-indigo-50 via-white to-indigo-50 py-16 px-6">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                      Chief Guest
                    </h2>
                    <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
                  </div>

                  <div className="bg-white shadow-xl rounded-2xl overflow-hidden md:flex items-center">
                    {/* <div className="md:w-1/3 w-full p-4">
                      <img
                        src="/d-pradhan.jpg"
                        alt="Shree Dharmendra Pradhan Ji"
                        className="w-full h-full rounded-2xl object-cover"
                      />
                    </div> */}
                    <div className="md:w-2/3 w-full p-8 space-y-4">
                      <h3 className="text-2xl md:text-3xl font-semibold text-indigo-700">
                        Shri Dharmendra Pradhan
                      </h3>

                      <p className="text-gray-600 font-medium">
                        Hon’ble Minister of Education
                        <br />
                        Government of India
                      </p>

                      {/* <p className="text-gray-600 leading-relaxed">
                        We are privileged to welcome Shri Dharmendra Pradhan Ji,
                        Hon’ble Minister of Education, Government of India, as
                        the Chief Guest for our esteemed event. His leadership
                        and vision for advancing education, innovation, and
                        skill development continue to inspire millions across
                        the nation.
                      </p> */}

                      <div className="pt-4">
                        <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                          Chief Guest
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="p-4 lg:p-16 bg-[#1d1e5d] ">
          <motion.p
            className="text-2xl lg:text-5xl font-bold text-[#ffa343] mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Message from organizing Directors
          </motion.p>

          <div className="relative rounded-2xl p-px overflow-hidden">
            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500 via-[#ffa343] to-red-500"></div>

            <div className="relative bg-[#1d1e5d] rounded-2xl p-2 sm:p-6 overflow-hidden">
              <Slider ref={sliderRef} {...settings}>
                {/* CARD 1 */}
                <div className="px-3 w-full">
                  <div className="bg-white dark:bg-[#eeeeee] p-4 rounded-2xl h-full flex flex-col sm:flex-row gap-4">
                    <img
                      src="/director_iitdhanbad.jpg"
                      className="w-40 h-40 rounded-full"
                    />
                    <div>
                      <p className="font-bold text-lg">Prof. Sukumar Mishra</p>
                      <p className="text-md text-[#9B0225] text-justify mt-1">
                        Earth Sciences play a vital role in resource
                        sustainability, climate resilience, and energy security.
                        As the host institute, IIT (ISM) Dhanbad is honoured to
                        lead the Earth Sciences theme at IInvenTiv 2026. We aim
                        to highlight innovations in geosciences, mining, and
                        environmental engineering that support responsible
                        development and national priorities.
                      </p>
                      <p className="text-sm font-semibold text-right mt-2">
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
                  <div className="bg-white p-4 rounded-2xl h-full flex flex-col sm:flex-row gap-4">
                    <img
                      src="/director_iitkharagpur.png"
                      className="w-40 h-40 rounded-full"
                    />
                    <div>
                      <p className="font-bold text-xl">
                        Prof. Suman Chakraborty
                      </p>
                      <p className="text-md text-[#9B0225] text-justify mt-1">
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
                      <p className="text-sm font-semibold text-right mt-2">
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
                  <div className="bg-white p-4 rounded-2xl h-full flex flex-col sm:flex-row gap-4">
                    <img
                      src="/director_iitbhu.jpeg"
                      className="w-40 h-40 rounded-full"
                    />
                    <div>
                      <p className="font-bold text-lg">Prof. Amit Patra</p>
                      <p className="text-md text-[#9B0225] text-justify mt-1">
                        Advanced materials form the backbone of modern
                        technology and sustainable development. IIT (BHU)
                        Varanasi is proud to lead the Materials Science theme at
                        IInvenTiv 2026, showcasing innovations spanning energy,
                        infrastructure, manufacturing, and advanced functional
                        materials. We anticipate strong collaboration between
                        academia and industry to translate fundamental research
                        into impactful real-world applications.
                      </p>
                      <p className="text-sm font-semibold text-right mt-2">
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
                  <div className="bg-white p-4 rounded-2xl h-full flex flex-col sm:flex-row gap-4">
                    <img
                      src="/iit-patna-director.jpg"
                      className="w-40 h-40 rounded-full"
                    />
                    <div>
                      <p className="font-bold text-xl">
                        Prof. Trilok Nath Singh
                      </p>
                      <p className="text-md text-[#9B0225] text-justify mt-1">
                        Artificial Intelligence is transforming industries,
                        governance, and society at large. IIT Patna is delighted
                        to anchor the Artificial Intelligence theme at IInvenTiv
                        2026, promoting responsible, scalable, and impactful AI
                        solutions. We look forward to engaging with industry and
                        global partners to demonstrate how AI-driven innovation
                        can address complex societal and industrial challenges.
                      </p>
                      <p className="text-sm font-semibold text-right mt-2">
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
                  <div className="bg-white p-4 rounded-2xl h-full flex flex-col sm:flex-row gap-4">
                    <img
                      src="/director_iitbhuneswar.jpg"
                      className="w-40 h-40 rounded-full"
                    />
                    <div>
                      <p className="font-bold text-xl">
                        Prof. Shreepad Karmalkar
                      </p>
                      <p className="text-md text-[#9B0225] text-justify mt-1">
                        Semiconductor technology is foundational to digital
                        sovereignty and technological leadership. IIT
                        Bhubaneswar is proud to lead the Semiconductor
                        Technology and Chip Design theme at IInvenTiv 2026,
                        aligned with India’s Semiconductor Mission. We seek to
                        foster innovation across design, fabrication, packaging
                        and systems, strengthening India’s position in the
                        global semiconductor ecosystem.
                      </p>
                      <p className="text-sm font-semibold text-right mt-2">
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
                    onClick={() => window.open(`${item.link}`, "_blank")}
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
            Participating Institutes
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
              IISc + IITs
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
              IIEST + NITs
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
              IISERs
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
                      onClick={() => window.open(`${item.link}`, "_blank")}
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
    </section>
  );
};

export default Home;
