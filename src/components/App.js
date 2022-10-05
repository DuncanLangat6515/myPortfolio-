import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import {Route, Switch} from "react-router-dom"
import { useEffect, useState } from 'react';
function App() {

const[images, setImages]=useState([]);
useEffect(()=>{
  fetch('http://localhost:3000/profile')
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    setImages(data)
    
  })
},[])


  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/projects">
          <Project/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/">
          <Home images={images} />
        </Route>
      </Switch>

      
    </div>
  );
}

export default App;
