import React, { useState } from 'react'

const Slider = ({ onChange, disabled }) => {
  const [currVal,setCurrVal] = useState(50);
  return (
    <div className='bg-gradient-to-r from-slate-700 to-slate-700 w-fit px-3 py-1 text-white rounded-2xl'>
        <div className=' flex flex-row space-x-2' onChange={onChange} >
          <label htmlFor='slow' current-speed='Slow' onClick={()=>{setCurrVal(80)}} className={ currVal == 80 ? 'bg-gradient-to-r from-slate-500 to-slate-500 rounded-2xl px-2' : ''}>
            <input
              type='radio'
              name='speed'
              id='slow'
              value={80}
              disabled={disabled}
              className='opacity-0 hidden'
            />
            <span>0.5x</span>
          </label>
          <label htmlFor='medium' current-speed='Medium' onClick={()=>{setCurrVal(50)}} className={ currVal == 50 ? 'bg-gradient-to-r from-slate-500 to-slate-500 rounded-2xl px-2' : ''}>
            <input
              type='radio'
              name='speed'
              id='medium'
              value={50}
              defaultChecked
              disabled={disabled}
              className='opacity-0 hidden'
            />
            <span>1x</span>
          </label>
          <label htmlFor='fast' current-speed='Fast' onClick={()=>{setCurrVal(5)}} className={ currVal == 5 ? 'bg-gradient-to-r from-slate-500 to-slate-500 rounded-2xl px-2' : ''}>
            <input
              type='radio'
              name='speed'
              id='fast'
              value={5}
              disabled={disabled}
              className='opacity-0 hidden'
            />
            <span>2x</span>
          </label>
          {/* <div className='slider-position'></div> */}
        </div>
    </div>
  )
}

export default Slider
