import CTA from "./CTA"
import Sawir from "../assets/me.png"
import HeaderSocials from "./HeaderSocials"





const Header = () => {
  return (
    <div className="   ">
     
<div className="flex flex-col items-center"> 
      <div className="">
        <h5 className="  p-2 text-white font-Poppins font-bold ml-12 ">Hello I'm </h5>
        <h1 className="text-4xl font-Poppins font-bold text-white mt-2">Hameed Apdi</h1>
        <h6 className="  text-light font-Poppins ml-12 mt-2 mb-2"> MernStack Developer</h6>
      </div>
      <CTA/>
      <div>

      <HeaderSocials/>
      </div>
      <div className=" flex flex-col items-center bg-gradient-to-b from-primary to-transparent mt-48  h-84 rounded-t-full  absolute   w-fit  ">
      
        <img className="h-76 w-48 "  src={Sawir} alt="me"/>
      </div>
      <a href="#contact">Scroll</a>
      </div>
      
    </div>
  )
}

export default Header