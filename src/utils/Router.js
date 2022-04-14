import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import Home from '../pages/Home/Home'
import About from "../pages/About/About";
import Events from "../pages/Events/Events";
import Resources from "../pages/Resources/Resources";
import Contact from "../pages/Contact/Contact";
import Team from "../pages/Team/Team";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />}>
            Home
          </Route>
          <Route exact path="/about" element={<About />}>
            About{" "}
          </Route>
          <Route exact path="/events" element={<Events />}>
            Events
          </Route>
          <Route exact path="/resources" element={<Resources />}>
            Resources
          </Route>
          <Route exact path="/team" element={<Team />}>
            Team
          </Route>
          {/* <Route exact path="/contact" element={<Contact />}>
            Contact
          </Route> */}
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}
