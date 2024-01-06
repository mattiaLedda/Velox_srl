import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        "../public/assets/fototetti1.webp",
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

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                {images.map((image, index) => (
                    <li
                        key={index}
                        data-target="#carouselExampleIndicators"
                        data-slide-to={index}
                        className={index === activeIndex ? 'active' : ''}
                        onClick={() => goToIndex(index)}
                    />
                ))}
            </ol>
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                        style={{
                            height: '500px', // Altezza fissa per il carosello
                            background: `url(${image}) center center / cover no-repeat` // Adatta e centra l'immagine
                        }}
                    >
                        {/* Nessun elemento img necessario; l'immagine è di sfondo */}
                    </div>
                ))}
            </div>
            <a className="carousel-control-prev" role="button" onClick={goToPrev}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" role="button" onClick={goToNext}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Carousel;
