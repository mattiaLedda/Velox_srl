function MobileCenterHeader({ title }) {
    const getFontSizeStyle = () => {
        console.log(title)
        // Utilizzo di window.innerWidth per controllare la larghezza dello schermo
        const screenWidth = window.innerWidth;
        const isMobile = screenWidth < 600; // Ad esempio, consideriamo 'mobile' uno schermo sotto i 768px
        if(title == "Insonorizzazione" && isMobile) {
            return {fontSize: "32px"};
        } else {
            return {fontSize: "50px"};
        }
    };
    if(title) {
        const fontSizeStyle = getFontSizeStyle();
        const upperCaseTitle = title.toUpperCase();
        return (
            <div className="d-flex flex-row align-items-center position-absolute center-cont">
                
                <div id="centerheader" className="m-auto" style={fontSizeStyle}>
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
