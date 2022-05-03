import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Symptoms from './component/Symptoms';
import Home from './component/Home';
import React from 'react';
import Navbar from './component/Navbar';
import Booking from './component/Booking';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
          <Navbar />
          <Home />
          </>
          
        }/>
        <Route path='/symptoms' element={
          <>
            <Navbar/>
            <Symptoms/>
          </>
          
        }/>
        <Route path='/booking' element={
          <>
            <Navbar/>
            <Booking />
          </>
          
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
