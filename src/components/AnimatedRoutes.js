import React from 'react'
import {  Route, Routes,
    useLocation } from 'react-router-dom'; 
    import AnimatedRoutes from './components/AnimatedRoutes';
    import Home from './pages/Home';
    import Order from './pages/Order';
    import AddUser from './pages/SignUp';
    import { AnimatePresence } from "framer-motion/dist/framer-motion";


function AnimatedRoutes() {
    const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}> 
        <Route path="/" element={<Home/>} />
          <Route path="/order" element={<Order />} />
          <Route path="/signup" element={<AddUser />} />
        </Routes>
        </AnimatePresence>
  )
}

export default AnimatedRoutes