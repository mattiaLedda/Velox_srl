function CenterHeader() {

    return (
        <div className="d-flex flex-row align-items-center position-absolute center-cont">
            <div id="centerheader">
                ESPERIENZA <br />  QUALITÀ <br /> DURABILITÀ
            </div>
            <div className="center-head-right d-flex flex-column">
                <h4 className="center-top">
                    Proteggi la tua casa con i nostri tetti <br />
                    resistenti e sostenibili. <br />
                    Forniamo soluzioni di copertura di lunga durata che <br />
                    valorizzano il tuo immobile.
                </h4>
                <button className="p-3 text-white border center-button">Scopri di più</button>
            </div>
        </div>
    )
}

export default CenterHeader;
