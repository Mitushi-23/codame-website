import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar p-4 bg-blurgreen backdrop-blur-2xl">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/resources">Resources</Link>
      </div>
    </>
  );
}
