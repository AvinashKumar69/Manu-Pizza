import React, { useState, useEffect } from "react";
import "../styles/Contact.css";
import PizzaLeft from "../assets/pizzaLeft.jpg";

function Contact() {

    const [formData, setFormData] = useState([]);

    const [change, setChange] = useState(
        {
            name: "",
            email: "",
            message: ""
        }
    );

    useEffect(() => {
        console.log("formdata change:-", formData);
    }, [formData]);

    function onChangeInputHandler(e) {
        setChange(
            {
                ...change, [e.target.name]: e.target.value
            }
        )
        console.log(change);
    }

    function onClickFormDataHandler(e) {
        e.preventDefault()
        // const x = [...formData]
        setFormData(
            [
                ...formData, change
            ]
        )
        // console.log(setFormData);
        setChange(
            {
                name: "",
                email: "",
                message: ""
            }
        )
    }

    return (
        <div className="contact">
            <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contact-form" >
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Enter full name..." value={change.name} onChange={onChangeInputHandler} />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Enter email..." value={change.email} onChange={onChangeInputHandler} />

                    <label htmlFor="message">Message</label>
                    <textarea rows="6" placeholder="Enter message..." name="message" required value={change.message} onChange={onChangeInputHandler} />

                    <button type="submit" onClick={onClickFormDataHandler}>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;