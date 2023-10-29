import { Link } from "react-router-dom";

function CardBottom({ image, title, text, to }) {
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
                <h6 className="bardtitle">
                    <Link to={to} className="bardtitle">{title}</Link>
                </h6>
                <p className="bardtext">{text}</p>
            </div>
        </div>
    );
}

export default CardBottom;
