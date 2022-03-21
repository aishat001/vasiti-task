import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/homepage/homepage'
import About from '../pages/about'
import Stories from '../pages/stories'
import Contact from '../pages/contact'
import Login from '../pages/login'
import Signup from '../pages/signup'
import Success from '../pages/success'

export default function Navigation() {
  return (
    <Routes>
            <Route exact path="/" element={<Homepage/>} />
            <Route exact path="/aboutUs" element={<About/>} />
            <Route exact path="/stories" element={<Stories/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<Signup/>} />
            <Route exact path="/success" element={<Success/>} />
    </Routes>
  )
}
