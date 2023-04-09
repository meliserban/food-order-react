import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';


function Footer() {
  return (
    <div className='footer' >
        <div className='socialMedia'>
            <InstagramIcon />
            <TwitterIcon />

        <p> &copy; 2023 eatfresh.com</p>
        </div>
    </div>
  )
}

export default Footer