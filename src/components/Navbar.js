import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'


const Navbar = () => {
  return (
    <div className='navbar-bg  bg-violet-500 text-violet-50 h-20  flex justify-center items-center'>
      <div className='navbar container  mx-auto flex justify-between items-center'>
        <div className='left'>
          <span className='text-xl font-semibold '>tech
          <span className='text-orange-500'>Alpha</span></span>
      </div>
        <div className='right flex items-center gap-5'>
          <Link to="/" className='nav-link'>Home</Link>
          <Link to="/products" className='nav-link  '>Products</Link>
          <Link to="/cart">
            <span className='cart-icons relative'>
              <BsCart3 />
              <span className='cart-counter absolute -top-3 -right-3 text-x5 bg-orange-600 h-5 w-5 rounded-full flex items-center justify-center font-me'> 10</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar