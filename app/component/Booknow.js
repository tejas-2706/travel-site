"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Oneway from "./Oneway";
import RoundTrip from "./RoundTrip";
import Local from "./Local";
import Airport from "./Airport";
import Link from "next/link";

const booknow = () => {
  const [formState, setformState] = useState('');

  const renderForm = () => {
    switch (formState) {
      case 'oneway':
        return <Oneway/>;
      case 'roundtrip':
        return <RoundTrip/>;
      case 'local':
        return <Local/>;
      case 'airport':
        return <Airport/>;
      default:
        return null;
    }
  };
  return (
    <div>
      {/* banner */}
      <div className="relative ">
        <div className="w-full">
          <img
            className="w-full"
            style={{ height: "55vh" }}
            src="/redcar.jpg"
            alt="Banner"
          />
        </div>

        {/* Name on Banner */}
        <div className="absolute top-1/4 left-1/3 font-bold text-5xl" >
          <span className="text-red-400 text-6xl"> PRAYAG </span>
          <span> TOURS & TRAVELS</span>
        </div>

        {/* absolute on banner */}
        <div className="absolute w-2/3 h-1/3 bottom-5 left-80 bg-slate-200 rounded-xl">

          {/* section-line */}
          <div className="divide-y-2 divide-yellow-600 divide-dashed">

            {/* route type */}
            <div className="route-type p-5">
              <ul className="md:flex gap-10 justify-center hidden">
                <li>
                  <Button variant='outline' onClick={()=> setformState('oneway')} >One Way</Button>
                </li>
                <li>
                  <Button variant='outline' onClick={()=>setformState('roundtrip')}>Round Trip</Button>
                </li>
                <li>
                  <Button variant='outline' onClick={()=>setformState('local')}>Local</Button>
                </li>
                <li>
                  <Button variant='outline' onClick={()=>setformState('airport')}>Airport</Button>
                </li>
              </ul>
            </div>

        {/* Dynamic change of form */}
            <div className="route-info">
              {renderForm()}
            </div>

          </div>
        </div>

{/* Explore Cars */}
        <div className="absolute  left-1/2  -bottom-5">
          <Button asChild className='p-5 px-10 m-2 bg-red-500' > 
            <Link href="/our-cars" >Explore Cars</Link>
            </Button>
        </div>

      </div>
    </div>
  );
};
export default booknow;
