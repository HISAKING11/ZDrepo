import React from "react";
import "./styles/Contact.css";

const Contact = () => {
    return (
        <>
        <div className="contact">
            <h1>Contact Us</h1>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your name.."/>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your email.."/>
            <label htmlFor="message">Message:</label>
            <textarea placeholder="Your message here..." rows="10" cols="50"/>
            <button type="submit">Submit</button>
        </div>
        </>
    );
}

export default Contact;