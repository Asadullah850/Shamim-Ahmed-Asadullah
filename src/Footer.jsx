import React from 'react';
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content my-4">
            <div>
                <p>Shamim Ahmed Asadullah<br />Last Update 2023</p>
            </div>
            <div>
                <span className="footer-title">Social</span>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com/shamim850"><FaFacebookSquare className=' text-xl'></FaFacebookSquare></a>
                    <a href="https://www.linkedin.com/in/shamin-ahmed-asadullah-r850/"><FaLinkedin className=' text-xl'></FaLinkedin></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;