import React, { useState } from 'react'
import Logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import classes from '../styles/HeaderCartButton.module.css';
import HomeIcon from '@mui/icons-material/Home';
import HeaderCartButton from './HeaderCartButton';
import HomeButton from './HomeButton';

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <img src={Logo} />
        <div className="hiddenLinks">
            <Link to="/"> Home </Link>
            
            <Link to="/signup"> Sign Up </Link>
        </div>
       </div>

        <div className='rightSide'>
            <Link to="/"> Home </Link>
            <Link to="/signup"> Sign Up </Link>
       
        <button onClick={toggleNavbar}>
            <HomeIcon/>
        </button>
        </div>


    <HeaderCartButton  />

    </div>
  )
}

export default Navbar;