import React from 'react'
import { HomeIcon } from '@heroicons/react/outline'
import { CogIcon } from '@heroicons/react/outline'
import { BookOpenIcon } from '@heroicons/react/outline'
import { UserIcon } from '@heroicons/react/outline'
import { InboxInIcon } from '@heroicons/react/outline'

const Nav = () => {
  return (
    <div  className=' bottom-8 fixed top-2  '>
  
   
      <div className='backdrop-blur-lg bg-nav rounded-lg  flex flex-row  justify-center  gap-5 blur-none opacity-100 top-2 '>
      <a className=' bg-transparent' href='#home'> <HomeIcon   className="text-light w-8 h-16 "/> </a>
      <a  className=' bg-transparent'  href='#about'> <UserIcon  className=" text-light w-8 h-16"/> </a>
      <a   className=' bg-transparent'  href='#expereince'> <BookOpenIcon  className="  text-light w-8 h-16"/> </a>
      <a  className='text-light bg-transparent'   href='#footer'> <CogIcon  className=" w-8 h-16"/> </a>
      <a   className=' bg-transparent'  href='#contact'> <InboxInIcon  className="text-light   w-8 h-16"/> </a>
      </div>
      
    
   


</div>
  )
}

export default Nav