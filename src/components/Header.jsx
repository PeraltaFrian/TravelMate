import React, { useState } from 'react';
import { FaBars, FaLanguage, FaCloudSun, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-content">
        <h1 className="logo">Travel Mate</h1>
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <FaBars size={30} />
        </div>
      </div>

      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-item" onClick={handleItemClick}>
          <FaHome size={20} /> Home
        </Link>
        <Link to="/translator" className="nav-item" onClick={handleItemClick}>
          <FaLanguage size={20} /> Translator
        </Link>
        <Link to="/weather" className="nav-item" onClick={handleItemClick}>
          <FaCloudSun size={20} /> Weather
        </Link>
      </nav>
    </motion.header>
  );
};

export default Header;
