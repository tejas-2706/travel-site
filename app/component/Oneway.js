"use client"
import React, { useEffect } from 'react'
import { useState } from 'react';
const oneway = () => {

    const [minDate, setMinDate] = useState('');
    const [time, settime] = useState('');

  useEffect(() => {
    // Get the current date
    const date = new Date();
    
    // Helper function to format dates as YYYY-MM-DD
    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    const latestTime = (date) => {
        const hours = date.getHours().toString().padStart(2,'0');
        return hours;
    }

    // Set the formatted date as min date
    setMinDate(formatDate(date));
    // console.log(formatDate(date));
    
    settime(latestTime(date));
    console.log(latestTime(date)+":00");
    
  }, []);

    
    // const checkvalid = (id) =>{
    //     if(input.id.time > settime){
    //         console.log("correct");
            
    //     }
    // }
    
    return (
        <div>
            <div className='flex gap-2 justify-around px-10'>
                <div className='flex-col  border-b border-black'>
                    <h2>From</h2>
                    <input className='bg-slate-200 ' type="text" />
                </div>
                <div className='flex-col  border-b border-black'>
                    <h2>To</h2>
                    <input className='bg-slate-200 ' type="text" />
                </div>
                <div className='flex-col  border-b border-black'>
                    <h2>Pick Up</h2>
                    <input className='bg-slate-200 ' type="date" min={minDate} />
                </div>
                <div className='flex-col  border-b border-black'>
                    <h2>Pick Up Time</h2>
                    <input className='bg-slate-200 ' type="time" min={settime} required/>
                    <span type="validity" ></span>
                </div>
            </div>

        </div>
    )
}

export default oneway
