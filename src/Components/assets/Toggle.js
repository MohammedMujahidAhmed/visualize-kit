import React, { useState } from 'react'
import { FiBell , FiBellOff} from "react-icons/fi";

const Toggle = ({ context, soundState, onChange, disabled }) => {
  // const [soundFlage,setSoundFlage] = useState()
  return (
    <div className='flex flex-row items-center space-x-2'>
      <div onChange={onChange}>
        <label className='toggle-switch'>
          <input type='checkbox' disabled={disabled} defaultChecked />
          <span className='slider round'></span>
        </label>
        {/* <span className='sound-state'>{soundState}</span> */}
      </div>
      <div>
        {
          soundState ? <FiBell className='text-xl text-green-600'/> : <FiBellOff className='text-xl text-red-700'/>
        }
      </div>
    </div>
  )
}

export default Toggle
