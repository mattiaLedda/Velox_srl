import { Link } from "react-router-dom";
function Links(){
    return(
        <div className="d-flex flex-row align-items-center links">
            <div className="text-white linkgroup">
                <Link className="footerlink">Home</Link>
                <Link className="footerlink">Azienda</Link>
            </div>
            <div>
            <div className="d-flex flex-row align-items-center justify-content-center align-center">
                <img
                    src="../public/assets/logo.webp"
                    className="logo1"
                    alt="Logo"
                />
                <img
                        src="../public/assets/logo2.webp"
                        className="logo22"
                        alt="Logo"
                    />
            </div>
            </div>
            <div  className="text-white linkgroup">
                <Link className="footerlink">Preventivo</Link>
                <Link className="footerlink">Poliuree</Link>
            </div>
        </div>
    )
}

export default Links