import React from 'react'
import styles from '../../styles/index.css'
import Navbar from '../../components/Navbar'
import circle from '../../assets/circle.svg'
import logo from '../../assets/logo.png'
import vector from '../../assets/vector.svg'

export default function Home() {
  return (
    <div className="home_page">
      <Navbar active="home" />

      <img
        src={circle}
        className=" w-[14rem] absolute top-0 right-0 z-1 sm:w-[14rem] md:w-[25rem] lg:w-[30rem]"
      />

      <div className="hero_section m-10 p-8">
        <img src={logo} className="float-left h-50 w-[32rem] lg:h-70 " />
        <div className="title">
          <h1 className="text-darkBlue font-belleza uppercase mt-20 z-5 text-5xl text-center sm:text-5xl sm:text-left md:text-7xl md:text-left lg:text-9xl lg:text-left">
            Codame
          </h1>
          <h3 className="text-black font-inconsolota font-bold mt-10 z-8 text-3xl text-center sm:text-3xl sm:text-left md:text-5xl md:text-left lg:text-7xl lg:text-left">
            Coding Club of IIIT Bhopal
          </h3>
        </div>
      </div>

      <div className="buuu"></div>
    </div>
  )
}
