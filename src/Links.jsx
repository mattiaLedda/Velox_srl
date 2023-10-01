import { Link } from "react-router-dom";
function Links(){
    return(
        <div className="d-flex flex-row align-items-center links">
            <div className="text-white linkgroup">
                <Link className="footerlink">Azienda</Link>
                <Link className="footerlink">Tetti</Link>
                <Link className="footerlink">Poliuree</Link>
            </div>
            <div>
            <div className="d-flex flex-row align-items-center justify-content-center align-center">
                <img
                    src="../public/assets/logo.png"
                    className="logo1"
                    alt="Logo"
                />
                <h6 className="ms-2 text-white">LOGO</h6>
            </div>
            </div>
            <div  className="text-white linkgroup">
                <Link className="footerlink">Preventivo</Link>
                <Link className="footerlink">Contatti</Link>
                <Link className="footerlink">Ultimo</Link>
            </div>
        </div>
    )
}

export default Links