import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import About from "./components/About";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Senior from "./components/Senior";
import ScroolToTop from "./components/ScrollToTop";

function App() {
  return ( 
    <div className="App">
     <BrowserRouter>
     <ScroolToTop />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/seniorRor-developer" element={<Senior />} />
          <Route path="/juniorRor-developer" element={<Senior />} />
          <Route path="/hr-intern" element={<Senior />} />
          <Route path="/project-manager" element={<Senior />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;