import React from 'react';
import logo from '../assets/logo.png'
import circle from '../assets/circle.png'
import './Home.css'

export default function Home(){
    return(
        <>
        <div className="home_page">
            <div className="logo">
                <img src={logo} className="logo" />
            </div>

            <div className="circle">
                <img src={circle} className="circle" />
            </div>

            {/* <div className="circles">
                <div className="c1"></div>
                <div className="c2"></div>
                <div className="c3"></div>
                <div className="c4"></div>
               
            </div> */}
            <div className="title">
                <h1>Codame</h1>
                <h3>Coding Club of IIIT Bhopal</h3>
            </div>

            <div className="waves">
            </div>

            <div className="hero_section">
                <h1> hellloooo</h1>
            </div>
            



        

            
        </div>
        </>
    )
}