import BottomFooter from "./BottomFooter";
import Header from "./Header";
import ImageParagraph from "./ImageParagraph";
import Paragraph from "./Paragraph";
import TopFooter from "./TopFooter";
import paragraphs from "../paragraphs";
import imagepar from "../imagepar";

function ProductsPage1(props){
    const prodotto = props.product
    return(
        <div>
            <Header/>
            <Paragraph title={paragraphs[prodotto].title} text={paragraphs[prodotto].text}/>
            <ImageParagraph title={imagepar[prodotto].title} text={imagepar[prodotto].text}/>
            <TopFooter/>
            <BottomFooter/>
        </div>
    )
}

export default ProductsPage1