import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import docImage from '../assets/imageDoc.png'
import './Home.css'
import axios from 'axios';

const NewsCOVID=()=>{
  const [news,setNews]=useState([]);
  const options = {
    method: 'GET',
    url: 'https://coronavirus-smartable.p.rapidapi.com/news/v1/IN/',
    headers: {
      'X-RapidAPI-Host': 'coronavirus-smartable.p.rapidapi.com',
      'X-RapidAPI-Key': '4acc56807cmshf6dc415c154158bp14dd13jsnc3118082624f'
    }
  };
  useEffect(function(){
    axios.request(options)
    .then((res)=>{
      console.log(res.data.news);
      setNews(res.data.news);
    })
    .catch((err)=>{
      console.error(err);
    });
  },[]);

  return (
    <>
      <h1 className='text-4xl text-center text-[#363062] font-bold '>Latest updates on COVID-19</h1>
      {
        news.map((n)=>{
          
          return <div className='w-2/3 m-8 '>
            <h1 className='text-2xl text-[#363062] font-bold'>{n.title}</h1>
              <div className='text-xl text-[#363062] font-semibold'>{n.excerpt} 
              <a className='underline italic' href={n.originalUrl} target="_blank" rel="noopener noreferrer"> view full article</a>
              </div>
              
          </div>
        })
      }
    </>
  )
};

function Home() {
  return (
    <>
    <div className="home-page w-full h-[100vh] bg-cover bg-center">
        <div className='w-full flex h-full items-center'>
        <div className='w-1/2 pl-5 pt-16'>
            <p className='text-xl text-[#4D4C7D] m-2'>We are here for your care</p>
            <h1 className='text-6xl text-[#363062] font-black m-2'>We have the best Doctors</h1>
            <p className='text-xl text-[#4D4C7D] m-2'>Good health is a state of mental, physical and social well being and</p>
            <p className='text-xl text-[#4D4C7D] m-2 mb-4'> it does not just mean the absence of disease!</p>
            <Link to='/symptoms'><button className='p-2 m-2 h-[60px] w-[250px] text-3xl rounded-2xl bg-gradient-to-r from-[#85586F] to-[#AC7D88] text-white drop-shadow-2xl'>Get Started</button></Link>
            
        </div>
        <div className='w-1/2 text-right'>
        <img src={docImage} className='h-[500px] w-full pl-[50px]' alt='Logo'></img>
        </div>
        </div>
    </div>
      <NewsCOVID />
    </>
  )
}

export default Home