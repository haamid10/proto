import React from 'react'
import { HomeIcon } from '@heroicons/react/solid'
import { CogIcon } from '@heroicons/react/solid'
import { BookOpenIcon } from '@heroicons/react/solid'
import { UserIcon } from '@heroicons/react/solid'
import { InboxInIcon } from '@heroicons/react/solid'

const Nav = () => {
  return (
    <div  className=' bottom-8 fixed top-2 flex flex-col justify-center items-center ml-96 bottom-6 mt-60 p-2 '>
  
   
      <div className='backdrop-blur-lg bg-nav rounded-lg  m-2 p-2 flex flex-row  justify-center items-center gap-5 blur-none opacity-100 mt-96 bottom-4 ml-72 '>
      <a className=' bg-transparent' href='#home'> <HomeIcon   className="text-light w-6 h-16 "/> </a>
      <a  className=' bg-transparent'  href='#about'> <UserIcon  className=" text-light w-6 h-16"/> </a>
      <a   className=' bg-transparent'  href='#expereince'> <BookOpenIcon  className="  text-light w-6 h-16"/> </a>
      <a  className='text-light bg-transparent'   href='#footer'> <CogIcon  className=" w-6 h-16"/> </a>
      <a   className=' bg-transparent'  href='#contact'> <InboxInIcon  className="text-light   w-6 h-16"/> </a>
      </div>
      
    
   


</div>
  )
}

export default Nav