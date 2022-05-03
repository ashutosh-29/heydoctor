import React, { useEffect, useState } from 'react';
import data from '../assets/data_stored.json';
import { Link } from 'react-router-dom';

function Recommendation({disease}) {
  const [myDoc,setMyDoc]=useState([])
  useEffect(function(){
    const filter=data.data.filter((doc)=>doc.expertIn.includes(disease));
    setMyDoc([...filter]);
  },[disease]);
  return (
    <div>
        <div className='w-full p-2'>
          {
            disease.length > 0 ?<>
                <h1 className='m-2 text-3xl text-[#363062] font-black'>You probably have: <span className='font-bold underline'>{disease}</span></h1>
                < h1 className='mt-2 text-3xl text-[#363062] font-black'>You can consult to the following doctors: </h1>
              </>:
          <></>
          }
          
          
          <div>
            {
              myDoc.map((doc)=>{
                return <div>
                   <h1 className='m-2 text-2xl text-[#363062] font-bold'>Dr. {doc.name}<br/> <span className='text-xl '>Experience: {doc.experience} years</span></h1>
                   <Link to={{pathname: "/booking", search: String(doc.name)}}><button className='h-[40px] w-[200px] m-2 rounded-xl bg-gradient-to-r from-[#85586F] to-[#AC7D88] text-white px-2'>Book Appointment</button></Link>
                </div>
              })
            }
          </div>
      </div>
    </div>
  )
}

export default Recommendation