function Lines() {
    return (
        <div className=" w-100 lines-wrap d-flex flex-column">
            <h3 className="w-100 text-center lines-title">Esperienza, Qualità, Durabilità</h3>
            <div className="w-100 lines-outcont">
                <div className="lines-incont d-flex flex-column">
                    <div className="d-flex flex-row lines-cont">
                        <div className="d-flex flex-row">
                            <i className="fa-solid fa-tools"></i>
                            <h5 className="lines-h">Esperienza Comprovata</h5>
                        </div>
                        <p className="w-75 lines-p">
                            Con anni di esperienza nel settore, la nostra competenza è la vostra garanzia. 
                            La maestria artigianale e l'attenzione ai dettagli ci permettono di realizzare tetti 
                            che soddisfano e superano le aspettative. La nostra squadra esperta è dedicata a fornire 
                            soluzioni di copertura ottimali, personalizzate secondo le esigenze specifiche di ogni cliente.
                        </p>
                    </div>
                    <div className="d-flex flex-row lines-cont">
                        <div className="d-flex flex-row">
                            <i className="fa-solid fa-star"></i>
                            <h5 className="lines-h">Qualità Ineguagliabile</h5>
                        </div>
                        <p className="w-75 lines-p">
                            Utilizziamo solo materiali di alta qualità che assicurano durata e resistenza. 
                            La nostra priorità è fornire un lavoro di qualità che si traduce in un investimento 
                            duraturo per la vostra casa. L'impegno nella selezione dei materiali e nelle tecniche 
                            di costruzione avanzate garantisce un risultato finale esteticamente gradevole e resistente.
                        </p>
                    </div>
                    <div className="d-flex flex-row lines-cont">
                        <div className="d-flex flex-row">
                            <i className="fa-solid fa-clock"></i>
                            <h5 className="lines-h">Durabilità Certificata</h5>
                        </div>
                        <p className="w-75 lines-p">
                            I nostri tetti sono costruiti per resistere agli elementi e durare nel tempo. 
                            La durabilità è una promessa che manteniamo, assicurando che il vostro tetto 
                            rimanga robusto ed esteticamente gradevole per anni a venire. Una soluzione di 
                            copertura di lunga durata che vi risparmierà tempo e risorse nel lungo termine.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lines;
