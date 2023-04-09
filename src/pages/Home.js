import React from 'react';
import { Link } from 'react-router-dom';
import HeaderImage from '../assets/header.jpg';
import '../styles/Home.css';
import { motion } from "framer-motion/dist/framer-motion";

function Home() {
  return (
    <motion.div className='home'
    style={{ backgroundImage: `url(${HeaderImage})` }}
    
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity:0}}
    
    >
      <div className="headerContainer"
      >
      <h1> eat healthy, live longer</h1>
      <Link to="/order">
      <button>ORDER NOW</button>
      </Link>
      </div>
    </motion.div>
  )
}

export default Home;