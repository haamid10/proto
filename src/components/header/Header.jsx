import CTA from "./CTA"

const Header = () => {
  return (
    <div className=" ml-28 ">
     

      <div className="items-center">
        <h5 className=" text-white font-Poppins font-bold p-1">Hello I'm </h5>
        <h1 className="text-4xl font-bold text-white mt-2">Hameed Apdi</h1>
        <h6 className=" text-light mt-2 mb-2"> MernStack Developer</h6>
      </div>
      <CTA/>
    </div>
  )
}

export default Header