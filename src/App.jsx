import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import RnDShowcase from "./components/r-and-d/RnDShowcase";
import Hosts from "./components/host/Hosts";
import Contact from "./components/contact/Contact";
import Brochure from "./components/brochure/Brochure";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase" element={<RnDShowcase/>}/>
        <Route path="/hosts/:name/:id" element={<Hosts/>}/>
        <Route path="/contact" element={<Contact/>}/>
        {/* <Route path="/brochure" element={<Brochure/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
