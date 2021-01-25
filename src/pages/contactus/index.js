import React from 'react';
import iglogo from '../../images/iglogo.png';
import "./style.css";

function ContactUs(props) {
    return (
        <div className="contactBackground">
            <div className="contactUs">Contact Us!</div>
            <div className="socialFooter">
                <h4>email us at booksandbabes@gmail.com</h4>
                <div>&#8226;</div>
                <h4>Find us on Instagram</h4>
                <img className="igLogo" src={iglogo} alt="Instagram" target="_blank"></img>
            </div>
        </div>
    );
}

export default ContactUs;