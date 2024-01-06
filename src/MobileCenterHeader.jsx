function MobileCenterHeader({ title }) {
    
    if(title) {
        const upperCaseTitle = title.toUpperCase();
        return (
            <div className="d-flex flex-row align-items-center position-absolute center-cont">
                
                <div id="centerheader" className="m-auto">
                    {upperCaseTitle}
                </div>
            </div>
        );
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center position-absolute center-contmobile" >
            
            <div id="centerheadermobile">
                ESPERIENZA <br /> QUALITÀ <br /> DURABILITÀ
            </div>
 
                <h4 className="center-topmobile">
                    Proteggi la tua casa con i nostri tetti <br />
                    resistenti e sostenibili. <br />
                    Forniamo soluzioni di copertura di lunga durata che <br />
                    valorizzano il tuo immobile.
                </h4>
                <button className="p-3 text-white border center-button">Scopri di più</button>
         
        </div>
    );
}

export default MobileCenterHeader;
