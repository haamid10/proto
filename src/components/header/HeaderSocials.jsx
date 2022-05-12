import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from   "react-icons/fa"
import {FaTwitter} from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className='ml-28 flex flex-col justify-start absolute' >
    <a className='p-8 gap-8 ' href='https://linkidin.com'target="_blank"><BsLinkedin className=' text-primary h-8 w-6' /></a>
    <a className='p-8 mt-12' href='https://github.com'target="_blank"><FaGithub className=' text-primary h-8 w-6'  /></a>
    <a className='p-8 gap-8 mt-12' href='https://twitter.com'target="_blank"><FaTwitter className='  text-primary h-8 w-6   '/></a>

    </div>
  )
}

export default HeaderSocials