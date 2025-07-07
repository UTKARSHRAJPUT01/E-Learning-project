import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo"><FaGraduationCap /> Educa</h2>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>

      <div className="social">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedin />
      </div>

      <footer>
        All Rights Reserved
      </footer>
    </div>
  );
};

export default Sidebar;
