import { Link } from "react-router-dom";

function LeftTop() {
    return (
        <div className="d-flex flex-row justify-content-between align-items-center text-white g-3 w-50">
            <div className="d-flex flex-row align-items-center">
                <img
                    src="../public/assets/logo.svg.png"
                    className="logo"
                    alt="Logo"
                />
                <h1 className="fs-1 ms-2">LOGO</h1>
            </div>

            <div className="d-flex flex-row link-cont">
                <Link>Azienda</Link>
                <Link to="/tegole">Tetti</Link>
                <Link>Insonorizzazione</Link>
                <Link>Poliuree</Link>
                <Link>Preventivo</Link>
            </div>
        </div>
    )
}

export default LeftTop;
