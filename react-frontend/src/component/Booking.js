import React, { useState, useRef } from 'react';
import { useLocation } from "react-router";
import emailjs from '@emailjs/browser';

function Booking() {
  const location = useLocation();
  const [loc,setLoc]=useState(location.search);
  const form=useRef();
  const sendEmail=(e)=>{
      e.preventDefault();
      emailjs.init("VKVqrAHxmMX25AF6D");
      emailjs.sendForm('service_htxngui','template_s6a3bku',e.target,'VKVqrAHxmMX25AF6D')
    }
  return (
    
    <div>
        <div className='w-full h-[15vh]'></div>
        <h1 className='m-2 text-5xl text-[#363062] font-black'>Book appointment with Dr. {loc.substring(1)} </h1>
        <br/>
        <div className='mt-2 w-1/3 border-2 rounded-xl m-auto p-4 drop-shadow-xl'>
        <form className='' ref={form} onSubmit={sendEmail}>
          <input type="hidden" name="doc_name" value={loc.substring(1)}/>
          <input type="hidden" name="doc_email" value="kr.ashutosh.2129@gmail.com" />
          <label className='m-4'>Name: </label>
          <input className='m-4 border-2 p-1' type='text' name='user_name' /><br/>
          <label className='m-4'>Contact No.: </label>
          <input className='m-4 border-2 p-1' type='tel' name='user_phone' /><br/>
          <label className='m-4'>Date: </label>
          <input className='m-4 border-2 p-1' type='date' name='date' /><br/>
          <label className='m-4'>Time: </label>
          <input className='m-4 border-2 p-1' type='time' name='time' />
          <input className='m-4 rounded-md border-2 p-1' type='submit' name='book' />
          
        </form>
        </div>
        
    </div>
  )
}

export default Booking