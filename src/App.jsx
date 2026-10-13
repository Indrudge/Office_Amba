// eslint-disable-next-line
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/about';
import Contact from './pages/contact';
import Products from './pages/products';
import Admin from './pages/admin'


import Navbar from './components/Navbar';



function App(){

  function home(){
    return(
      <>
      <div className="Hello">
          <h1>Hello Mother Fuckers</h1>
      </div>
      </>
    );
  }
    
  return(
    <>
                <Router>
                         <Navbar />
                <Routes>
                    <Route path="/" element={home()}></Route>
                    <Route path="/Contact"element={<Contact />}></Route>
                    <Route path="/About"element={<About />}></Route>
                    <Route path="/Products"element={<Products />}></Route>
                    <Route path="/admin" element={<Admin />}></Route>
                </Routes>
            </Router>
        
    </>
    
  );
}
    


export default App;