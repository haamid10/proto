import React from 'react'
import { HomeIcon } from '@heroicons/react/outline'
import { CogIcon } from '@heroicons/react/outline'
import { BookOpenIcon } from '@heroicons/react/outline'
import { UserIcon } from '@heroicons/react/outline'
import { InboxInIcon } from '@heroicons/react/outline'

const Nav = () => {
  return (
    <div  className='ml-96 w-64 bottom-4  fixed'>
  
   
      <div className='bg-light  backdrop-blur-lg rounded-lg mb-16 flex flex-row  gap-5 blur-none opacity-100 top-2 '>
      <a className=' bg-transparent' href='#home'> <HomeIcon  className=" w-8 h-16 "/> </a>
      <a  className=' bg-transparent'  href='#about'> <UserIcon  className=" blur-none w-8 h-16"/> </a>
      <a   className=' bg-transparent'  href='#expereince'> <BookOpenIcon  className=" w-8 h-16"/> </a>
      <a  className=' bg-transparent'   href='#footer'> <CogIcon  className=" w-8 h-16"/> </a>
      <a   className=' bg-transparent'  href='#contact'> <InboxInIcon  className="   w-8 h-16"/> </a>
      </div>
      
    
   


</div>
  )
}

export default Nav