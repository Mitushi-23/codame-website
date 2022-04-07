import React from 'react';
import styles from '../../styles/index.css';
import Navbar from '../../components/Navbar';
import circle from '../../assets/circle.svg';
import logo from '../../assets/logo.png';
import vector from '../../assets/vector.svg';



export default function Home() {
    return (
        

            <div className="home_page">
                <Navbar active="home"/>

                <img src={circle} className=" w-[12rem] absolute top-0 right-0 z-1 sm:w-[14rem] md:w-[18rem] lg:w-[26rem]" />
                
                <div className="hero_section m-10 p-8" >
                    <img src={logo} className="float-left h-50 w-[26rem] lg:h-70 " />
                    <div className="title">
                        <h1 className="text-darkBlue font-belleza uppercase mt-20 z-5 text-4xl text-center sm:text-4xl sm:text-left md:text-6xl md:text-left lg:text-8xl lg:text-left">Codame</h1>
                        <h3 className="text-black font-inconsolota font-bold mt-10 z-8 text-3xl text-center sm:text-3xl sm:text-left md:text-5xl md:text-left lg:text-6xl lg:text-left">Coding Club of IIIT Bhopal</h3>

                    </div>

                </div>














            </div>

        
    )
}