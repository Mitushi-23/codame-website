import React from 'react';
import Navbar from '../../components/Navbar';
import triangle from '../../assets/triangle.svg';


export default function Resources(){
    return(
        <>
         <Navbar />
         <img src={triangle} alt="" className='absolute top-0 right-0' />
         <div className="">
         <h1 className='text-darkBlue font-encodeSans text-9xl uppercase mt-20 z-5 text-center'>Resources</h1>
         </div>
        </>
    )
}