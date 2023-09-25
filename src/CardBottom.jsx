function CardBottom({ image, title, text }) {
    return (
      <div className="cardbottom overflow-hidden">
        <div className="cardbottomfoto">
          <img
            className="w-100 cardbottomimage"
            src={image}
            alt={`Immagine ${title}`}
          />
        </div>
        <div className="cardBbottom">
          <h6 className="bardtitle">{title}</h6>
          <p className="bardtext">{text}</p>
        </div>
      </div>
    );
  }
  
  export default CardBottom;
  