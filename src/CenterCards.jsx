import React from "react";
import CardCenter from "./CardCenter"; // Importa il CSS di Bootstrap

function CenterCards() {
  return (
    <div className="card-container">
      <p className="custom-text overflow-hidden">
        VELOX VELOX VELOX VELOX VELOX VELOX VELOX VELOX VELOX
      </p>
      <div className="card-wrapper row justify-content-center w-100">
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
