
function ImageParagraph(props) {
  console.log(props.image)
  return (
    <div className="d-flex flex-row m-0 w-100 align-items-center">
      <div className="w-50 sliderbottom bg-black">
        <h4 id="slidertitolo">
          {props.title}
        </h4>
        <p id="slidertesto">
          {props.text}
        </p>
      </div>
      <div className="w-50" style={{ backgroundImage: `url("../public/assets/${props.image}.jpg`, height: "400px", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>

      </div>
    </div>
  )
}

export default ImageParagraph