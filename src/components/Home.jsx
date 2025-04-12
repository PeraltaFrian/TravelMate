import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
       
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
        >
          Welcome to TravelMate!
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, delay: 0.2 }} 
        >
          Your ultimate travel companion for language translation and weather updates.
        </motion.p>

        <motion.img 
          src="/luggage.jpg" 
          alt="Travel" 
          className="home-image"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.5, delay: 0.4 }} 
        />
      </div>
    </div>
  );
}

export default Home;
