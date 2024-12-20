import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='bg-black shadow-md text-white'>
      <div className='flex gap-4 justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold flex flex-wrap text-sm sm:text-xl'>
            <span className='text-orange-600'>Seamless</span>
            <span>Ventures</span>
          </h1>
        </Link>

        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input type='text' placeholder='Search...' className='bg-transparent outline-none w-24 sm:w-64'/>
          <FaSearch className='cursor-pointer text-black'/>
        </form>

        <ul className='sm:flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline hover:underline underline-offset-4 cursor-pointer'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline hover:underline underline-offset-4 cursor-pointer'>About</li>
          </Link>
          <Link to='/sign-in'>
            <li className='sm:inline hover:underline underline-offset-4 cursor-pointer'>Sign in</li>
          </Link>
        </ul>
      </div>
      
    </div>
  )
}

export default Header