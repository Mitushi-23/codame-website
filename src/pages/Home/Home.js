import React from 'react';
import styles from '../../styles/index.css';
import Navbar from '../../components/Navbar';
import circle from '../../assets/circle.svg';
import logo from '../../assets/logo.png';



export default function Home() {
    return (
        

            <div className="home_page">
                <Navbar />

                <img src={circle} className="absolute top-0 right-0 w-[28rem] z-1" />



                <div className="hero_section m-10 p-8" >
                    <img src={logo} className="float-left h-96" />
                    <div className="title">
                        <h1 className="text-darkBlue font-belleza text-9xl uppercase mt-20 z-5">Codame</h1>
                        <h3 className="text-black font-inconsolota font-bold text-6xl mt-10 z-8">Coding Club of IIIT Bhopal</h3>

                    </div>

                </div>














            </div>

        
    )
}