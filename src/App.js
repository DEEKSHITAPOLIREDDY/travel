import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Contact from './pages/Contact/Contact'; // Import the ContactPage component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Europe from './pages/description/Europe/Europe';
import Asia from './pages/description/Asia/Asia';
import Bangkok from './pages/description/Bangkok/Bangkok';
import MiddleEast from './pages/description/Middle East/MiddleEast';
import Hawai from './pages/description/Hawai/Hawai';
import London from './pages/description/London/London';

import Rome from './pages/description/Rome/Rome';

import Australia from './pages/description/Australia/Australia';
import NorthAmerica from './pages/description/North America/NorthAmerica';
import Africa from './pages/description/Africa/Africa';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/description/Europe" element={<Europe/>}/>
          <Route path="/description/Asia" element={<Asia/>}/>
          
          <Route path="/description/Bangkok" element={<Bangkok/>}/>
          
          <Route path="/description/Hawai" element={<Hawai/>}/>
          <Route path="/description/London" element={<London/>}/>
          <Route path="/description/North America" element={<NorthAmerica/>}/>
          <Route path="/description/Africa" element={<Africa/>}/>
          <Route path="/description/Middle East" element={<MiddleEast/>}/>

          
          <Route path="/description/Rome" element={<Rome/>}/>
          
          <Route path="/description/Australia" element={<Australia/>}/>
          
          

         

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
