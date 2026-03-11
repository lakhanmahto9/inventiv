import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Innovation from "./components/inovations/Innovation";
import ScrollToTopButton from "./components/scroll/ScrollToTopButton";
import AccommodationDetails from "./components/accommodation/AccommodationDetails";

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Innovation/>
      <AccommodationDetails/>
      <Contact/>
      <Footer/>
      <ScrollToTopButton />
    </>
  );
}

export default App;
