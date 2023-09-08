import React from 'react'
import { Card } from '../Components/Card'
import { NavBar } from '../Components/NavBar'
import { Link } from 'react-router-dom'

export const Algorithms = () => {
    let lorem = "Here we will include the desc we wanted to include about the card on hover "
  return (
    <div className='bg-gradient-to-b from-slate-100 to-slate-200 min-h-screen'>
        <NavBar/>
        <div className='max-w-[1100px] m-auto'>
            <h1 className='text-[40px] font-extrabold  text-center'>Algorithms</h1>
            <div className='grid grid-cols-3'>
                <Link to='/Algorithms/LinearSearch'>
                    <Card name='Linear Search' desc={lorem}/>
                </Link>
                <Link to='/Algorithms/BinarySearch'>
                    <Card name='Binary Search' desc={lorem}/>
                </Link>
                <Link to='/Algorithms/Sorting'>
                    <Card name='Sorting' desc={lorem}/>
                </Link>
            </div>
        </div>
    </div>
  )
}
