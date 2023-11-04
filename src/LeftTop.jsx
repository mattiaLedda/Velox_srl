import { Link } from "react-router-dom";

function LeftTop() {
    return (
        <div id="navbar" className="d-flex flex-row align-items-center justify-content-between p-3 ">
        <div className="d-flex flex-row align-items-center text-white lefttop">
            <Link className="homelink" to="/">
                <div className="d-flex flex-row align-items-center">
                    <img
                        src="../public/assets/logo.webp"
                        className="logo"
                        alt="Logo"
                    />
                    <img
                        src="../public/assets/logo2.webp"
                        className="logo2"
                        alt="Logo"
                    />
                </div>
            </Link>

            <div className="d-flex flex-row link-cont">
                <div className="dropdown">
                    <Link className="link linktop dropdown-toggle" data-toggle="dropdown">Azienda</Link>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/">Home</Link>
                        <Link className="dropdown-item" to="/contatti">Contatti</Link>
                    </div>
                </div>

                <div className="dropdown">
                    <Link className="link linktop dropdown-toggle" to="/tegole" data-toggle="dropdown">Servizi</Link>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/coppi">Coppi</Link>
                        <Link className="dropdown-item" to="/marsigliesi">Tegole marsigliesi</Link>
                        <Link className="dropdown-item" to="/portoghesi">Tegole portoghesi</Link>
                        <Link className="dropdown-item" to="/coibentati">Pannelli coibentati</Link>
                        <Link className="dropdown-item" to="/lamiera">Lamiera</Link>
                        <Link className="dropdown-item" to="/lineevita">Linee vita</Link>
                        <Link className="dropdown-item" to="/struttura">Struttura in legno</Link>
                        <Link className="dropdown-item" to="/cappotto">Cappotto termico</Link>
                        <Link className="dropdown-item" to="/insonorizzazione">Insonorizzazione</Link>

                    </div>
                </div>

                <div className="dropdown">
                    <Link className="link linktop dropdown-toggle" data-toggle="dropdown">Portfolio</Link>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/sottoservizio5">Sottoservizio 5</Link>
                        <Link className="dropdown-item" to="/sottoservizio6">Sottoservizio 6</Link>
                    </div>
                </div>

                <div className="dropdown">
                    <Link className="link linktop dropdown-toggle" to="/poliuree" data-toggle="dropdown">Poliuree</Link>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/sottoservizio7">Sottoservizio 7</Link>
                        <Link className="dropdown-item" to="/sottoservizio8">Sottoservizio 8</Link>
                    </div>
                </div>

                <div className="dropdown">
                    <Link className="link linktop dropdown-toggle" to="/preventivo" data-toggle="dropdown">Preventivo</Link>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/sottoservizio9">Sottoservizio 9</Link>
                        <Link className="dropdown-item" to="/sottoservizio10">Sottoservizio 10</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default LeftTop;
