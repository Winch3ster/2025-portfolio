import { createContext } from 'react';
import LandingPage from './pages/landing_page.jsx';
import PlaygroundPage from './pages/playground.jsx';
import SimulationPage from './pages/simulation_page.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  
  return (
  

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/simulation" element={<SimulationPage/>} />
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
