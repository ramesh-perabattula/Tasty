import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between border-2 border-amber-950'>
      <div>
        <h1>LOGO</h1>
      </div>
      <div>
        <ul className='flex mx-10'>
          <li className='px-5'>Home</li>
          <li className='px-5'>About</li>
          <li className='px-5'>Contact</li>
          <li className='px-5'>cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header