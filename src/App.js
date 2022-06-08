import logo from './logo.svg';
import './App.css';
import Maquette1 from './pages/Maquette1';
import Maquette2 from './pages/Maquette2';

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Maquette1/>} />
        <Route path="/maquette1" element={<Maquette1 />} />
        <Route path="/maquette2" element={<Maquette2 />} />
    </Routes>
  );
}

export default App;
