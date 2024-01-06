import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileNavbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleNavToggle = () => {
        setIsNavExpanded(!isNavExpanded);
        if (isNavExpanded) {
            setExpandedIndex(null);
            resetDropdownPositions();
        }
    };

    const moveDown = (height, index) => {
        const totalHeight = height * 50; // Assuming each sublink is 50px high

        if (expandedIndex === index) {
            setExpandedIndex(null);
            resetDropdownPositions();
        } else {
            setExpandedIndex(index);
            for (let i = 1; i <= 6; i++) {
                const dropdown = document.getElementById(`nav${i}`);
                const content = dropdown.getElementsByClassName('dropdown-content')[0];
                if (dropdown) {
                    if (i > index) {
                        dropdown.style.transform = `translateY(${totalHeight}px)`;
                    } else {
                        dropdown.style.transform = 'translateY(0px)';
                    }
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
        for (let i = 1; i <= 6; i++) {
            const dropdown = document.getElementById(`nav${i}`);
            if (dropdown) {
                const content = dropdown.getElementsByClassName('dropdown-content')[0];
                dropdown.style.transform = 'translateY(0px)';
                content.style.display = 'none';
            }
        }
    };

    return (
        <nav className="mobile-navbar w-100">
            <div className="nav-header w-100">
                <button onClick={handleNavToggle} className="nav-icon">
                    ☰
                </button>
                <div className='w-100 d-flex flex-row justify-content-center'>
                    <Link to="/" className=" ml-5 logo-link mt-3 w-100">
                        <div className="d-flex flex-row align-items-center w-100 justify-contnt-center">
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
            </div>
            <div>

                <div className={`nav-menu ${isNavExpanded ? 'expanded' : ''}`}>
                    <div className='w-100 d-flex flex-row justify-content-end p-3'>
                        <i class="fa-solid fa-xmark white" onClick={handleNavToggle}></i>
                    </div>
                    <div className="dropdown pl-3" id="nav1" onClick={() => moveDown(2, 1)}>
                        <button className="dropbtn">Azienda</button>
                        <div className="dropdown-content">
                            <Link to="/">Home</Link>
                            <Link to="/contatti">Contatti</Link>
                        </div>
                    </div>
                    <div className="dropdown pl-3" id="nav2" onClick={() => moveDown(5, 2)}>
                        <button className="dropbtn">Servizi</button>
                        <div className="dropdown-content">
                            <Link to="/coppi">Coppi</Link>
                            <Link to="/marsigliesi">Tegole marsigliesi</Link>
                            <Link to="/portoghesi">Tegole portoghesi</Link>
                            <Link to="/coibentati">Pannelli coibentati</Link>
                            <Link to="/lamiera">Lamiera</Link>
                        </div>
                    </div>
                    <div className="dropdown pl-3" id="nav3" onClick={() => moveDown(2, 3)}>
                        <button className="dropbtn">Struttura</button>
                        <div className="dropdown-content">
                            <Link to="/lineevita">Linee vita</Link>
                            <Link to="/struttura">Struttura in legno</Link>
                        </div>
                    </div>
                    <div className="dropdown pl-3" id="nav4" onClick={() => moveDown(2, 4)}>
                        <button className="dropbtn">Isolamento</button>
                        <div className="dropdown-content">
                            <Link to="/cappotto">Cappotto termico</Link>
                            <Link to="/insonorizzazione">Insonorizzazione</Link>
                        </div>
                    </div>
                    <div className="dropdown pl-3" id="nav5" onClick={() => moveDown(1, 5)}>
                        <button className="dropbtn">Poliuree</button>
                        <div className="dropdown-content">
                            <Link to="/poliuree">Informazioni Poliuree</Link>
                        </div>
                    </div>
                    <div className="dropdown pl-3" id="nav6" onClick={() => moveDown(1, 6)}>
                        <button className="dropbtn">Preventivo</button>
                        <div className="dropdown-content">
                            <Link to="/preventivo">Richiedi un Preventivo</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default MobileNavbar;
