import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar p-8 bg-blurgreen bg-opacity-60 rounded-full ml-40 mt-10 w-120 shadow-2xl">
        <Link className="mr-2 pl-5 pr-5 pt-3 pb-3 bg-lightGreen rounded-full font-extrabold shadow-xl text-xl" to="/">Home</Link>
        <Link className="ml-2 mr-2  pl-5 pr-5 pt-3 pb-3 bg-lightGreen rounded-full font-extrabold text-xl"to="/about">About</Link>
        <Link className="ml-2 mr-2  pl-5 pr-5 pt-3 pb-3 bg-lightGreen rounded-full font-extrabold  text-xl" to="/events">Events</Link>
        <Link className="ml-2  mr-2 pl-5 pr-5 pt-3 pb-3 bg-lightGreen rounded-full font-extrabold  text-xl" to="/resources">Resources</Link>
        <Link className="ml-2 mr-2  pl-5 pr-5 pt-3 pb-3 bg-lightGreen rounded-full font-extrabold text-xl" to="/contact">Contact</Link>
      </div>
    </>
  );
}
