import React from "react";
import CardCenter from "./CardCenter"; 

const cardContents = {
    "Il nostro team": {
        title: "Il nostro team",
        text: "Il nostro team di esperti è specializzato nella realizzazione di tetti resistenti e duraturi. Con anni di esperienza alle spalle, siamo pronti a trasformare le vostre idee in realtà, garantendo un servizio professionale e una grande attenzione ai dettagli. Lavoriamo con passione ed entusiasmo, per offrire soluzioni innovative che soddisfino le esigenze di ogni cliente."
    },
    "Preventivo": {
        title: "Preventivo",
        text: "Offriamo un servizio di preventivo preciso e personalizzato, grazie all'uso di tecnologie avanzate. Tracciamo la superficie del vostro tetto utilizzando Google Maps, permettendovi di selezionare i materiali desiderati. Questo metodo innovativo ci permette di fornire un preventivo dettagliato e accurato, aiutandovi a pianificare il vostro progetto con chiarezza e trasparenza."
    },
    "Velocità": {
        title: "Velocità",
        text: "Comprendiamo l'importanza di rispettare i tempi previsti, ed è per questo che ci impegniamo a lavorare con efficienza e velocità senza compromettere la qualità. Il nostro team esperto è in grado di gestire progetti di qualsiasi dimensione, garantendo una consegna tempestiva e soddisfacendo le vostre aspettative in termini di tempistiche."
    },
    "Materiali": {
        title: "Materiali",
        text: "Utilizziamo solo materiali di alta qualità, garantendo tetti duraturi e resistenti alle intemperie. La nostra vasta gamma di materiali include soluzioni per ogni esigenza e budget. Siamo sempre alla ricerca di nuovi materiali e tecnologie per offrire opzioni sempre più performanti e sostenibili, garantendo un ottimo rapporto qualità-prezzo."
    }
};

function CenterCards() {
  return (
    <div className="card-container mt-5">
      <div className="card-wrapper d-flex flex-row flex-wrap justify-content-center w-100">
        {Object.keys(cardContents).map((key, index) => (
          <div className="col-md-5 mb-4" key={index}>
            <CardCenter title={cardContents[key].title} text={cardContents[key].text} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CenterCards;
