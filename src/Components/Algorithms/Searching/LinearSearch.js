import React, { useState , useEffect } from 'react'
import { LsBox } from './LsBox';
import './LinearSearch.css'
import { toast } from 'react-toastify';
import imgrobo from '../../../Images/fotor-ai-20230904135059-removebg-preview.png'

export const LinearSearch = () => {
    const [array,setArray] = useState([]);
    const [currIndex,setCurrIndex] = useState(null);
    const [findEle,setFindEle] = useState(null);
    const [foundAt,setFoundAt] = useState(null);
    const [arraySize,setArraySize] = useState(null);
    const [inputArrayString,setInputArrayString] = useState(null);
    const [hideImg,setHideImg] = useState(false);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function startSearch(){
        const cleanedString = inputArrayString.replace(/\s+/g,' ').trim();
        const arr = cleanedString.split(' ');
        const numArr = arr.map(Number).filter(value => !isNaN(value));
        if(numArr.length != arraySize){ 
            toast.warn('Check your Array Size');
            console.log(numArr.length);
            console.log(arraySize)
            return false
        }  
        setArray(numArr);
        return true
    }


    async function handler(){
        try {
            if(startSearch()){
                if(findEle){
                    setFoundAt(null);
                    for(let i=0;i<array.length;i++){
                        setCurrIndex(i);
                        if(array[i] == findEle){
                            setFoundAt(i);
                            setCurrIndex(null);
                            break;
                        }
                        await sleep(1000);
                    }
                    setCurrIndex(null);
                    foundAt?console.log('element found'):console.log('element not found');
                }
                else{
                    setFoundAt(null);
                    setCurrIndex(null);
                    setArray([]);
                    toast.warn('Fill the find space')
                }
            }
            else{
                setFoundAt(null);
                setCurrIndex(null);
                setArray([]);
            }
        } catch (error) {
            toast.error('Something went wrong')
        }
    }

    async function hideTheImgRobo(){
        await sleep(5000);
        setHideImg(true);
    }

    useEffect(()=>{
        hideTheImgRobo();
    })

  return (
    <div className='flex flex-col justify-center relative items-center space-y-4 w-full h-screen bg-gradient-to-r from-teal-300 to-indigo-600'> 
        <h1 className='text-6xl font-extrabold p-4'>Linear Search</h1>
        {/* Left Container Controls */}
        <div className='left-container-background p-5 absolute left-0 h-[95%] m-4 w-[225px]'>
            <div className='flex flex-col space-x-3 justify-between h-full w-full items-center'>
                <label className='font-semibold text-2xl'>
                    <span>size : </span> 
                    <input
                        type='number'
                        onChange={(event)=>{setArraySize(event.target.value)}} 
                        className='w-[50px] h-[50px] border rounded-md text-center'
                    />
                </label>

                {   
                    arraySize
                    ?
                        <div className='flex flex-col items-center space-y-3'>
                            <label className='font-semibold text-2xl'>
                                Enter Elements
                            </label>
                            <input 
                                type='text'
                                placeholder='Elements with spaces'
                                onChange={(event)=>{setInputArrayString(event.target.value)}}
                                className='border rounded-md w-full h-[50px] text-center'
                            />
                        </div>
                    :
                        <p></p>
                }
                <label className='font-semibold text-2xl'>
                    <span>Find : </span> 
                    <input 
                        type='number'
                        placeholder=''
                        onChange={(event)=>{setFindEle(event.target.value)}} 
                        className='w-[50px] h-[50px] border rounded-md text-center'   
                    />
                </label>
                        
                <button className='button-85' onClick={handler}>Start</button>
            </div>
        </div>


        {/* the visulization box */}
        <div className='relative flex flex-col items-center justify-center space-y-6 visual-div-style w-[50%] h-[75%]'>
            <div className='flex flex-row flex-wrap justify-center space-x-3'>
                {
                    array.map((a,index)=>{return <LsBox a={a} index={index} array={array} currIndex={currIndex} foundAt={foundAt}/>})
                }
            </div>
            <div className='flex flex-col items-center space-y-4 absolute bottom-0'>

                {/* Comment section  */}
                <div className='text-center w-[500px] rounded-md bg-blue-600 border p-4'>
                    {
                        (currIndex || currIndex === 0)?
                            <p className='text-xl text-white'>comparing {findEle} with {array[currIndex]} at index {currIndex}</p>
                        :
                            (
                            foundAt || foundAt===0?
                                <p className='text-xl text-white'>Element {findEle} found at index {foundAt}</p>
                                :
                                <p></p>
                        )
                    }
                </div>    
            </div>        
        </div>

        {/* Color Indicator */}
        <div className='absolute top-4 right-2 m-2 rounded-lg p-5 flex flex-col justify-between left-container-background'>
            <div className='flex flex-row space-x-3 items-center'>
            <div className='w-[20px] h-[20px] rounded-full bg-[#ACEEFD]'></div>
            <span className='text-white'>General Array</span>
            </div>
            <div className='flex flex-row space-x-3 items-center'>
            <div className='w-[20px] h-[20px] rounded-full bg-[#8BD21D]'></div>
            <span className='text-white'>Found</span>
            </div>
            <div className='flex flex-row space-x-3 items-center'>
            <div className='w-[20px] h-[20px] rounded-full bg-[#E81224]'></div>
            <span className='text-white'>Comparisons</span>
            </div>
        </div>

        {/* RoboImage */}
        <div className={`absolute bottom-3 right-0 flex flex-col ${hideImg ? 'hidden' : 'block'}`}>
            <div className='border rounded-3xl p-4 first-robo-message' >Happy Searching guys!</div>
            <img src={imgrobo} width={200} className={hideImg ? 'hidden' : 'block'} alt='RoboImg'></img>
        </div>
    </div>
  )
}
