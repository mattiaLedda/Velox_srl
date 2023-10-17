
function ThreePar(props) {
    return (
        <div className="w-100 three-wrap">
            <h3 className="w-100 text-center three-title">Lorem ipsum dolor</h3>
            <div className="d-flex flex-row three-cont">
                <div className="d-flex flex-column align-items-center threecard">
                    <i class={props.icon}></i>
                    <h4>{props.title}</h4>
                    <p className="three-p">{props.text}  </p>
                </div>
                <div className="d-flex flex-column align-items-center threecard three-center">
                    <i class={props.icon}></i>
                    <h4>{props.title}</h4>
                    <p className="three-p">{props.text}  </p>
                </div>
                <div className="d-flex flex-column align-items-center threecard">
                    <i class={props.icon}></i>
                    <h4>{props.title}</h4>
                    <p className="three-p">{props.text}  </p>
                </div>
            </div>
        </div>
    )
}
export default ThreePar