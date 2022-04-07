import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export default function Navbar({ active }) {

  let className_home = "home mr-2 pl-5 pr-5 pt-2 pb-2 bg-lightGreen rounded-full font-extrabold text-lg";
  let className_about = "about ml-2 mr-2  pl-5 pr-5 pt-2 pb-2 bg-lightGreen rounded-full font-extrabold text-lg";
  let className_events = "events ml-2 mr-2  pl-5 pr-5 pt-2 pb-2 bg-lightGreen rounded-full font-extrabold  text-lg";
  let className_resources = "resources ml-2  mr-2 pl-5 pr-5 pt-2 pb-2 bg-lightGreen rounded-full font-extrabold  text-lg";
  let className_contact = "contact l-2 mr-2  pl-5 pr-5 pt-2 pb-2 bg-lightGreen rounded-full font-extrabold text-lg";
  let className_team = "contact l-2 mr-2  pl-5 pr-5 pt-2 pb-2 bg-lightGreen rounded-full font-extrabold text-lg";

  switch (active) {
    case 'home': className_home += " shadow-xl";
      break;
    case 'about': className_about += " shadow-xl";
      break;
    case 'events': className_events += " shadow-xl";
      break;
    case 'resources': className_resources += " shadow-xl";
      break;
    case 'contact': className_contact += " shadow-xl";
      break;
    case 'team': className_team += " shadow-xl";
      break;
  }

  return (
    <>

      <div className="navbar p-4 bg-blurgreen bg-opacity-60 rounded-full ml-32 mt-7 w-[44rem] shadow-2xl">
        <Link className={className_home} to="/">Home</Link>
        <Link className={className_about} to="/about">About</Link>
        <Link className={className_events} to="/events">Events</Link>
        <Link className={className_resources} to="/resources">Resources</Link>
        <Link className={className_team} to="/team">Team</Link>
        <Link className={className_contact} to="/contact">Contact</Link>

     
      </div>
    </>
  );
}
