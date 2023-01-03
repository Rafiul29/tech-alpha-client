import React from 'react'

const Footer = () => {
  return (
    <div className='footer text-center text-lg bg-violet-700 py-10 text-violet-50'>
      <p>&copy; {new Date().getFullYear}  
      Tech Alpha. All rights reserved
      </p>
    </div>
  )
}

export default Footer