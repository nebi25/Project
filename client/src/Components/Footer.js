import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className="footer section">
            {/* Footer Section */}
            <div className="footer-container container grid">
                {/* Footer Content 1 */}
                <div className="footer-content">
                    <a href="#" className="footer-logo">    
                        <i className="bx bxs-shopping-bags footer-logo-icon"></i>Shopify
                    </a>

                    <p className="footer-description">Enjoy the biggest sale <br /> of your life.</p>

                    <ul className="footer-social">
                        <a href="#" className="footer-social-link"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="footer-social-link"><i className="bx bxl-instagram"></i></a>
                        <a href="#" className="footer-social-link"><i className="bx bxl-twitter"></i></a>
                    </ul>
                </div>
                {/* Footer Content 2 */}
                <div className="footer-content">
                    <h3 className="footer-title" id="bug">About</h3>

                    <ul className="footer-links">
                        <Link to="/aboutUs"><li><a href="#" className="footer-link">About us!</a></li></Link>
                        <li><a href="#" className="footer-link">Customer Support!</a></li>
                        <li><a href="#" className="footer-link">Support Center!</a></li>
                    </ul>
                </div>
                {/* Footer Content 3 */}
                <div className="footer-content">
                    <h3 className="footer-title">Our Services</h3>

                    <ul className="footer-links">
                        <Link to="/home/shop"><li><a href="#" className="footer-link">Shop</a></li></Link>
                        <li><a href="#" className="footer-link">Discounts</a></li>
                    </ul>
                </div>
                {/* Footer Content 4 */}
                <div className="footer-content">
                    <h3 className="footer-title">Our Company</h3>

                    <ul className="footer-links">
                        <li><a href="#" className="footer-link">Register</a></li>
                        <Link to="/contactUs"><li><a href="#" className="footer-link">Contact Us</a></li></Link>
                    </ul>
                </div>
            </div>
            <span className="footer-copy">&#169; Shopify. All Rights Reserved!</span>
        </div>
    )
}

export default Footer