import LeftTop from "./LeftTop"
import RightTop from "./RightTop"

function NavBar(){
    return(
        <div id="navbar" className="d-flex flex-row align-items-center justify-content-between p-3 ">
          <LeftTop/>
          <RightTop/>
        </div>
    )
}

export default NavBar