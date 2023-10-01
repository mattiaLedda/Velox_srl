
import './App.css'
import Header from './Header'
import CenterCards from './CenterCards'
import Slider from './Slider'
import BottomCards from './BottomCards'
import TopFooter from './TopFooter'
import BottomFooter from './BottomFooter'
import Lines from './Lines'

function Home() {

  return (
    <div >
      <Header/>
      <CenterCards/>
      <Slider/>
      <Lines/>
      <BottomCards/>
      <TopFooter/>
      <BottomFooter/>
    </div>
  )
}

export default Home
