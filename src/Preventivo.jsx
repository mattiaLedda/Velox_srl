import BottomFooter from "./BottomFooter"
import Divided from "./Divided"
import HalfPicture from "./HalfPicture"
import Header from "./Header"
import Lines from "./Lines"
import Maps from "./Maps"
import MapTilerMap from "./MapTilerMap"
import TopFooter from "./TopFooter"

function Preventivo(){
    return(
        <div>
            <Header/>
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