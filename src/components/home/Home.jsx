import React, { useState } from "react";
import Layout from "../layout/Layout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";
import { logos } from "../../utils/logo";

const Home = () => {
  console.log(logos)
  const [active, setActive] = useState("iit");
  const handleTab = (tab) => {
    setActive(tab);
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (window.innerWidth < 1024) {
      setActiveIndex(index);
      setTimeout(() => setActiveIndex(null), 2000);
    }
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
            src="/DIYA2.jpg"
            alt="Banner"
            className="w-full object-contain "
          />
        </Carousel>

        <div className="p-4 lg:p-16 bg-[#1d1e5d]">
          <p className="text-3xl lg:text-5xl font-bold text-[#ffa343]">Organizing Institutes</p>
          <div className="w-full border border-slate-400 my-4 p-4 lg:p-8 px-4 md:px-20 rounded-2xl flex flex-wrap justify-between gap-4 font-semibold">
            {logos.organizer.map((item, index) => (<div className="flex flex-col justify-center items-center">
              <img src={item.logo} key={index} alt={item.name} className="w-28 h-28 sm:w-48 sm:h-48 lg:w-60 lg:h-60 bg-[#eeeeee] rounded-2xl shadow-amber-50 p-4 
                 transition-transform duration-300 ease-in-out hover:scale-110" />
              <div className="text-white text-xs sm:text-base lg:text-lg">{item.name}</div>
            </div>
            ))}
          </div>
        </div>
        <div className="p-4 lg:p-16 bg-[#1d1e5d]">
          <p className="text-3xl lg:text-5xl font-bold text-[#ffa343]">Thematic Areas & Coordinating Institutes</p>

          <div className="w-full border border-slate-400 my-4 p-4 rounded-2xl 
                flex flex-wrap justify-center lg:justify-between gap-6 font-semibold text-center">

            {logos.theme.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-28 h-28 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-2xl overflow-hidden group">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-80 object-cover group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundImage: `url(${item.logo})` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute top-2 left-0 right-0 text-center">
                    <span className="text-white text-xs sm:text-sm lg:text-lg font-semibold drop-shadow-md bg-black/40 px-2 py-1 rounded-md">
                      {item.themes}
                    </span>
                  </div>
                </div>
                <div className="text-white text-xs sm:text-base lg:text-lg mt-3 font-medium">
                  {item.name}
                </div>
              </div>
            ))}


          </div>

        </div>
        <div className="text-white bg-[#1d1e5d] p-4 lg:p-16">
          <p className="text-2xl lg:text-5xl font-bold text-[#ffa343]">
            Participating Institutes
          </p>
          <div
            className="w-full flex items-center gap-3 my-4 overflow-x-auto lg:overflow-x-visible scrollbar-hide"
          >
            <button
              onClick={() => handleTab("iit")}
              type="button"
              className={`${active === "iit" ? "bg-amber-500 text-white" : "hover:text-amber-500"
                } px-4 py-3 shrink-0 cursor-pointer rounded-2xl font-semibold text-sm lg:text-lg `}
            >
              IISc + 23 IITs
            </button>

            <button
              onClick={() => handleTab("nit")}
              type="button"
              className={`${active === "nit" ? "bg-amber-500 text-white" : "hover:text-amber-500"
                } px-4 py-3 shrink-0 cursor-pointer rounded-2xl font-semibold text-sm lg:text-lg `}
            >
              IIEST + 31 NITs
            </button>
            <button
              onClick={() => handleTab("iiser")}
              type="button"
              className={`${active === "iiser" ? "bg-amber-500 text-white" : "hover:text-amber-500"
                } px-4 py-3 shrink-0 cursor-pointer rounded-2xl font-semibold text-sm lg:text-lg`}
            >
              7 IISERs
            </button>
            <button
              onClick={() => handleTab("top")}
              type="button"
              className={`${active === "top" ? "bg-amber-500 text-white" : "hover:text-amber-500"
                } px-4 py-3 shrink-0 cursor-pointer rounded-2xl font-semibold text-sm lg:text-lg`}
            >
              TOP 100 NIRF-Ranked Institutes
            </button>
          </div>


          <div className={`w-full border border-slate-400 rounded-2xl flex flex-wrap justify-center md:justify-start items-center gap-2 p-1 sm:p-4 font-semibold text-2xl`}>
            {logos[active].map((item, index) =>
              active !== "top" ? (
                <div key={index} className="relative group flex justify-center sm:justify-normal" onClick={() => handleClick(index)}>
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52 bg-[#eeeeee] rounded-2xl shadow-amber-50 p-4 
                              transition-transform duration-300 ease-in-out hover:scale-90"
                  />
                  {/* Tooltip */}
                  <div


                    className={`
              absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
              bg-white text-black text-sm px-3 py-1 rounded-md whitespace-nowrap shadow-md
              transition-all duration-300
              opacity-0 pointer-events-none
              ${activeIndex === index ? "opacity-100 pointer-events-auto" : ""}
              lg:group-hover:opacity-100 lg:pointer-events-auto
            `}
                  >
                    {item.name}
                  </div>
                </div>
              ) : (
                <div key={index} className="w-full lg:w-1/4 text-sm">
                  <p>{item.id}. {item.name}</p>
                </div>
              )
            )}
          </div>

        </div>

      </div>
    </Layout>
  );
};

export default Home;
