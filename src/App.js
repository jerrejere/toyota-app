import Nav from './Nav';
import Contact from './Contact';
import './App.css';
import { Routes, Route  } from "react-router-dom";
import Car from './Car';
import Review from './Review';
// import Loading from './loading';
import About from './About';
// import Home from './Home'; 
// import React,{useEffect, useState} from 'react';


function App(){


  return (


<div>  
    <main>
    <Nav />
    <Routes>
    
    <Route exact path="/" element={ <Car  />} />


    <Route exact path="/about" element={<About/>} />
    
    
    <Route exact path="/contact" element={<Contact/>} />
    
    <Route exact path= "/review" element= {<Review/>} />

    </Routes>

  
    
 
   </main>
   </div>
  );

}

export default App;
