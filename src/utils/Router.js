import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../pages/Home'
import About from "../pages/About";
import Events from "../pages/Events";
import Resources from "../pages/Resources";

export default function Router() {
  return (
    <>
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
    </>
  );
}
