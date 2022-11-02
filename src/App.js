import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import About from "./components/About";
import Career from "./components/Career";
import Contact from "./components/Contact";

function App() {
  return ( 
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;