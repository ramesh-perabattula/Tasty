import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg px-6 py-4'>
      <div>
        <h1 className='text-3xl font-bold text-white cursor-pointer hover:text-yellow-200 transition-colors'>
          🍔 Tasty
        </h1>
      </div>
      <div>
        <ul className='flex gap-6 items-center'>
          <li>
            <Link 
              to='/' 
              className='text-white hover:text-yellow-200 font-semibold transition-colors duration-200 px-3 py-2 rounded-md hover:bg-orange-700'
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className='text-white hover:text-yellow-200 font-semibold transition-colors duration-200 px-3 py-2 rounded-md hover:bg-orange-700'
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className='text-white hover:text-yellow-200 font-semibold transition-colors duration-200 px-3 py-2 rounded-md hover:bg-orange-700'
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              to="/cart" 
              className='text-white hover:text-yellow-200 font-semibold transition-colors duration-200 px-4 py-2 rounded-md bg-orange-700 hover:bg-orange-800'
            >
              Cart 🛒
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header