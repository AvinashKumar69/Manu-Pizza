import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Home.css';
import BannerImage from '../assets/pizza.jpeg';



const Home = () => {

    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1>Fecha de Pizzeria</h1>
                <p>PIZZA TO FIT ANY TASTE</p>
                <NavLink to="/menu">
                    <button>ORDER NOW</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Home;