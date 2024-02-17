import React, { useEffect, useState } from 'react';
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
    useEffect(()=>{
        moveDown(1,6)
    }, [])
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
                <div className='w-100 d-flex flex-row justify-content-center mr-5 navmoblogo'>
                    <Link to="/" className=" ml-5 logo-link mt-3 w-100">
                        <div className="d-flex flex-row align-items-center w-100 justify-content-center">
                            <img
                                src="../src/assets/logo.webp"
                                className="logo"
                                alt="Logo"
                                style={{ display: isNavExpanded ? 'none' : 'block' }}
                            />
                            <img
                                src="../src/assets/logo2.webp"
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
                    <div className='w-100 d-flex flex-row justify-content-end p-3 mt-3'>
                        <i class="fa-solid fa-xmark white" onClick={handleNavToggle}></i>
                    </div>
                    <div className="dropdown pl-3" id="nav1" onClick={() => moveDown(2, 1)}>
                        <button className="dropbtn">Azienda</button>
                        <div className="dropdown-content">
                            <Link to="/" onClick={handleNavToggle}>Home</Link>
                            <Link to="/contatti" onClick={handleNavToggle}>Contatti</Link>
                        </div>
                    </div>
                    <div className="dropdown pl-3" id="nav2" onClick={() => moveDown(5, 2)}>
                        <button className="dropbtn">Servizi</button>
                        <div className="dropdown-content">
                            <Link to="/coppi" onClick={handleNavToggle}>Coppi</Link>
                            <Link to="/marsigliesi" onClick={handleNavToggle}>Tegole marsigliesi</Link>
                            <Link to="/portoghesi" onClick={handleNavToggle}>Tegole portoghesi</Link>
                            <Link to="/coibentati" onClick={handleNavToggle}>Pannelli coibentati</Link>
                            <Link to="/lamiera" onClick={handleNavToggle}>Lamiera</Link>
                        </div>
                    </div>
                    <div className="dropdown pl-3" id="nav3" onClick={() => moveDown(2, 3)}>
                        <button className="dropbtn">Struttura</button>
                        <div className="dropdown-content">
                            <Link to="/lineevita" onClick={handleNavToggle}>Linee vita</Link>
                            <Link to="/struttura" onClick={handleNavToggle}>Struttura in legno</Link>
                        </div>
                    </div>
                    <div className="dropdown pl-3" id="nav4" onClick={() => moveDown(2, 4)}>
                        <button className="dropbtn">Isolamento</button>
                        <div className="dropdown-content">
                            <Link to="/cappotto" onClick={handleNavToggle}>Cappotto termico</Link>
                            <Link to="/insonorizzazione" onClick={handleNavToggle}>Insonorizzazione</Link>
                        </div>
                    </div>
                    <div className="dropdown pl-3" id="nav5" onClick={() => moveDown(1, 5)}>
                        <button className="dropbtn">Poliuree</button>
                        <div className="dropdown-content">
                            <Link to="/poliuree" onClick={handleNavToggle}>Informazioni Poliuree</Link>
                        </div>
                    </div>
                    <div className="dropdown pl-3" id="nav6" onClick={() => moveDown(1, 6)}>
                        <button className="dropbtn">Preventivo</button>
                        <div className="dropdown-content">
                            <Link to="/preventivo" onClick={handleNavToggle}>Richiedi un Preventivo</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default MobileNavbar;
