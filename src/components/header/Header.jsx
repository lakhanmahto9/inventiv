import React, { useEffect, useState } from "react";
import Sidebar from "../drawer/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { setDark } from "../../store/darkSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const [active, setActive] = useState("home");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-04-06T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // 60% visible
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      document.documentElement.classList.toggle("dark", media.matches);
    };

    applyTheme();
    media.addEventListener("change", applyTheme);

    return () => media.removeEventListener("change", applyTheme);
  }, []);

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/brochure_iinventiv.pdf";
    link.download = "IInvenTiv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFlyerDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/flyer.pdf";
    link.download = "flyer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px", // 👈 KEY FIX
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 90; // height of your sticky header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`sticky top-0 z-50 w-full transition-all duration-500 
    ${
      isScrolled
        ? "bg-[#f0ddab] opacity-100 dark:bg-[#18254f] dark:border-b-gray-500   border-b border-b-amber-50"
        : "bg-[#f0ddab] dark:bg-[#18254f] "
    }
  `}
      >
        <div className="flex items-center justify-between w-full px-4">
          <div className="p-4 dark:bg-white">
            <img src="/logo.png" alt="Logo" className="w-40 sm:w-60" />
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-black dark:text-white flex-wrap justify-center">
            <span className="text-[#1d1e5d] dark:text-[#ffa343] md:text-lg">
             Starts In
            </span>

            <div className="flex gap-1 sm:gap-2">
              <span className="bg-[#1d1e5d] text-white px-2 py-1 rounded text-xs sm:text-sm">
                {timeLeft.days}d
              </span>

              <span className="bg-[#1d1e5d] text-white px-2 py-1 rounded text-xs sm:text-sm">
                {timeLeft.hours}h
              </span>

              <span className="bg-[#1d1e5d] text-white px-2 py-1 rounded text-xs sm:text-sm">
                {timeLeft.minutes}m
              </span>

              <span className="bg-[#1d1e5d] text-white px-2 py-1 rounded text-xs sm:text-sm">
                {timeLeft.seconds}s
              </span>
            </div>
          </div>
          <div className="text-white hidden lg:flex gap-8 font-semibold items-center">
            <div
              className="cursor-pointer"
              onClick={() => dispatch(setDark())}
            ></div>
            {/* <div
            onClick={() => scrollToSection("home")}
            className={`cursor-pointer ${active === "home"
              ? "text-[#1d1e5d] dark:text-[#ffa343] border-b-2 border-[#ffa343]"
              : "text-black dark:text-white"
              }`}
          >
            Home
          </div>
          <div
            onClick={() => scrollToSection("innovation")}
            className={`cursor-pointer ${active === "innovation"
              ? "text-[#1d1e5d] dark:text-[#ffa343] border-b-2 border-[#ffa343]"
              : "text-black dark:text-white"
              }`}
          >
            Innovations
          </div>


          <div
            onClick={() => scrollToSection("contact")}
            className={`cursor-pointer ${active === "contact"
              ? "text-[#1d1e5d] dark:text-[#ffa343] border-b-2 border-[#ffa343]"
              : "text-black dark:text-white"
              }`}
          >
            Contact
          </div> */}

            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className={`px-3 py-2 rounded-md transition-all duration-300 ${
                active === "home"
                  ? "bg-[#ffa343] text-[#1d1e5d] dark:bg-[#1d1e5d] dark:text-[#ffa343]"
                  : "bg-transparent text-black dark:text-white hover:bg-[#ffa343]/20 dark:hover:bg-white/10"
              }`}
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("innovation")}
              className={`px-3 py-2 rounded-md transition-all duration-300 ${
                active === "innovation"
                  ? "bg-[#ffa343] text-[#1d1e5d] dark:bg-[#1d1e5d] dark:text-[#ffa343]"
                  : "bg-transparent text-black dark:text-white hover:bg-[#ffa343]/20 dark:hover:bg-white/10"
              }`}
            >
              Innovations
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className={`px-3 py-2 rounded-md transition-all duration-300 ${
                active === "contact"
                  ? "bg-[#ffa343] text-[#1d1e5d] dark:bg-[#1d1e5d] dark:text-[#ffa343]"
                  : "bg-transparent text-black dark:text-white hover:bg-[#ffa343]/20 dark:hover:bg-white/10"
              }`}
            >
              Contact
            </button>

            {/* <button
            onClick={handleFlyerDownload}
            className="text-black dark:text-white cursor-pointer"
          >
            Flyer
          </button> */}
          </div>

          {/* Sidebar for mobile */}
          {/* <div className="block lg:hidden">
          <Sidebar />
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
