import React from 'react'
import { useState,useEffect } from 'react';
const RoundTrip = () => {
    const [minDate, setMinDate] = useState('');
    const [time, settime] = useState('');

  useEffect(() => {
    const date = new Date();
    
    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    const latestTime = (date) => {
        const hours = date.getHours().toString().padStart(2,'0');
        return hours;
    }

    setMinDate(formatDate(date));
    
    settime(latestTime(date));
    
  }, []);

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
                    <h2>Return</h2>
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

export default RoundTrip
