import React from 'react'

const Dropdown = ({ onChange, disabled }) => {
  return (
    <div className='dropdown'>
      <select onChange={onChange} disabled={disabled}>
        <option value='Bubble Sort'>Bubble Sort</option>
        <option value='Selection Sort'>Selection Sort</option>
        <option value='Insertion Sort'>Insertion Sort</option>
        <option value='Merge Sort'>Merge Sort</option>
        <option value='Quick Sort'>Quick Sort</option>
        <option value='Heap Sort'>Heap Sort</option>
      </select>
    </div>
  )
}

export default Dropdown
