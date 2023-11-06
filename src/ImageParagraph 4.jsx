
function ImageParagraph(props){
    return(
        <div className="d-flex flex-row m-0 w-100 align-items-center">
          <div className="w-50 sliderbottom bg-black">
               <h4 id="slidertitolo">
                {props.title}
               </h4>
               <p id="slidertesto">
                {props.text}
               </p>
          </div>
          <div id="sliderimage2" className="w-50">
            
          </div>
        </div>
    )
}

export default ImageParagraph