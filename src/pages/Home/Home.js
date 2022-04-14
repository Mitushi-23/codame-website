import React from 'react';
import styles from '../../styles/index.css';
import circle from '../../assets/circle.svg';
import logo from '../../assets/logo.png';
import vector from '../../assets/vector.svg';
import enc from '../../assets/enc.png'
import work from '../../assets/work.webp'



export default function Home() {
    return (


        <div className="home_page">

            <img src={circle} className=" w-[14rem] absolute top-0 right-0 z-1 sm:w-[14rem] md:w-[25rem] lg:w-[30rem]" />

            <div className="hero_section flex flex-row mr-10 ml-10 mt-10 mb-32 p-8" >
                <div className="logo">
                <img src={logo} className="float-left h-50 w-[32rem] lg:h-70 " />
                </div>
             
                <div className="title">
                    <h1 className="text-darkBlue font-belleza uppercase mt-20 z-5 text-5xl text-center sm:text-5xl sm:text-left md:text-7xl md:text-left lg:text-9xl lg:text-left">Codame</h1>
                    <h3 className="text-black font-inconsolota font-bold mt-10 z-8 text-3xl text-center sm:text-3xl sm:text-left md:text-5xl md:text-left lg:text-7xl lg:text-left">Coding Club of IIIT Bhopal</h3>
                </div>

            </div>


            <div className="blueGradient">

            </div>


            <div class="sec-1 p-5 bg-white m-20 rounded-2xl">
                <div className="what-do-we-do">
                    <h1 className="text-center font-bold text-6xl m-5 font-encodeSans" >What Do We Do?</h1>
                    <div className="box-1 flex flex-row m-5">
                        <div className="text">
                    <h2 className="font-semibold p-3 m-3 text-[2rem] font-belleza"> Encouraging the students to code</h2>
                    <p className="font-medium p-3 m-3 text-xl font-poppins">Lorem ex aliquip reprehenderit velit velit. Quis voluptate officia irure adipisicing dolore dolore Lorem ex labore tempor nostrud mollit. Tempor ad mollit labore cillum ullamco deserunt. Deserunt consectetur ullamco fugiat consequat.</p>
                    </div>
                    <img src={enc}  className="rounded-2xl shadow-2xl m-3 " />
                </div>

                <div className="box-1 flex flex-row m-5">
                        <div className="text">
                    <h2 className="font-semibold p-3 m-3 text-[2rem] font-belleza"> Organizing workshops and events</h2>
                    <p className="font-medium p-3 m-3 text-xl font-poppins">Lorem ex aliquip reprehenderit velit velit. Quis voluptate officia irure adipisicing dolore dolore Lorem ex labore tempor nostrud mollit. Tempor ad mollit labore cillum ullamco deserunt. Deserunt consectetur ullamco fugiat consequat.</p>
                    </div>
                    <img src={work}  className="rounded-2xl shadow-2xl m-3 w-[25rem] " />
                </div>

            
              


                

               
                </div>

            </div>












        </div>


    )
}