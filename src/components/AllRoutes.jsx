import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Project from '../Pages/Project';
import Skills from '../Pages/Skills';

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/home" element={<Home></Home>} ></Route>
        <Route path="/about" element={<About></About>} ></Route>
        <Route path="/contact" element={<Contact></Contact>} ></Route>
        <Route path="/project" element={<Project></Project>} ></Route>
        <Route path="/skills" element={<Skills></Skills>} ></Route>
        <Route path="/*" element={<Skills></Skills>} ></Route>
      </Routes>

    </div>
  )
}
