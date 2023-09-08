import React from 'react'

const Button = ({ type, name, onClick, disabled }) => {
  return (
    <button
      className='button-85'
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default Button
