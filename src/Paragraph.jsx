function Paragraph(props) {
    return (
        <div className="d-flex align-items-center justify-content-center  paragCont">
            <div className="text-center w-50">
                <h3 className="fs-1">{props.title}</h3>
                <p className="text-start mt-5 parag-text">{props.text}</p>
            </div>
        </div>
    )
}

export default Paragraph;
