import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Courses from './pages/Courses';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import Blogs from './pages/Blogs';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container"> 
        <Sidebar />
        <div className="main-area">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
