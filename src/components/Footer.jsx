import React from 'react';
import '../styles/Footer.css'
import {Instagram} from '@mui/icons-material';
import {Twitter} from '@mui/icons-material';
import {LinkedIn} from '@mui/icons-material';
import {Facebook} from '@mui/icons-material';


const Footer = () => {
  return (
    <div className='footer'>
      <div className="socialMedia">
        <Instagram />
        <Twitter />
        <LinkedIn />
        <Facebook />
      </div>
      <p> &copy; 2024 pedrotechpizza.com</p>
    </div>
  )
}

export default Footer
