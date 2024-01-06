import Footer2 from "./Footer2";
import RealHeader from "./RealHeader";
import ImageParagraph from "./ImageParagraph";
import Paragraph from "./Paragraph";
import TopFooter from "./TopFooter";
import paragraphs from "../paragraphs";
import imagepar from "../imagepar";
import MobileSlider from "./MobileSLider";

function ProductsPage1(props) {
    const prodotto = props.product
    return (
        <div>
            <RealHeader />
            <Paragraph title={paragraphs[prodotto].title} text={paragraphs[prodotto].text} />
            
            <Footer2 />
        </div>
    )
}

export default ProductsPage1