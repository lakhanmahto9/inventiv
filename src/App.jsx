import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import RnDShowcase from "./components/r-and-d/RnDShowcase";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase" element={<RnDShowcase/>}/>
      </Routes>
    </Router>
  );
}

export default App;
