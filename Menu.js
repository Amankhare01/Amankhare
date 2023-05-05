import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import {Routes,Route} from 'react-router-dom'
import About from "./Components/About";
const Menu=()=>{
    return(
        <div>
            <Navbar/>
            <Routes>
                <Route path="/Home" element={<Home/>}></Route>
                <Route path="/About" element={<About/>}></Route>
                <Route path="/Contact" element={<Contact/>}></Route>
            </Routes>
        </div>
        
    )
}
export default Menu