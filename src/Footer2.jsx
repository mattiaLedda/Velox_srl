// Footer.js
import React from 'react';
import { Link } from "react-router-dom";

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
                  <Link to="/"><li><a>Home</a></li></Link>
                  <Link to="/contatti"><li><a>Contatti</a></li></Link>
                  <Link to="/preventivo"><li><a>Preventivo</a></li></Link>
                </ul>
              </div>
              <div className="column1">
                <ul>
                <Link to="/coppi"><li><a>Coppi</a></li></Link>
                <Link to="/marsigliesi"><li><a>Marsigliesi</a></li></Link>
                <Link to="/portoghesi"><li><a>Portoghesi</a></li></Link>
                </ul>
              </div>
              <div className="column1">
                <ul>
                <Link to="/coibentati"><li><a>Coibentati</a></li></Link>
                <Link to="/lamiera"><li><a>Lamiera</a></li></Link>
                <Link to="/lineevita"><li><a>Linee Vita</a></li></Link>
                </ul>
              </div>
              <div className="column1">
                <ul>
                <Link to="/struttura"><li><a>Struttura</a></li></Link>
                <Link to="/cappotto"><li><a>Termoisolamento</a></li></Link>
                <Link to="/insonorizzazione"><li><a>Insonorizzazione</a></li></Link>
                </ul>
              </div>
            </div>
            <div className="footer-social1">
              <h5>Contattaci</h5>
              <ul className="social-icons1">
                <li><a href="https://wa.me/+393509554496"><i className="fab fa-whatsapp fs-2 m-3"></i></a></li>
                <li><a href="https://www.instagram.com/veloxsrl"><i className="fab fa-instagram  fs-2 m-3"></i></a></li>
                <li><a href="tel:3509554496"><i className="fa-solid fa-phone  fs-2 m-3"></i></a></li>
                <li><a href="mailto:velox.impiantisrl@gmail.com"><i className="fa-solid fa-envelope  m-3 fs-2"></i></a></li>
              </ul>
            </div>
            <div className="footer-info1">
              <p>&copy; Velox Srl. Tutti i diritti riservati.</p>
              <p>P.IVA 10317070968</p>
            </div>
          </div>
        </footer>
    );

}

export default Footer2;
