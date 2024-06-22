import React from "react";
import {Link, Routes,Route } from "react-router-dom";
import Header from '/Compo/Header';
import Home from './Compo/Home';
import About from './component/About';
import Nav from './component/Nav';
import Newpost from "./component/Newpost";
import Missing from './component/Missing';
import Postlayout from "./component/Postlayout";
import Post from "./component/Post";
import Postpage from "./component/Postpage";
import Footer from './component/Footer';

const Main=()=>{
    return(<div>
        <ul>
            <li> <Link to="Header"> Header </Link> </li>
            <li> <Link to="Home"> Home </Link> </li>
            <li> <Link to="About"> About </Link> </li>
            <li> <Link to="Nav"> Nav </Link> </li>
            <li> <Link to="Newpost"> Newpost </Link> </li>
            <li> <Link to="Missing"> Missing </Link> </li>
            <li> <Link to="Postpage"> Postpage </Link> </li>
            <li> <Link to="Postlayout"> Postlayout </Link> </li>
            <li> <Link to="Footer"> Footer </Link> </li>
        </ul>
        <Routes>
            <Route path="/Header" element={<Header/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Nav" element={<Nav/>}/>
            <Route path="/Newpost" element={<Newpost/>}/>
            <Route path="*" element={<Missing/>}/>
            <Route path="/Postpage" element={<Postlayout/>}>
                <Route index element={<Postpage/>}/>
                <Route path=":id" element={<Post/>}/>
                
            </Route>
            <Route path="/Footer" element={<Footer/>}/>
            
            </Routes>
       </div>)
}
export default Main;