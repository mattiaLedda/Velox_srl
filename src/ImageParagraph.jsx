import React, { useState, useEffect } from 'react';

function ImageParagraph(props) {
  const [imagePath, setImagePath] = useState(`../src/assets/${props.image}2.webp`);

  // Funzione per gestire l'errore di caricamento dell'immagine
  const handleImageError = () => {
    setImagePath(`../src/assets/${props.image}.webp`); // Rimuove il "2" se l'immagine con "2" non esiste
  };

  useEffect(() => {
    const img = new Image();
    img.src = imagePath;
    img.onload = () => console.log('Immagine caricata con successo');
    img.onerror = handleImageError;
  }, [props.image]); // Esegue ogni volta che `props.image` cambia

  return (
    <div className="d-flex flex-row m-0 w-100 align-items-center">
      <div className="w-50 sliderbottom bg-black">
        <h4 id="slidertitolo">
          {props.title}
        </h4>
        <p id="slidertesto">
          {props.text}
        </p>
      </div>
      <div className="w-50" style={{ backgroundImage: `url(${imagePath})`, height: "400px", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>

      </div>
    </div>
  );
}

export default ImageParagraph;
