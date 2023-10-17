import BottomFooter from "./BottomFooter"
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

function Preventivo(){
    return(
        <div>
            <Header/>
            {/* <GoogleMaps/> */}
            
            <MapComponent/>
            <Lines/>
            <HalfPicture/>
            <Divided/>
            <Paragraph title={paragraphs.preventivo.title} text={paragraphs.preventivo.text}/>
            <ImageParagraph title={imagepar.preve.title} text={imagepar.preve.text}/>
            <TopFooter/>
            <BottomFooter/>
        </div>
    )
}
export default Preventivo