import React from 'react';
import Navbar from '../../components/Navbar';
import triangle from '../../assets/triangle.svg'
import '../../styles/index.css'


// background: linear-gradient(169.82deg, rgba(3, 32, 71, 0) 35.33%, rgba(3, 32, 70, 0.19283) 59.04%, rgba(4, 31, 68, 0.73) 69.32%, #032047 91.7%);
//         filter: blur(144px);
//         transform: rotate(15deg);

export default function Events(){
    return(
        <div className=''>

        <Navbar active="events"/>
        <img src={triangle} alt="" className='absolute top-0 right-0' />
        <div className="space-y-24">
        <div className=''>
            <h1 className='text-darkBlue font-encodeSans text-9xl uppercase mt-20 z-5 text-left ml-32'> Events</h1>
         
            <p className='text-black font-bold font-titanOne tracking-wide w-120 m-auto text-center mt-20 text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque laborum nostrum magni cumque suscipit voluptates in, a, dolores harum, voluptate facilis odit fuga culpa enim quasi. Praesentium quibusdam provident sunt.</p>
      
        </div>


        <div className="flex flex-row flex justify-evenly gap-4 content-center">
        <div className="">
            <div className="h-16 w-96 bg-emerald-400 text-white font-bold text-center text-2xl rounded-sm">Upcoming events</div>
            <div className="h-96 w-96 bg-emerald-50 rounded-sm"></div>
        </div>

        <div className=" ">
            <div className="h-16 w-96 bg-emerald-400 text-white font-bold text-center text-2xl rounded-sm">Past events</div>
            <div className="h-96 w-96 bg-emerald-50 rounded-sm"></div>
        </div>
        </div>
        </div>
        </div>

    )

}