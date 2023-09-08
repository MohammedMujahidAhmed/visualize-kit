import React, { useEffect, useRef } from 'react'
import Typed from "typed.js";
import './styles/HeroSection.css'


export const HeroSection = () => {

    const el = useRef(null);
    
    
    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Data Structure", "Algorithm", "Graphs", "Trees ","Data Structures and Algorithm"], // Strings to display
          // Speed settings, try diffrent values untill you get good results
          startDelay: 300,
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 100
        });
    
        // Destropying
        return () => {
          typed.destroy();
        };
    }, []);

    return (
    <div className='flex justify-center items-center h-[100%] relative'>
        <div className='flex flex-col'>
            <h1 className='text-[4rem] text-white font-extrabold'>Welcome To Visualize Bro</h1>
            <p className='text-white text-center text-xl'>Where we Learn to Visualize - </p>
            <div className='text-center text-3xl'>
                <span className='text-white' ref={el}></span>
            </div>
        </div>
        <div className='icon-scroll bottom-1'></div>
    </div>
  )
}
