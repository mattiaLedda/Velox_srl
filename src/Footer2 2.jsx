// Footer.js
import React from 'react';

import logo from '../src/assets/logo2.webp';   

function Footer2() {
    return (
        <footer className="footer1">
          <div className="container1">
            <div className="footer-logo1">
            <div className="d-flex flex-row align-items-center">
                    <img
                        src="../src/assets/logo.webp"
                        className="logo11"
                        alt="Logo"
                    />
                    <img
                        src="../src/assets/logo2.webp"
                        className="logo21"
                        alt="Logo"
                    />
                </div>
            </div>
            <div className="footer-links1">
              <div className="column1">
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#products">Products</a></li>
                </ul>
              </div>
              <div className="column1">
                <ul>
                  <li><a href="#about-us">About Us</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#faq">FAQ</a></li>
                </ul>
              </div>
              <div className="column1">
                <ul>
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#testimonials">Testimonials</a></li>
                  <li><a href="#careers">Careers</a></li>
                </ul>
              </div>
              <div className="column1">
                <ul>
                  <li><a href="#support">Support</a></li>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#services">Services</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-social1">
              <h5>Contattaci</h5>
              <ul className="social-icons1">
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa-solid fa-phone"></i></a></li>
                <li><a href="#"><i className="fa-solid fa-envelope"></i></a></li>
              </ul>
            </div>
            <div className="footer-info1">
              <p>&copy; 2023 Your Company Name. All rights reserved.</p>
              <p>P.IVA 01234567890</p>
            </div>
          </div>
        </footer>
    );

}

export default Footer2;
