import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
    return (
        <div className="contact-page-content-wrapper">
            <div className="left-column">

            </div>
            <div className="right-column">
                <div>{
                    <FontAwesomeIcon 
                    className="about-page-icons"
                    icon="phone" 
                    />}
                    <span>Phone Number: 555-555-5555</span>
                </div>

                <div>{
                    <FontAwesomeIcon 
                    className="about-page-icons"
                    icon="envelope" 
                    />}
                    <span>Email Adress: placeholder@fakedomain.com</span>
                </div>

                <div>{
                    <FontAwesomeIcon
                    className="about-page-icons"
                    icon="globe" 
                    />}
                    <span>Address: 123 North, 4700 West, United States</span>
                </div>
            </div>
        </div>
    )
}