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
        <div className="space-y-8">
        <div className="text-darkBlue text-center font-mono font-bold text-4xl">Upcoming events</div>
        <div className="flex flex-row flex justify-evenly">
            <div className="relative h-44 w-60 bg-emerald-300 rounded-3xl ">
                     <div className="absolute h-44 w-60 -left-4 -top-4 bg-emerald-200 rounded-3xl -z-20 opacity-80"></div>
            </div>
            <div className="relative h-44 w-60 bg-emerald-300 rounded-3xl ">
                     <div className="absolute h-44 w-60 -left-4 -top-4 bg-emerald-200 rounded-3xl -z-20 opacity-80"></div>
            </div>
            <div className="relative h-44 w-60 bg-emerald-300 rounded-3xl ">
                     <div className="absolute h-44 w-60 -left-4 -top-4 bg-emerald-200 rounded-3xl -z-20 opacity-80"></div>
            </div>
            
        </div>
        </div>
        <div className="space-y-8">
        <div className="text-darkBlue text-center font-mono font-bold text-4xl">Past events</div>
        <div className="flex flex-row flex justify-evenly">
            <div className="relative h-44 w-60 bg-emerald-300 rounded-3xl ">
                     <div className="absolute h-44 w-60 -left-4 -top-4 bg-emerald-200 rounded-3xl -z-20 opacity-80"></div>
            </div>
            <div className="relative h-44 w-60 bg-emerald-300 rounded-3xl ">
                     <div className="absolute h-44 w-60 -left-4 -top-4 bg-emerald-200 rounded-3xl -z-20 opacity-80"></div>
            </div>
            <div className="relative h-44 w-60 bg-emerald-300 rounded-3xl ">
                     <div className="absolute h-44 w-60 -left-4 -top-4 bg-emerald-200 rounded-3xl -z-20 opacity-80"></div>
            </div>
       
        </div>
        </div>
       
        </div>
        </div>

    )

}