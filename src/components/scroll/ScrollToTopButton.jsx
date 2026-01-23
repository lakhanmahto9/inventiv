import { useEffect, useState } from "react";
import { UpArrowIcon } from "../../icons/Icons";

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300); // show after scrolling down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full
                 bg-[#ffa343] text-[#1d1e5d] shadow-lg
                 hover:bg-[#ffb864] transition-all duration-300 cursor-pointer"
      aria-label="Scroll to top"
    >
      <UpArrowIcon color={"#fff"} width={28} height={28}/>
    </button>
  );
};

export default ScrollToTopButton;
