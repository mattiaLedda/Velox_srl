
import './App.css'
import Header from './Header'
import CenterCards from './CenterCards'
import Slider from './Slider'
import BottomCards from './BottomCards'
import TopFooter from './TopFooter'
import BottomFooter from './BottomFooter'
import Lines from './Lines'
import Footer2 from './Footer2'
import MobileLines from './MobileLines'

function Home() {

  return (
    <div >
      <Header />
      <CenterCards />
      <Slider />
      <div id="pclines">
        <Lines />
      </div>
      <div id="mobilelines">
        <MobileLines />
      </div>
      <BottomCards />
      <Footer2 />
    </div>
  )
}

export default Home
