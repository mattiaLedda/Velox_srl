import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileNavbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className="mobile-navbar">
            <div className="nav-header">
                <button onClick={() => setIsNavExpanded(!isNavExpanded)} style={{ marginLeft: isNavExpanded ? '80px' : '0px', width: "252px", paddingLeft: isNavExpanded ? "200px" : "0px", paddingTop: "10px", backgroundColor: isNavExpanded ? '#222' : 'transparent', marginLeft: '-50px', position: isNavExpanded ? "fixed" : "inherit",display: isNavExpanded ? 'none' : 'block'}} className="nav-icon">
                    {isNavExpanded ? '✕' : '☰'}
                </button>
                <Link to="/" className="logo-link mt-3">
                    <div className="d-flex flex-row align-items-center mr-5">
                        <img
                            src="../public/assets/logo.webp"
                            className="logo"
                            alt="Logo"
                            style={{ display: isNavExpanded ? 'none' : 'block' }}
                        />
                        <img
                            src="../public/assets/logo2.webp"
                            className="logo2"
                            alt="Logo"
                            style={{ display: isNavExpanded ? 'none' : 'block' }}
                        />
                    </div>
                </Link>
            </div>

            <div className={`nav-menu ${isNavExpanded ? 'expanded' : ''}`} style={{marginLeft: isNavExpanded ? "-30px" : "-50px"}}>
            <button onClick={() => setIsNavExpanded(!isNavExpanded)} style={{width:"300px", marginLeft: isNavExpanded ? '80px' : '0px',   paddingTop: "20px", backgroundColor: isNavExpanded ? '#222' : 'transparent', marginLeft: '-50px', position: isNavExpanded ? "fixed" : "inherit" , display: isNavExpanded ? 'block' : 'none', paddingLeft:"240px"}} className="nav-icon">
                    {isNavExpanded ? '✕' : '☰'}
                </button>
                <div className="dropdown mt-5">
                    <button className="dropbtn">Azienda</button>
                    <div className="dropdown-content">
                        <Link className="dropdown-item" to="/">Home</Link>
                        <Link className="dropdown-item" to="/contatti">Contatti</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Servizi</button>
                    <div className="dropdown-content">
                        <Link className="dropdown-item" to="/coppi">Coppi</Link>
                        <Link className="dropdown-item" to="/marsigliesi">Tegole marsigliesi</Link>
                        <Link className="dropdown-item" to="/portoghesi">Tegole portoghesi</Link>
                        <Link className="dropdown-item" to="/coibentati">Pannelli coibentati</Link>
                        <Link className="dropdown-item" to="/lamiera">Lamiera</Link>
                        <Link className="dropdown-item" to="/lineevita">Linee vita</Link>
                        <Link className="dropdown-item" to="/struttura">Struttura in legno</Link>
                        <Link className="dropdown-item" to="/cappotto">Cappotto termico</Link>
                        <Link className="dropdown-item" to="/insonorizzazione">Insonorizzazione</Link>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn">Portfolio</button>
                    <div className="dropdown-content">
                        <Link className="dropdown-item" to="/">Home</Link>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn">Poliuree</button>
                    <div className="dropdown-content">
                        <Link className="dropdown-item" to="/poliuree">Poliuree</Link>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn">Preventivo</button>
                    <div className="dropdown-content">
                        <Link className="dropdown-item" to="/preventivo">Preventivo</Link>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn">Azienda</button>
                    <div className="dropdown-content">
                        <Link className="dropdown-item" to="/">Home</Link>
                        <Link className="dropdown-item" to="/contatti">Contatti</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default MobileNavbar;
