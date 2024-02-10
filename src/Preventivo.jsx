import Footer2 from "./Footer2"
import Divided from "./Divided"
import HalfPicture from "./HalfPicture"
import RealHeader from "./RealHeader"
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
import { useEffect, useState } from "react"

import GoogleMaps from "./GoogleMaps"


function Preventivo(){
    const [googleMapsData, setGoogleMapsData] = useState(null);

    const handleGoogleMapsDataChange = (data) => {
        setGoogleMapsData(data);
    };

    useEffect(()=>{
        console.log(googleMapsData)
    },[])

    useEffect(()=>{
        console.log(googleMapsData)
    },[googleMapsData])
    
    return(
        <div>
            <RealHeader title="PREVENTIVO" />
            <GoogleMaps onGoogleMapsDataChange={handleGoogleMapsDataChange} />
            {   googleMapsData &&
                <StepperProva googleMapsData={googleMapsData} style={{display: googleMapsData !== null ? "block" : "none"}} />
            }
            <Footer2 />
        </div>
    )
}
export default Preventivo