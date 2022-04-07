import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar p-4 bg-blurgreen bg-opacity-60 rounded-full ml-32 mt-7 w-[44rem] shadow-2xl">
        <Link className="home mr-2 pl-5 pr-5 pt-2 pb-2 bg-lightGreen rounded-full font-extrabold shadow-xl text-lg" to="/">Home</Link>
        <Link className="about ml-2 mr-2  pl-5 pr-5 pt-2 pb-2 bg-lightGreen rounded-full font-extrabold text-lg"to="/about">About</Link>
        <Link className="events ml-2 mr-2  pl-5 pr-5 pt-2 pb-2 bg-lightGreen rounded-full font-extrabold  text-lg" to="/events">Events</Link>
        <Link className="resources ml-2  mr-2 pl-5 pr-5 pt-2 pb-2 bg-lightGreen rounded-full font-extrabold  text-lg" to="/resources">Resources</Link>
        <Link className="contact l-2 mr-2  pl-5 pr-5 pt-2 pb-2 bg-lightGreen rounded-full font-extrabold text-lg" to="/team">Team</Link>
          <Link className="contact l-2 mr-2  pl-5 pr-5 pt-2 pb-2 bg-lightGreen rounded-full font-extrabold text-lg" to="/contact">Contact</Link>
      </div>
    </>
  );
}
