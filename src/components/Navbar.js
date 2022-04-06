import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar p-8 bg-blurgreen bg-opacity-60 rounded-full ml-40 mt-10 w-120 shadow-2xl">
        <Link className="home mr-2 pl-5 pr-5 pt-3 pb-3 bg-lightGreen rounded-full font-extrabold shadow-xl text-xl" to="/">Home</Link>
        <Link className="about ml-2 mr-2  pl-5 pr-5 pt-3 pb-3 bg-lightGreen rounded-full font-extrabold text-xl"to="/about">About</Link>
        <Link className="events ml-2 mr-2  pl-5 pr-5 pt-3 pb-3 bg-lightGreen rounded-full font-extrabold  text-xl" to="/events">Events</Link>
        <Link className="resources ml-2  mr-2 pl-5 pr-5 pt-3 pb-3 bg-lightGreen rounded-full font-extrabold  text-xl" to="/resources">Resources</Link>
        <Link className="contact l-2 mr-2  pl-5 pr-5 pt-3 pb-3 bg-lightGreen rounded-full font-extrabold text-xl" to="/contact">Team</Link>
          <Link className="contact l-2 mr-2  pl-5 pr-5 pt-3 pb-3 bg-lightGreen rounded-full font-extrabold text-xl" to="/contact">Contact</Link>
      </div>
    </>
  );
}
