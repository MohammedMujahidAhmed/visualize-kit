import React from 'react'

export const LsBox = ({a,index,array,currIndex,foundAt}) => {
  return (
    <div className='w-[50px] text-center my-3'>
        {currIndex == index ?
            <div className='font-bold text-xl bg-gradient-to-r from-rose-400 animate-ping to-red-500 p-3 w-[px] h-[50px] border rounded-full '>
                {a}
            </div>
            :
            (foundAt == index ?
                <div className='font-bold text-xl  bg-gradient-to-r from-lime-400 to-lime-500 animate-bounce p-3 w-[px] h-[50px] border rounded-full '>
                    {a}
                </div>:
                <div className='font-bold text-xl  p-3 w-[px] h-[50px] border rounded-full bg-gradient-to-r from-blue-200 to-cyan-200'>
                    {a}
                </div>
            )
        }
        <div>
            <div className='text-md w-[50px] h-[50px] text-center'>
                {index}
            </div>
        </div>
        {currIndex == index ?
            <div className='font-semibold w-[50px] h-[50px] text-center text-red-600'>
                i
            </div>
            :
            (foundAt == index ?
                <div className='font-bold w-[50px] h-[50px] text-center text-green-900'>
                    f
                </div>:
                <div className='font-semibold w-[50px] h-[50px] text-center text-white'>
                </div>
            )
        }
    </div>
  )
}
