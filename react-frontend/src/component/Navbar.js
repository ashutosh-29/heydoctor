import React from 'react';
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div>
        <div className='fixed w-full flex items-center mt-0 p-2 pt-4'>
            <div className='w-1/4'><img src={Logo} className='h-[70px] w-[300px] pl-[50px]' alt='Logo'></img></div>
        
            <div className='flex w-1/2  justify-around'>
                <Link to='/' className=' p-1 font-semibold text-xl text-[#363062] hover:underline underline-offset-1 ease-out duration-300'> Home </Link> 
                <Link to='/' className=' p-1 font-semibold text-xl text-[#363062] hover:underline underline-offset-1 ease-out duration-300'>Services</Link>
                <Link to='/' className=' p-1 font-semibold text-xl text-[#363062] hover:underline underline-offset-1 ease-out duration-300'>About</Link>
                <Link to='/' className=' p-1 font-semibold text-xl text-[#363062] hover:underline underline-offset-1 ease-out duration-300'> Contact </Link> 
            </div>
            <div className='w-1/4 text-right'>
            <button className='h-[45px] w-[150px] mr-[50px] text-xl rounded-xl bg-gradient-to-r from-[#85586F] to-[#AC7D88] text-white drop-shadow-2xl'>Helpline</button>
            </div>
    </div>
    </div>
  )
}

export default Navbar