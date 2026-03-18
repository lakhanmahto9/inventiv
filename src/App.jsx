import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Innovation from "./components/inovations/Innovation";
import ScrollToTopButton from "./components/scroll/ScrollToTopButton";
import AccommodationDetails from "./components/accommodation/AccommodationDetails";
import SelectedInnovationTable from "./components/inovations/SelectedInnovation";
import Registration from "./components/reg/Registration";
import TravelInfo from "./components/TravelInfo";

function App() {
  return (
    <>
      <Header/>
      <Home/>
      {/* <Innovation/> */}
      <SelectedInnovationTable/>
      <AccommodationDetails/>
      <Registration/>
      <TravelInfo/>
      <Contact/>
      <Footer/>
      <ScrollToTopButton />
    </>
  );
}

export default App;
