import CTA from "./CTA"
import Sawir from "../assets/mee.jpg"
import HeaderSocials from "./HeaderSocials"




const Header = () => {
  return (
    <div className="   ">
     
<div className=""> 
      <div className="ml-96">
        <h5 className="  p-2 text-white font-Poppins font-bold ml-12 ">Hello I'm </h5>
        <h1 className="text-4xl font-Poppins font-bold text-white mt-2">Hameed Apdi</h1>
        <h6 className="  text-light font-Poppins ml-12 mt-2 mb-2"> MernStack Developer</h6>
      </div>
      <CTA/>
      <HeaderSocials/>
      <div className=" ml-96 bg-gradient-to-b from-primary to-secondary  w-60 h-64 rounded-t-full  relative mt-8   ">
        
        {/* <img  className="w-60 h-60 mt-8 rounded-t-full" src={Sawir} alt="me"/> */}
      </div>
      <a href="#contact">Scroll down</a>
      </div>
      
    </div>
  )
}

export default Header