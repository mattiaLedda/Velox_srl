
function MobileSlider(props) {
    return (
        <div>
            <h4 id="slidertitolo">
                {props.title}
            </h4>
            <div className="d-flex flex-row m-0 w-100 align-items-center">
                <div className="w-100 sliderbottom bg-black">

                    <p id="slidertesto">
                        {props.text}
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default MobileSlider