function CardCenter({ title, text }) {
    return (
        <div id="center-card">
            <h3 className="center-card-title">
                {title}
            </h3>
            <p className="text-align-center centercardpar">
                {text}
            </p>
            <button className="center-card-button">Scopri di più</button>
        </div>
    );
}

export default CardCenter