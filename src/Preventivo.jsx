import BottomFooter from "./BottomFooter"
import Divided from "./Divided"
import HalfPicture from "./HalfPicture"
import Header from "./Header"
import Lines from "./Lines"
import Maps from "./Maps"
import MapTilerMap from "./MapTilerMap"
import TopFooter from "./TopFooter"
import SearchStreet from "./searchStreet"
import GoogleMaps from "./GoogleMaps"
import Form from "./Form"
import StepperProva from "./StepperProva"

function Preventivo(){
    return(
        <div>
            <Header/>
            {/* <GoogleMaps/> */}
            <SearchStreet/>
            {/* <Form/> */}
            <StepperProva/>
            <MapTilerMap/>
            <Lines/>
            <HalfPicture/>
            <Divided/>
            <TopFooter/>
            <BottomFooter/>
        </div>
    )
}
export default Preventivo