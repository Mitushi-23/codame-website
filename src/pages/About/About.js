import React from "react";
import Navbar from '../../components/Navbar';
import triangle from '../../assets/triangle.svg';


export default function About() {
    return (
        <>
            <Navbar active="about" />
            <img src={triangle} alt="" className='absolute top-0 right-0' />
            <div className="">
                <h1 className='text-darkBlue font-encodeSans text-9xl uppercase mt-20 z-5 text-center'>About</h1>
                <p className='text-black font-semibold font-poppins tracking-wide w-[65rem] m-auto text-justify mt-20 text-2xl'>
                    CODAME is the coding club of Indian Institute of Information Technology (IIIT) Bhopal , started in Year 2020 which is contineously trying to formalize and organize tech activites in IIIT Bhopal.
                    In the term CODAME , COD comes from code and AME means soul and hence it can be thought as "soul is coding" or while speaking it also sounds like "code aim"
                    , both describes the purpose of the club.

                    <br />
                    <br />

                    Currently this club is focussing on the following domains :
                    <ul class="list-disc list-inside">
                        <li>Active Participation in competitve programming</li>
                        <li>Web developement (Started in 2022)</li>
                    </ul>

                    <br />

                    This innitiative has lead IIIT Bhopal produce high value assets with great coding skills and it aims to increase that with time.
                    Talking about stats, oraganization of coding events , participation in coding competitions and hackathons have seen a huge surge with our people shining on the leader boards.
                </p>
            </div>
        </>
    )
}