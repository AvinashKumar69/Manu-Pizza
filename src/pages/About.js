import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {

    return (
        <div className="about">
            <div className="aboutTop" style={{ backgroundImage: `url(${MultiplePizzas})` }} ></div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores reiciendis eligendi dolorum exercitationem ut non quia. A necessitatibus odit incidunt delectus voluptatibus nulla adipisci laborum blanditiis. Quos eum eligendi culpa!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores reiciendis eligendi dolorum exercitationem ut non quia. A necessitatibus odit incidunt delectus voluptatibus nulla adipisci laborum blanditiis. Quos eum eligendi culpa!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores reiciendis eligendi dolorum exercitationem ut non quia. A necessitatibus odit incidunt delectus voluptatibus nulla adipisci laborum blanditiis. Quos eum eligendi culpa!
                </p>
            </div>
        </div>
    )
}

export default About;