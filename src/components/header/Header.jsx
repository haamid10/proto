import CTA from "./CTA"
import Sawir from "../assets/mee.jpg"
import HeaderSocials from "./HeaderSocials"




const Header = () => {
  return (
    <div className="  ml-96 ">
     

      <div className="items-center">
        <h5 className=" text-white font-Poppins font-bold p-1">Hello I'm </h5>
        <h1 className="text-4xl font-bold text-white mt-2">Hameed Apdi</h1>
        <h6 className=" text-light mt-2 mb-2"> MernStack Developer</h6>
      </div>
      <CTA/>
      <div className=" bg-gradient-to-b from-primary to-secondery  w-60 h-64 rounded-t-full   mt-8 mb-6 ">
        {/* <img  className="w-60 h-60 mt-8 rounded-t-full" src={Sawir} alt="me"/> */}
      </div>
      <a href="#contact">Scroll down</a>
      <HeaderSocials/>
    </div>
  )
}

export default Header