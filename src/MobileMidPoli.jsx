import React from 'react';

function MobileMidPoli(){
    return(
        <div className="w-100 d-flex flex-column poli-wrap">
            <div id="poli-bid" className="w-100 d-flex flex-column justify-content-center align-items-center">
              <img 
              id="bido"
              src="../src/assets/bido.png"
              className="w-75"
              alt="Immagine contenitori poliurea"/>
            </div>
            <div id="poli-contmobile" className="w-100 d-dlex flex-column justify-content-center align-items-center">
                 <h3 id="poli-title">Dettagli Tecnici delle Poliuree</h3>
                 <p id="poli-p w-75">
                     Le poliuree sono un tipo di polimero che deriva dalla reazione di un isocianato con un ammino. Questo materiale si distingue per la sua elevata resistenza all'usura, all'acqua e ai prodotti chimici. L'applicazione delle poliuree avviene tipicamente attraverso spruzzatori ad alta pressione, garantendo una copertura omogenea e una rapida asciugatura. In generale, l'intero processo di applicazione può essere completato in poche ore. A livello compositivo, le poliuree contengono elastomeri, resine e, in alcuni casi, specifici additivi per potenziarne le proprietà. Questa composizione conferisce alle poliuree la capacità di offrire una barriera efficace contro la corrosione e l'abrasione. Esse possono efficacemente sostituire materiali tradizionali come vernici e rivestimenti epossidici, offrendo superiori prestazioni in termini di durabilità e resistenza. Queste caratteristiche rendono le poliuree ideali per una vasta gamma di applicazioni in edilizia, dall'impermeabilizzazione dei tetti ai rivestimenti dei pavimenti.
                 </p>
                 <button id="poli-butt">Ulteriori Informazioni</button>
            </div>
        </div>
    )
}

export default MobileMidPoli;
