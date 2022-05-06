import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from   "react-icons/fa"
import {FaTwitter} from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className=' ml-28 flex flex-col  justify-center  gap-6 absolute bottom-2' >
    <a href='https://linkidin.com'target="_blank"><BsLinkedin/></a>
    <a  href='https://github.com'target="_blank"><FaGithub  /></a>
    <a href='https://twitter.com'target="_blank"><FaTwitter/></a>

    </div>
  )
}

export default HeaderSocials