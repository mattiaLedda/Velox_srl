import { Link } from "react-router-dom";

function SubHeader() {
    return (
        <div id="subheader" className="position-absolute">
            <p className="topfootertext">
            Esplora le nostre soluzioni di copertura durature. Contattaci o richiedi un preventivo sul nostro sito web, e scopri come possiamo trasformare e proteggere il tuo spazio con eleganza ed efficienza.
            </p>

            <div className="d-flex flex-row nav-buttons">
                <Link to="/contatti"> <button id="button1" className="p-2">Contattaci</button></Link>
                <Link to="/preventivo"><button className="button p-2" id="button2">Preventivo</button></Link>
            </div> 

        </div>

    )
}

export default SubHeader