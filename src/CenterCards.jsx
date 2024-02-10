import React from "react";
import CardCenter from "./CardCenter"; 

const cardContents = {
  "Materiali": {
    title: "Materiali",
    text: (
      <span>
        Utilizziamo solo <span style={{ fontWeight: 900 }}>materiali di alta qualità</span>, garantendo tetti duraturi e resistenti alle intemperie. Come <span style={{ fontWeight: 900 }}>installatori certificati BMI</span>, ci impegniamo a fornire soluzioni all'avanguardia per l'isolamento e la protezione delle strutture, inclusa l'installazione di <span style={{ fontWeight: 900 }}>Isotecnica</span>, per garantire il massimo delle performance e della sostenibilità.
      </span>
    )},
  "Il nostro team": {
      title: "Il nostro team",
      text: (<span>Il nostro team di esperti è specializzato nella realizzazione di tetti resistenti e duraturi. Con <span style={{ fontWeight: 900 }}>anni di esperienza</span> alle spalle, siamo pronti a trasformare le vostre idee in realtà, garantendo un servizio professionale e una grande attenzione ai dettagli. Lavoriamo con passione ed entusiasmo, per offrire <span style={{ fontWeight: 900 }}>soluzioni innovative</span> che soddisfino le esigenze di ogni cliente.</span>)
  },
  "Preventivo": {
      title: "Preventivo",
      text: (<span>Offriamo un servizio di <span style={{ fontWeight: 900 }}>preventivo grauito</span> e personalizzato, grazie all'uso di tecnologie avanzate. Tracciamo la superficie del vostro tetto utilizzando Google Maps, permettendovi di selezionare i materiali desiderati. Questo metodo <span style={{ fontWeight: 900 }}>innovativo</span> ci permette di fornire un preventivo dettagliato e accurato, aiutandovi a pianificare il vostro progetto con chiarezza e trasparenza.</span>)
  },
  "Velocità": {
      title: "Velocità",
      text: (<span>Comprendiamo l'importanza di rispettare i tempi previsti, ed è per questo che ci impegniamo a lavorare con <span style={{ fontWeight: 900 }}>efficienza e velocità</span> senza compromettere la qualità. Il nostro team esperto è in grado di gestire progetti di qualsiasi dimensione, garantendo una <span style={{ fontWeight: 900 }}>consegna tempestiva</span> e soddisfacendo le vostre aspettative in termini di tempistiche.</span>)
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
