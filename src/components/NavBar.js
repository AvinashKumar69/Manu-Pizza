import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/pizzaLogo.png';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function NavBar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"} >
                <img src={Logo} alt="" />
                <div className="hiddenLinks">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/menu">Menu</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">ContactUs</NavLink>
                </div>
            </div>
            <div className="rightSide">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/menu">Menu</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">ContactUs</NavLink>
                <button onClick={toggleNavbar}><ReorderIcon /></button>
            </div>
        </div>
    )
}

export default NavBar;