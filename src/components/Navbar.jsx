import { useState } from 'react'
import React from 'react'


const Navbar = () => {
  return (
  <ul className='flex bg-oxford-blue'>
    <li className='mr-6 text-5xl' >
      <a className='text-white' href='# '>Test1</a>
    </li>
    <li className='mr-6'>
      <a className='text-white text-3xl' href='# '>Test2</a>
    </li>
    <li className='mr-6'>
      <a className='text-white text-3xl' href='# '>Test3</a>
    </li>
    <li className='mr-6'>
      <a className='text-white text-3xl' href='# '>Test4</a>
    </li>
  </ul>
  )
}

export default Navbar