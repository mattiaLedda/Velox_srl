import threeparag from "../threeparag"
import Footer2 from "./Footer2"
import HalfPicture from "./HalfPicture"
import MidPoli from "./MidPoli"
import Paragraph from "./Paragraph"
import Header from "./PoliHeader"
import ThreePar from "./ThreePar"
import TopFooter from "./TopFooter"

const polipar = {
    title:"Evoluzione delle poliuree",
    text: `Le poliuree rappresentano un salto qualitativo nell'evoluzione dei materiali di costruzione. Nate negli anni '50 come risposta alle esigenze crescenti dell'industria automobilistica, si sono rapidamente affermate come soluzione robusta ed elastica per affrontare sfide come resistenza all'abrasione e impatto. Non passò molto tempo prima che la loro versatilità venisse riconosciuta anche in altri settori.

    L'ingresso nel mondo dell'edilizia ha segnato un punto di svolta. Le poliuree, con la loro capacità di aderire a vari substrati e fornire protezione durevole contro gli agenti atmosferici, sono diventate la scelta ideale per impermeabilizzare tetti, ponti e balconi. Questa rapida applicazione e le prestazioni di lunga durata hanno rivoluzionato le pratiche tradizionali.
    
    Oggi, le poliurea sono più che un semplice materiale: sono il simbolo dell'innovazione continua, offrendo soluzioni efficaci alle sfide moderne nell'edilizia. Con una storia radicata nell'adattamento e nell'evoluzione, le poliuree continuano a definire il futuro dei rivestimenti protettivi.`
}

function Poliuree(){
    return(
        <div>
            <Header/>
            <ThreePar icon={threeparag.first.icon} title={threeparag.first.title} text={threeparag.first.text}/>
            <MidPoli/>
            <HalfPicture/>
            <Paragraph title={polipar.title} text={polipar.text}/>
            <Footer2/>
        </div>
    )
}

export default Poliuree