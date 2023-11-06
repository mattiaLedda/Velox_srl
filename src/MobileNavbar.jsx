import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileNavbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState(null);


    const moveDown = (height, index) => {
        const totalHeight = height * 50; // Assumendo che ogni sottolink sia alto 50px

        // Chiudi il dropdown se è già aperto e resetta la posizione
        if (expandedIndex === index) {
            setExpandedIndex(null);
            resetDropdownPositions();
        } else {
            // Altrimenti, apri il nuovo dropdown e sposta gli altri in base all'altezza necessaria
            setExpandedIndex(index);
            for (let i = 1; i <= 5; i++) {
                const dropdown = document.getElementById(`nav${i}`);
                const content = dropdown.getElementsByClassName('dropdown-content')[0];
                if (dropdown) {
                    if (i > index) {
                        dropdown.style.transform = `translateY(${totalHeight}px)`;
                    } else {
                        dropdown.style.transform = 'translateY(0px)';
                    }
                    // Se è il dropdown corrente, toggle la visibilità del contenuto, altrimenti nascondilo
                    if (i === index) {
                        content.style.display = content.style.display === 'block' ? 'none' : 'block';
                    } else {
                        content.style.display = 'none';
                    }
                }
            }
        }
    };

    const resetDropdownPositions = () => {
        for (let i = 1; i <= 5; i++) {
            const dropdown = document.getElementById(`nav${i}`);
            const content = dropdown.getElementsByClassName('dropdown-content')[0];
            if (dropdown) {
                dropdown.style.transform = 'translateY(0px)';
                content.style.display = 'none'; // Assicurati che i contenuti dei dropdown siano nascosti
            }
        }
    };

    const handleNavToggle = () => {
        setIsNavExpanded(!isNavExpanded);
        // Se il menu nav si sta chiudendo, resetta anche la posizione dei dropdown
        if (isNavExpanded) {
            setExpandedIndex(null);
            resetDropdownPositions();
        }
    };

    return (
        <nav className="mobile-navbar">
            <div className="nav-header">
                <button
                    onClick={() => setIsNavExpanded(!isNavExpanded)}
                    style={{
                        marginLeft: isNavExpanded ? '80px' : '0px',
                        width: "80px",
                        paddingLeft: isNavExpanded ? "200px" : "0px",
                        paddingTop: "10px",
                        backgroundColor: isNavExpanded ? '#222' : 'transparent',
                        marginLeft: '-50px',
                        position: isNavExpanded ? "fixed" : "inherit",
                        display: isNavExpanded ? 'none' : 'block'
                    }}
                    className="nav-icon"
                >
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
            <button  onClick={handleNavToggle}  style={{width:"300px", marginLeft: isNavExpanded ? '80px' : '0px',   paddingTop: "20px", backgroundColor: isNavExpanded ? '#222' : 'transparent', marginLeft: '-50px', position: isNavExpanded ? "fixed" : "inherit" , display: isNavExpanded ? 'block' : 'none', paddingLeft:"240px"}} className="nav-icon">
                    {isNavExpanded ? '✕' : '☰'}
                </button>
                <div className="dropdown mt-5" id="nav1" onClick={() => moveDown(2, 1)}>
                    <button className="dropbtn">Azienda</button>
                    <div className="dropdown-content">
                        <Link className="dropdown-item" to="/">Home</Link>
                        <Link className="dropdown-item" to="/contatti">Contatti</Link>
                    </div>
                </div>

                <div className="dropdown" id="nav2" onClick={() => moveDown(9, 2)}>
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

                <div className="dropdown" id="nav3" onClick={() => moveDown(1, 3)}>
                    <button className="dropbtn">Portfolio</button>
                    <div className="dropdown-content">
                        <Link className="dropdown-item" to="/portfolio">I nostri lavori</Link>
                    </div>
                </div>

                <div className="dropdown" id="nav4" onClick={() => moveDown(1, 4)}>
                    <button className="dropbtn">Poliuree</button>
                    <div className="dropdown-content">
                        <Link className="dropdown-item" to="/poliuree">Informazioni Poliuree</Link>
                    </div>
                </div>

                <div className="dropdown" id="nav5" onClick={() => moveDown(1, 5)}>
                    <button className="dropbtn">Preventivo</button>
                    <div className="dropdown-content">
                        <Link className="dropdown-item" to="/preventivo">Richiedi un Preventivo</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default MobileNavbar;
