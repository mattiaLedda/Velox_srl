import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import CenterHeader from "./CenterHeader";
import SubHeader from "./SubHeader";
import LeftTop from "./LeftTop";
import MobileNavbar from "./MobileNavbar";
import MobileCenterHeader from "./MobileCenterHeader";

const images = [
    "../public/assets/fototetti5.webp",
    "../public/assets/fototetti2.webp",
    "../public/assets/fototetti3.webp"
];


function RealHeader({ title, image }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [zoomed, setZoomed] = useState(true);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1000);


    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        image ? `../public/assets/${image}.jpg` : "../public/assets/coppi.jpg",
        "../public/assets/coppi.jpg",
        "../public/assets/fototetti2.webp",
        "../public/assets/fototetti3.webp"
    ];

    const goToPrev = () => {
        setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
    };

    const goToNext = () => {
        setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
    };

    const goToIndex = (newIndex) => {
        setActiveIndex(newIndex);
    };

    const containerStyle = {
        width: "100vw",
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 1000);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

   

    return (
        <div id="header"  className="position-relative">
            <ol className="carousel-indicators">
                
            </ol>
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                        style={{
                            height: '70vh', // Altezza fissa per il carosello
                            background: ` linear-gradient(to bottom , rgba(30, 30, 30, 0.9) 20%, rgba(128, 128, 128, 0.3) 80% ), url(${image}) center center / cover no-repeat`,
                        }}
                    >
                        {/* Nessun elemento img necessario; l'immagine è di sfondo */}
                    </div>
                ))}
            </div>
            <div className="container-real w-100">
                <div id="pcnav"><LeftTop /></div>
                <div id="mobilenav"><MobileNavbar /></div>
            </div>
            <div id="centerheadcont-real" className="w-100">
                <CenterHeader title={title} />
            </div>
            {isMobileView && (
                <div id="centerheadcontmobile-real" className="d-flex flex-column justify-content-center align-items-center">
                    <MobileCenterHeader title={title} />
                </div>
            )}
            <SubHeader />
        </div>
    );
}

export default RealHeader;
