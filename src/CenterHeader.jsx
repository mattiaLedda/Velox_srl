function CenterHeader() {

    return (
        <div className="d-flex flex-row align-items-center position-absolute center-cont">
            <div id="centerheader">
                LOREM <br /> IPSUM  <br /> DOLOR
            </div>
            <div className="center-head-right">
                <h4 className="center-top">Lorem ipsum dolor sit amet  <br /> eccetera eccetera lorem ipsum <br /> dolor sit amet lorem </h4>
                <button onClick={fuckyou} className="p-3 text-white border center-button rounded">Scopri di più</button>
            </div>
        </div>
    )
}

export default CenterHeader