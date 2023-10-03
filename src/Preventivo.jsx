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

function Preventivo(){
    return(
        <div>
            <Header/>
            {/* <GoogleMaps/> */}
            <SearchStreet/>
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