import React from 'react';
import PizzaLogo from '../assets/pizzaLogo.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import {Menu} from '@mui/icons-material';

const Navbar = () => {
  return (
    <div className="container">
        <div className="leftSide">
            <img src={PizzaLogo} />
        </div>
        <div className="rightSide">
            <Link to = '/' className='link'>Home</Link>
            <Link to = '/menu' className='link'>Menu</Link>
            <Link to = '/about' className='link'>About</Link>
            <Link to = '/contact' className='link'>Contact</Link>
            <button>
                <Menu />
            </button>
        </div>
    </div>
  )
}

export default Navbar
