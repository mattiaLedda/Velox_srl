import Footer2 from "./Footer2";
import RealHeader from "./RealHeader";
import ImageParagraph from "./ImageParagraph";
import Paragraph from "./Paragraph";
import TopFooter from "./TopFooter";
import paragraphs from "../paragraphs";
import imagepar from "../imagepar";
import MobileSlider from "./MobileSLider";
import Carousel from "./Carousel";

function ProductsPage1(props) {
    const prodotto = props.product
    return (
        <div>
            <RealHeader title={paragraphs[prodotto].title} />
            <Paragraph title={paragraphs[prodotto].title} text={paragraphs[prodotto].text} />
            <div id="pcslider">
                <ImageParagraph title={imagepar[prodotto].title} text={imagepar[prodotto].text} />
            </div>
            <div id="mobileslider">
                <MobileSlider title={imagepar[prodotto].title} text={imagepar[prodotto].text} />
            </div>
            <h3 className='w-100 text-center car-title'>I nostri lavori</h3>
            <Carousel />
            <Footer2 />
        </div>
    )
}

export default ProductsPage1