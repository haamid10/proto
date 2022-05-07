import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from   "react-icons/fa"
import {FaTwitter} from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className='  mr-96 relative gap-12 top-28 mb-12 p-5 w-4 h-8 ' >
    <a className='s gap-4 bg-primary' href='https://linkidin.com'target="_blank"><BsLinkedin /></a>
    <a className='p-2 gap-4' href='https://github.com'target="_blank"><FaGithub  /></a>
    <a className='p-2 gap-4' href='https://twitter.com'target="_blank"><FaTwitter/></a>

    </div>
  )
}

export default HeaderSocials