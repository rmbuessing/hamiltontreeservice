import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Inventory from './Components/Inventory';

const App = () => {
  return (
    <Router>
      <Routes>
      {/*<Route path="/inventory" element={<Inventory />} />*/}
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
