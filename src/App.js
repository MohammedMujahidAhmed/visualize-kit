import React from 'react';
import './App.css';
import { Home } from './Pages/Home';
import {Route, Routes } from 'react-router-dom';
import { Algorithms } from './Pages/Algorithms';
import { MachineLearning } from './Pages/MachineLearning';
import { DataStructure } from './Pages/DataStructure';
import {BinarySearch} from './Components/Algorithms/Searching/BinarySearch'
import {LinearSearch} from './Components/Algorithms/Searching/LinearSearch'
import Visualizer from './Components/Visualizer';

function App() {
  return (
    <div className='w-full'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Algorithms' element={<Algorithms/>}></Route>
        <Route path='/MachineLearning' element={<MachineLearning/>}></Route>
        <Route path='/DataStructure' element={<DataStructure/>}></Route>
        <Route path='/Algorithms/BinarySearch' element={<BinarySearch/>}></Route>
        <Route path='/Algorithms/LinearSearch' element={<LinearSearch/>}></Route>
        <Route path='/Algorithms/Sorting' element={<Visualizer/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
