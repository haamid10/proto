import CTA from "./CTA"
import Sawir from "../assets/me.png"
import HeaderSocials from "./HeaderSocials"





const Header = () => {
  return (
    <div id="home" className="   ">
     
<div className="r"> 
      <div className="flex flex-col items-center">
        <h5 className="  p-2 text-white font-Poppins font-bold ml-12 text-2xl">Hello I'm </h5>
        <h1 className="  text-6xl m-2 font-Poppins font-bold text-white mt-2">Hameed Apdi</h1>
        <h6 className="  text-light font-Poppins text-xl ml-12 mt-2 mb-2"> MernStack Developer</h6>
      </div>
      <CTA/>
      <div>

      <HeaderSocials/>
      </div>
      <div className=" m-96 bg-gradient-to-b from-primary to-transparent  h-96 rounded-t-full  mt-12  w-fit  ">
      
        <img className="h-96 w-fit  ml-96"  src={Sawir} alt="me"/>
      </div>
      <a href="#contact">Scroll</a>
      </div>
      
    </div>
  )
}

export default Header