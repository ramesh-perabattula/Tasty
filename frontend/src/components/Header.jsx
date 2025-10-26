import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between border-2 border-amber-950'>
      <div>
        <h1>LOGO</h1>
      </div>
      <div>
        <ul className='flex mx-10'>
          <li className='px-5'><Link to='/'>Home</Link></li>
          <li className='px-5'><Link to="/about">About</Link></li>
          <li className='px-5'><Link to="/contact">Contact</Link></li>
          <li className='px-5'><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header