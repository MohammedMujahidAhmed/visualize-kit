import React, { useState, useEffect } from 'react'
import useSound from 'use-sound'
import sound1 from './sounds/sound1.wav'
import sound2 from './sounds/sound2.wav'
import Button from './assets/Button'
import Dropdown from './assets/Dropdown'
import Slider from './assets/Slider'
import Toggle from './assets/Toggle'
import imgrobo from '../Images/fotor-ai-20230904135059-removebg-preview.png';

const ARRAYSIZE = 20

const Visualizer = () => {
  const [primaryArray, setPrimaryArray] = useState([])
  const [algorithm, setAlgorithm] = useState({name:'Bubble Sort',timeComplexity: 'O(n^2)'})
  const [animationSpeed, setAnimationSpeed] = useState(50)
  const [soundOn, setSoundOn] = useState(true)
  const [disableOptions, setDisableOptions] = useState(false)
  const [playBeep1] = useSound(sound1, { volume: soundOn ? 0.15 : 0 })
  const [playBeep2] = useSound(sound2, { volume: soundOn ? 0.05 : 0 })
  const [hideImg,setHideImg] = useState(false);

  const randomizeArray = () => {
    for (let i = 0; i < primaryArray.length; i++) {
      let bar = document.getElementById(i).style
      bar.backgroundColor = '#ff7f50'
    }
    let array = []
    for (let i = 0; i < ARRAYSIZE; i++) {
      array.push(randomVals(20, 400))
    }

    setPrimaryArray(array)
  }

  const randomVals = (min, max) => {
    let randomVal = Math.floor(Math.random() * (max - min + 1) + min)
    return randomVal
  }

  useEffect(() => {
    randomizeArray()
  }, [])

  const sleep = (milliSeconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliSeconds))
  }

  const finishedAnimation = async () => {
    for (let i = 0; i < primaryArray.length; i++) {
      let bar = document.getElementById(i).style
      bar.backgroundColor = 'green'
      playBeep1()
      await sleep(animationSpeed)
    }
    setDisableOptions(false)
    console.log(primaryArray);
  }

  const handleSorting = () => {
    setDisableOptions(true)
    console.log(algorithm.name)
    switch (algorithm.name) {
      case 'Bubble Sort':
        bubbleSort()
        break
      case 'Selection Sort':
        selectionSort()
        break
      case 'Insertion Sort':
        insertionSort()
        break
      case 'Merge Sort':
        mergeSort()
        break
      case 'Quick Sort':
        quickSort()
        break
      case 'Heap Sort':
        console.log('In Heap Case')
        heapSort()
        break
      default:
        console.log('In default')
        break
    }
  }


  function removeNestedArraysAndElements(inputArray) {
    return inputArray.filter(ele => !Array.isArray(ele));
  }

  // ------------ ALGORITHMS ------------ //

  // Bubble Sort
  const bubbleSort = async () => {
    let currentArr = [...primaryArray]
    let sorted = false
    setAlgorithm({ name: 'Bubble Sort', timeComplexity: 'O(n^2)' })

    while (!sorted) {
      sorted = true

      for (let i = 0; i < currentArr.length - 1; i++) {
        for (let j = 0; j < currentArr.length - i - 1; j++) {
          if (currentArr[j] > currentArr[j + 1]) {
            let temp = currentArr[j]
            currentArr[j] = currentArr[j + 1]
            currentArr[j + 1] = temp
            setPrimaryArray([...currentArr])

            let bar1 = document.getElementById(j).style
            let bar2 = document.getElementById(j + 1).style
            bar1.backgroundColor = '#DC143C'
            bar2.backgroundColor = '#6A5ACD'

            await sleep(animationSpeed)

            bar1.backgroundColor = '#FF7F50'
            bar2.backgroundColor = '#FF7F50'

            sorted = false
            playBeep1()
          }
        }
        playBeep2()
      }
      if (sorted) finishedAnimation()
    }
  }

  // Selection Sort
  const selectionSort = async () => {
    let currentArr = [...primaryArray]
    let sorted = false
    setAlgorithm({ name: 'Selection Sort', timeComplexity: 'O(n^2)' })

    while (!sorted) {
      sorted = true

      for (let i = 0; i < currentArr.length - 1; i++) {
        for (let j = i + 1; j < currentArr.length; j++) {
          if (currentArr[i] > currentArr[j]) {
            let swap1 = currentArr[i]
            let swap2 = currentArr[j]
            currentArr[i] = swap2
            currentArr[j] = swap1
            setPrimaryArray([...currentArr])

            let bar1 = document.getElementById(i).style
            let bar2 = document.getElementById(j).style
            bar1.backgroundColor = '#DC143C'
            bar2.backgroundColor = '#6A5ACD'

            await sleep(animationSpeed)

            bar1.backgroundColor = '#FF7F50'
            bar2.backgroundColor = '#FF7F50'

            sorted = false
            playBeep1()
          }
        }
        playBeep2()
      }
      if (sorted) finishedAnimation()
    }
  }

  // Insertion Sort
  const insertionSort = async () => {
    let currentArr = [...primaryArray]
    let sorted = false
    setAlgorithm({ name: 'Insertion Sort', timeComplexity: 'O(n^2)' })

    while (!sorted) {
      sorted = true

      for (let i = 1; i < currentArr.length; i++) {
        let current = currentArr[i]
        let j = i - 1
        while (j >= 0 && currentArr[j] > current) {
          currentArr[j + 1] = currentArr[j]
          setPrimaryArray([...currentArr])

          let bar1 = document.getElementById(j + 1).style
          let bar2 = document.getElementById(j).style
          bar1.backgroundColor = '#DC143C'
          bar2.backgroundColor = '#6A5ACD'

          await sleep(animationSpeed)

          bar1.backgroundColor = '#FF7F50'
          bar2.backgroundColor = '#FF7F50'

          j--
          sorted = false
          playBeep1()
        }
        currentArr[j + 1] = current
        setPrimaryArray([...currentArr])
        playBeep2()
      }
      if (sorted) finishedAnimation()
    }
  }

  // Merge Sort
  const mergeSort = async () => {
    console.log(primaryArray)
    let currentArr = primaryArray
    setAlgorithm({ name: 'Merge Sort', timeComplexity: 'O(n log(n))' })

    await sort(currentArr, 0, currentArr.length - 1)
    finishedAnimation()
  }

  const sort = async (arr, low, high) => {
    if (low < high) {
      let mid = Math.floor((low + high) / 2)
      await sort(arr, low, mid)
      await sort(arr, mid + 1, high)
      await merge(arr, low, mid, high)
    }
  }

  const merge = async (arr, low, mid, high) => {
    let i = low
    let j = mid + 1
    let k = 0
    let tempArr = []

    while (i <= mid && j <= high) {
      if (arr[i] < arr[j]) {
        tempArr[k] = arr[i]
        i++
        k++
      } else {
        tempArr[k] = arr[j]
        j++
        k++
      }
      setPrimaryArray([...primaryArray, tempArr])

      let bar1 = document.getElementById(i).style
      let bar2 = document.getElementById(j).style
      bar1.backgroundColor = '#DC143C'
      bar2.backgroundColor = '#6A5ACD'

      await sleep(animationSpeed)

      bar1.backgroundColor = '#FF7F50'
      bar2.backgroundColor = '#FF7F50'

      playBeep1()
    }

    while (i <= mid) {
      tempArr[k] = arr[i]

      setPrimaryArray([...primaryArray, tempArr])

      let bar1 = document.getElementById(i).style
      let bar2 = document.getElementById(j).style
      bar1.backgroundColor = '#DC143C'
      bar2.backgroundColor = '#6A5ACD'

      await sleep(animationSpeed)

      bar1.backgroundColor = '#FF7F50'
      bar2.backgroundColor = '#FF7F50'

      playBeep1()

      i++
      k++
    }

    while (j <= high) {
      tempArr[k] = arr[j]

      setPrimaryArray([...primaryArray, tempArr])

      let bar1 = document.getElementById(i).style
      let bar2 = document.getElementById(j).style
      bar1.backgroundColor = '#DC143C'
      bar2.backgroundColor = '#6A5ACD'

      await sleep(animationSpeed)

      bar1.backgroundColor = '#FF7F50'
      bar2.backgroundColor = '#FF7F50'

      playBeep1()

      j++
      k++
    }

    for (let i = low; i <= high; i++) {
      arr[i] = tempArr[i - low]
      setPrimaryArray([...primaryArray, arr])
      playBeep2()
    }
  }

  // Quick Sort
  const quickSort = async () => {
    setAlgorithm({ name: 'Quick Sort', timeComplexity: 'O(n log(n))' })
    let currentArr = [...primaryArray]

    await sorts(currentArr, 0, currentArr.length - 1)
    finishedAnimation()
  }

  const sorts = async (arr, left, right) => {
    if (left < right) {
      let partitionIndex = partition(arr, left, right)

      setPrimaryArray([...arr])
      await sleep(animationSpeed)
      playBeep2()
      await sorts(arr, left, partitionIndex - 1)
      await sorts(arr, partitionIndex + 1, right)
    }
  }

  const partition = (arr, left, right) => {
    let pivot = arr[right]
    let i = left - 1
    playBeep1()
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        i++
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp

        let bar1 = document.getElementById(i).style
        let bar2 = document.getElementById(j).style
        bar1.backgroundColor = '#DC143C'
        bar2.backgroundColor = '#6A5ACD'

        setTimeout(() => {
          bar1.backgroundColor = '#ff7f50'
          bar2.backgroundColor = '#ff7f50'
        }, 200)

        setPrimaryArray([...arr])
      }
    }

    let temp = arr[i + 1]
    arr[i + 1] = arr[right]
    arr[right] = temp

    return i + 1
  }

  // Heap Sort
  const heapSort = async () => {
    console.log('Start Sort')
    console.log('before Arr')
    console.log(primaryArray)
    // let arr1 = await removeNestedArraysAndElements(primaryArray)
    // setPrimaryArray(arr1)
    let arr = [...primaryArray]
    console.log('After Arr primaryArray')
    console.log(primaryArray)
    console.log('After Arr arr')
    console.log(arr)
    let length = arr.length
    let index = Math.floor(length / 2 - 1)
    let lastChild = length - 1

    setAlgorithm({ name: 'Heap Sort', timeComplexity: 'O(n log(n))' })

    while (index >= 0) {
      await heapify(arr, length, index)
      index--

      setPrimaryArray([...arr])
      // console.log(primaryArray)
      
      if (index >= 0) {
        let bar1 = document.getElementById(index).style
        let bar2 = document.getElementById(index + 1).style
        bar1.backgroundColor = '#DC143C'
        bar2.backgroundColor = '#6A5ACD'
        
        await sleep(animationSpeed)
        
        playBeep1()
        
        bar1.backgroundColor = '#FF7F50'
        bar2.backgroundColor = '#FF7F50'
      } else {
        await sleep(animationSpeed)
      }
    }
    
    while (lastChild >= 0) {
      let swap1 = arr[0]
      let swap2 = arr[lastChild]
      
      arr[0] = swap2
      arr[lastChild] = swap1
      await heapify(arr, lastChild, 0)
      lastChild--
      playBeep2()
      
      setPrimaryArray([...arr])
      // console.log(primaryArray)
      
      if (index >= 0) {
        let bar1 = document.getElementById(lastChild).style
        let bar2 = document.getElementById(0).style
        bar1.backgroundColor = '#DC143C'
        bar2.backgroundColor = '#6A5ACD'
        
        bar1.backgroundColor = '#FF7F50'
        bar2.backgroundColor = '#FF7F50'
      } else {
        await sleep(animationSpeed)
      }
    }
    
    console.log('done');
    finishedAnimation()
  }
  
  const heapify = async (arr, length, index) => {
    let largest = index
    let leftNode = index * 2 + 1
    let rightNode = leftNode + 1
    
    if (arr[leftNode] > arr[largest] && leftNode < length) {
      largest = leftNode
    }
    
    if (arr[rightNode] > arr[largest] && rightNode < length) {
      largest = rightNode
    }

    if (largest !== index) {
      let swap1 = arr[index]
      let swap2 = arr[largest]
      arr[index] = swap2
      arr[largest] = swap1
      
      let bar1 = document.getElementById(index).style
      let bar2 = document.getElementById(largest).style
      bar1.backgroundColor = '#DC143C'
      bar2.backgroundColor = '#6A5ACD'
      
      await sleep(animationSpeed)
      
      bar1.backgroundColor = '#FF7F50'
      bar2.backgroundColor = '#FF7F50'
      
      playBeep1()
      
      await heapify(arr, length, largest)
    }
    
    return arr
  }

  async function hideTheImgRobo(){
    await sleep(5000);
    setHideImg(true);
  }

  useEffect(()=>{
    hideTheImgRobo();
  })

  return (
    <div className='flex flex-row h-screen relative bg-gradient-to-r from-teal-300 to-indigo-600 justify-center items-center w-full'>
      <div className='border p-3 absolute left-2 h-[95%] m-2 rounded-lg flex flex-col justify-between left-container-background'>
        <Button
          type='NEWARRAY'
          name='New Array'
          onClick={randomizeArray}
          disabled={disableOptions}
        />
        <div className='flex flex-col justify-between items-center space-y-6'>
          <Dropdown
            onChange={(e) => setAlgorithm({...algorithm ,name:e.target.value})}
            disabled={disableOptions}
          />
          <Slider
            onChange={(e) => setAnimationSpeed(e.target.value)}
            disabled={disableOptions}
          />
          <Toggle
            context='Sound'
            defaultChecked={soundOn}
            soundState={soundOn ? true : false}
            onChange={() => {
              setSoundOn(!soundOn)
            }}
            disabled={disableOptions}
          />
        </div>
        <Button
          onClick={handleSorting}
          type='SORT'
          name='Sort'
          disabled={disableOptions}
        />
      </div>
      <div className='border relative visual-div-styleS p-2'>
        <div className=''>
          {primaryArray &&
            primaryArray.map((val, key) => {
              return (
                <div
                  className='bars'
                  id={key}
                  key={key}
                  style={{ height: val }}
                ></div>
              )
            })}
        </div>
        {algorithm.name !== undefined && (
          <div className='flex flex-col items-center justify-center'>
            <div className='font-bold'>Algorithm: <span className='text-white'>{algorithm.name}</span></div>
            <div className='text-red-800 font-semibold'>Time Complexity: <span className='font-bold'>{algorithm.timeComplexity}</span></div>
          </div>
        )}
      </div>
      <div className='absolute top-4 right-2 m-2 rounded-lg p-3 flex flex-col justify-between left-container-background'>
        <div className='flex flex-row space-x-3 items-center'>
          <div className='w-[20px] h-[20px] rounded-full bg-[#ff7f50]'></div>
          <span className='text-white'>Randomized Array</span>
        </div>
        <div className='flex flex-row space-x-3 items-center'>
          <div className='w-[20px] h-[20px] rounded-full bg-[#008000]'></div>
          <span className='text-white'>Sorted Array</span>
        </div>
        <div className='flex flex-row space-x-3 items-center'>
          <div className='w-[20px] h-[20px] rounded-full bg-[#768DE4]'></div>
          <span className='text-white'>Comparisons</span>
        </div>
        <div className='flex flex-row space-x-3 items-center'>
          <div className='w-[20px] h-[20px] rounded-full bg-[#E81224]'></div>
          <span className='text-white'>Comparisons</span>
        </div>
      </div>
      <div className={`absolute bottom-3 right-0 flex flex-col ${hideImg ? 'hidden' : 'block'}`}>
        {/* <div className='relative'> */}
          <div className='border rounded-3xl p-4 first-robo-message' >Happy Sorting guys!</div>
          <img src={imgrobo} width={200} className={hideImg ? 'hidden' : 'block'}></img>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Visualizer
