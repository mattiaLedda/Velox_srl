import React from "react";
import CardCenter from "./CardCenter"; // Importa il CSS di Bootstrap

function CenterCards() {
  return (
    <div className="card-container mt-5">
      <div className="card-wrapper d-flex flex-row flex-wrap justify-content-center w-100">
        <div className="col-md-5 mb-4">
          <CardCenter />
        </div>
        <div className="col-md-5 mb-4">
          <CardCenter />
        </div>
        <div className="col-md-5 mb-4">
          <CardCenter />
        </div>
        <div className="col-md-5 mb-4">
          <CardCenter />
        </div>
      </div>
    </div>
  );
}

export default CenterCards;
