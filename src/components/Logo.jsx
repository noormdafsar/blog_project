import React from 'react'
import logo from '../assets/blogger.png'

function Logo({width = '100px'}) {
  return (
    <div className='w-11'><img src={logo} alt='logo' /></div>
  )
}

export default Logo