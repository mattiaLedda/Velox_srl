function Paragraph(props) {
    return (
        <div className="d-flex align-items-center justify-content-center m-5">
            <div className="text-center w-75">
                <h3 className="fs-1">{props.title}</h3>
                <p className="text-start fs-1 mt-5">{props.text}</p>
            </div>
        </div>
    )
}

export default Paragraph;
