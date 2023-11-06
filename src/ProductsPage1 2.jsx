import Footer2 from "./Footer2";
import Header from "./Header";
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
            <Header />
            <Paragraph title={paragraphs[prodotto].title} text={paragraphs[prodotto].text} />
            
            <Footer2 />
        </div>
    )
}

export default ProductsPage1