import React, { useState } from 'react'
import sampleImage from '../assects/sampleCardCover.jpg'

export const Card = ({name,desc}) => {
    
    const [isHovering, setIsHovering] = useState(false);
    
    const handleMouseOver = () => {
        setIsHovering(true);
    };
    
    const handleMouseOut = () => {
        setIsHovering(false);
    };

  return (
    <div className='border rounded-lg w-[300px] h-[250px] flex flex-col justify-center items-center shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:scale-125 duration-500 p-2'
        style={{backgroundImage:`url(${sampleImage})`}}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
    >
        <p className='text-3xl font-bold text-white'>{name}</p>
        {
            isHovering && (
                <p className='hover:flex  font-semibold text-center'>{desc}</p>
            )
        }
    </div>
  )
}
