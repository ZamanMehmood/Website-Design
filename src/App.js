import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Services from "./components/services";

function App() {
  return ( 
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
          <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;