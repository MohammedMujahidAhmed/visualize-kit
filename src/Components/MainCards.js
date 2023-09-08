import React from 'react'
import { Card } from './Card'
import { Link } from 'react-router-dom'

export const MainCards = () => {
    let lorem = "Here we will include the desc we wanted to include about the card on hover "
  return (
    <div className='bg-gradient-to-b from-slate-100 to-slate-200 p-4 h-screen flex justify-center items-center'>
        <div className='max-w-[1100px] m-auto grid grid-cols-3 gap-10'>
            <Link to='/DataStructure'>
                <Card name={'Data Structures'} desc={lorem}/>
            </Link>
            <Link to='/Algorithms'>
                <Card name={'Algorithms'} desc={lorem}/>
            </Link>
            <Link to='/MachineLearning'>
                <Card name={'Machine learning'} desc={lorem}/>
            </Link>
        </div>
    </div>
  )
}
