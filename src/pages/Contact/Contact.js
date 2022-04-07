import React from 'react';
import Navbar from '../../components/Navbar';
import event from '../../assets/event.svg'
import '../../styles/index.css'

export default function Contact(){
    return(
        <>
             <div className=''>
        <Navbar active="contact" />
        <img src={event} alt="" className='absolute top-0 right-0' />
        <div className=''>
            <h1 className='text-darkBlue font-belleza text-7xl uppercase mt-20 z-5 text-center'>Contact</h1>
         
            <p className='text-black font-bold font-titanOne tracking-wide w-120 m-auto text-center mt-20 text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque laborum nostrum magni cumque suscipit voluptates in, a, dolores harum, voluptate facilis odit fuga culpa enim quasi. Praesentium quibusdam provident sunt.</p>
      
        </div>
        </div>
        </>
    )
}