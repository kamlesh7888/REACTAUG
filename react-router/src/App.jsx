 import React from 'react'
 import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
 import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
 
 export default function App() {
   return (
     <div>
       <h1>WELCOME TO REACT ROUTING</h1>
       <Navbar />
       {/* <Home />
       <About />
       <Contact /> */}
       <Routes>
       <Route path="/" element = {<Home />}></Route>
       <Route path="/about" element = {<About />}></Route>
       <Route path="/contact" element = {<Contact />}></Route>
       </Routes>
     </div>
   )
 }
 