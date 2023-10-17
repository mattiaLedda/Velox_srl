import threeparag from "../threeparag"
import BottomFooter from "./BottomFooter"
import MidPoli from "./MidPoli"
import Header from "./PoliHeader"
import ThreePar from "./ThreePar"
import TopFooter from "./TopFooter"

function Poliuree(){
    return(
        <div>
            <Header/>
            <ThreePar icon={threeparag.first.icon} title={threeparag.first.title} text={threeparag.first.text}/>
            <MidPoli/>
            <TopFooter/>
            <BottomFooter/>
        </div>
    )
}

export default Poliuree