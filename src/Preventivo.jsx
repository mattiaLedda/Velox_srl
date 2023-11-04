import Footer2 from "./Footer2"
import Divided from "./Divided"
import HalfPicture from "./HalfPicture"
import Header from "./Header"
import Lines from "./Lines"
import Maps from "./Maps"
import MapTilerMap from "./MapTilerMap"
import TopFooter from "./TopFooter"
import SearchStreet from "./searchStreet"
import Form from "./Form"
import StepperProva from "./StepperProva"
import MapComponent from "./Maps2"

import Paragraph from "./Paragraph"
import paragraphs from "../paragraphs"
import ImageParagraph from "./ImageParagraph"
import imagepar from "../imagepar"
import ProductsPage1 from "./ProductsPage1"
import { useEffect } from "react"

import GoogleMaps from "./GoogleMaps"


function Preventivo(){
    
    return(
        <div>
            <Header title="PREVENTIVO"/>
            <GoogleMaps/>
            <StepperProva/>
            <Footer2/>
        </div>
    )
}
export default Preventivo