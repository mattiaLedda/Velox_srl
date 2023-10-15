import { Link } from "react-router-dom";

function LeftTop() {
    return (
        <div className="d-flex flex-row align-items-center text-white lefttop">
            <Link className="homelink" to="/">
            <div className="d-flex flex-row align-items-center">
                <img
                    src="../public/assets/logo.png"
                    className="logo"
                    alt="Logo"
                />
                <img
                    src="../public/assets/logo2.png"
                    className="logo2"
                    alt="Logo"
                />
            </div>
            </Link>

            <div className="d-flex flex-row link-cont">
                <Link className="link linktop">Azienda</Link>
                <Link className="link linktop" to="/tegole">Tetti</Link>
                <Link className="link linktop">Insonorizzazione</Link>
                <Link className="link linktop" to="/poliuree">Poliuree</Link>
                <Link className="link linktop" to="/preventivo">Preventivo</Link>
            </div>
        </div>
    )
}

export default LeftTop;
