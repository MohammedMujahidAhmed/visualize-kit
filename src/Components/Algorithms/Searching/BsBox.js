import React from 'react'

export const BsBox = ({a,index,array,lowElement,midElement,highElement,foundAt}) => {
  return (
    <div>
        <div className='w-[50px] text-center my-3'>
            {
                midElement == index && (foundAt || foundAt == 0)
                ?
                    <div className='font-bold text-xl  bg-gradient-to-r from-lime-400 to-lime-500 animate-bounce p-3 w-[px] h-[50px] border rounded-full '>
                            {a}
                    </div>
                :
                    (   midElement == index
                        ?
                            <div className='font-bold text-xl  p-3 w-[px] h-[50px] border rounded-full bg-gradient-to-r from-rose-400 to-red-500'>
                                {a}
                            </div>
                        :
                            <div></div>
                    )
            }
            {
                lowElement == index && midElement != index
                ?
                    <div className='font-bold text-xl  p-3 w-[px] h-[50px] border rounded-full bg-gradient-to-r from-amber-400 to-yellow-300'>
                        {a}
                    </div>
                :   (
                        highElement == index && midElement != index
                        ?
                            <div className='font-bold text-xl  p-3 w-[px] h-[50px] border rounded-full bg-gradient-to-r from-amber-400 to-yellow-300'>
                                {a}
                            </div>
                        :
                            (
                                midElement == index 
                                ?
                                    <div></div>
                                :
                                    <div className='font-bold text-xl  p-3 w-[px] h-[50px] border rounded-full bg-gradient-to-r from-blue-200 to-cyan-200'>
                                    {a}
                                    </div>
                            )
                            
                    )
            }
        </div>
        <div>
            <div className='text-md w-[50px] h-[50px] text-center'>
                {index}
            </div>
        </div>
        <div>
        {
                midElement == index && (foundAt || foundAt == 0) 
                ?
                    <div className='font-semibold w-[50px] h-[50px] text-center text-white'>
                        f
                    </div>
                :
                    (   midElement == index
                        ?
                            <div className='font-semibold w-[50px] h-[50px] text-center text-white'>
                                mid
                            </div>
                        :
                            <div></div>
                    )
            }
            {
                lowElement == index && midElement != index
                ?
                    <div className='font-semibold w-[50px] h-[50px] text-center text-white'>
                        st
                    </div>
                :   (
                        highElement == index && midElement != index
                        ?
                            <div className='font-semibold w-[50px] h-[50px] text-center text-white'>
                                en
                            </div>
                        :
                            (
                                midElement == index 
                                ?
                                    <div>

                                    </div>
                                :
                                    <div className='font-semibold w-[50px] h-[50px] text-center text-white'>
                                        
                                    </div>
                            )
                            
                    )
            }
        </div>
    </div>
  )
}

