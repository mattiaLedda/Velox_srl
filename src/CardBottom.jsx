import { Link } from "react-router-dom";

function CardBottom({ image, title, text, to }) {
    return (
        <div className="ml-4 cardbottom overflow-hidden">
            <div className="cardbottomfoto">
                <img
                    className="w-100 cardbottomimage"
                    src={image}
                    alt={`Immagine ${title}`}
                />
            </div>
            <div className="cardBbottom d-flex flex-column justify-content-center align-items-center">
                <h6 className="bardtitle">
                    <Link to={to} className="bardtitle">{title}</Link>
                </h6>
                <p className="bardtext">{text}</p>
            </div>
        </div>
    );
}

export default CardBottom;
