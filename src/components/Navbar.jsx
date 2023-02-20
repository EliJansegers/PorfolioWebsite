import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'



const Navbar = () => {
  return (
    <nav className='p-5 bg-oxford-blue shadow md:flex md:items-center md:justify-between w-full'>
      <div className=" flex justify-center space-x-4">
        <span className='text-platinum text-3xl cursor-pointer md:hidden'>
        {<AiOutlineMenu/>}
        </span>

        <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute md:bg-oxford-blue w-full left-0 md:w-auto 
                          md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
        <li className='mx-4 my-6 md:my-0'>
            <a href="#top" className="text-platinum hover:bg-gray-700 text-base hover:text-orange-web duration-300 px-3 py-2 font-semibold">About me</a>
        </li>
        <li className='mx-4 my-6 md:my-0'>
            <a href="#top" className="text-platinum hover:bg-gray-700 text-base hover:text-orange-web duration-300 px-3 py-2 font-semibold">Projects</a>
        </li>
        <li className='mx-4 my-6 md:my-0'>
            <a href="#top" className="text-platinum hover:bg-gray-700 text-base hover:text-orange-web duration-300 px-3 py-2 font-semibold">Contact</a>
        </li>
        </ul>
      </div> 
    </nav>

  )
}

export default Navbar