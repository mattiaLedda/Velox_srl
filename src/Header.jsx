import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import CenterHeader from "./CenterHeader";
import SubHeader from "./SubHeader";

const images = [
    "../public/assets/fototetti5.webp",
    "../public/assets/fototetti2.webp",
    "../public/assets/fototetti3.webp"
];

function Header() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [zoomed, setZoomed] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Cambia l'immagine ogni 5 secondi

        const zoomInterval = setInterval(() => {
            setZoomed(true); // Riavvia lo zoom da 0 ogni 5 secondi
        }, 3000); // Riavvia lo zoom ogni 5 secondi

        return () => {
            clearInterval(interval);
            clearInterval(zoomInterval);
        };
    }, []);

    const containerStyle = {
        width: "100vw",
    };

    const imageStyle = {
        backgroundImage: `url(${images[currentImageIndex]})`,
        width: "100vw",
        height: "80vh",
        transition: "opacity 1s ease-in-out, transform 5s ease-in-out", // Aggiungi una transizione per l'opacità e lo zoom
        position: "absolute",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        transformOrigin: "center center",
        transform: `scale(${zoomed ? 1.08 : 1})`,
        opacity: 1 // Imposta l'opacità iniziale a 1
    };

    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background:" linear-gradient(to bottom , rgba(30, 30, 30, 0.9) 20%, rgba(128, 128, 128, 0.3) 80% )        ",
        zIndex: 1,
    };

    const headerContainerStyle = {
        height: "95vh",
        position: "relative",
        overflow: "hidden"
    };

    return (
        <div id="header" style={headerContainerStyle} className="position-relative">
            <div style={containerStyle}>
                {images.map((imageUrl, index) => (
                    <div
                        key={index}
                        className="bg-overlay"
                        style={{
                            ...imageStyle,
                            backgroundImage: `url(${imageUrl})`,
                            opacity: currentImageIndex === index ? 1 : 0 // Imposta l'opacità dell'immagine corrente a 1, le altre a 0
                        }}
                    ></div>
                ))}
            </div>
            <div style={{ ...overlayStyle, zIndex: 0 }}></div>
            <div className="container">
                <NavBar />
                {/* Altri contenuti del componente Header */}
            </div>
            <CenterHeader />
            <SubHeader />
        </div>
    );
}

export default Header;
