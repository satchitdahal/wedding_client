import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Address from './Components/Address/Address';
import Save from './Components/Save/Save';
import './App.css';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/locations' element={<Address />} />
          <Route path='/save' element={<Save />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
