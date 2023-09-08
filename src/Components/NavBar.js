import React from 'react'
import './styles/NavBar.css'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='bg-navbar p-2 w-full my-1'>
        <div className='max-w-[1100px] m-auto'>
          <Link to='/'> 
            <h1 className='text-white text-3xl font-bold'>Visualize Bro</h1>
          </Link>
        </div>
    </div>
  )
}
