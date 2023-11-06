import React from 'react';

function MobileHalfPicture() {
    return (
        <div id="mobilehalfpicture" className="w-100 d-flex flex-row justify-content-center mt-5">
            <div className="w-100 h-100 h-pic-left d-flex flex-column justify-content-center align-items-center p-5">
                <div className="text-center">
                    <h3 className='fs-1'>Vantaggi delle Poliuree nell'Edilizia</h3>
                    <p className="w-75 mx-auto ht-p">
                        Le poliuree sono rivoluzionarie nell'edilizia, offrendo soluzioni resistenti, flessibili e durature. Ecco alcuni dei loro principali vantaggi:
                    </p>
                </div>

                <div className="d-flex flex-row justify-content-center align-items-center h-icons mt-3">
                    <i className="fa-solid fa-shield-alt"></i>
                    <p className="mb-0 ml-2">Impermeabilità e resistenza all'acqua</p>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center h-icons mt-3">
                    <i className="fa-solid fa-thermometer-half"></i>
                    <p className="mb-0 ml-2">Isolamento termico ottimale</p>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center h-icons mt-3">
                    <i className="fa-solid fa-clock"></i>
                    <p className="mb-0 ml-2">Rapida applicazione e asciugatura</p>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center h-icons mt-3">
                    <i className="fa-solid fa-expand-arrows-alt"></i>
                    <p className="mb-0 ml-2">Elevata elasticità e resistenza</p>
                </div>
            </div>
        </div>
    )
}

export default MobileHalfPicture;
