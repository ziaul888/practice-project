import React from 'react'
import { Redirect, Route, Switch,  } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Home"
import Navber from './Navbar'
import About from "./About"
import Service from "./Service"
import Contact from "./Contact"
import Footer from './Footer'
const App =  ()=>{
    return (
        <>
        <Navber/>
           <Switch>
               <Route exact path="/" component={Home}/>
               <Route exact path="/about" component={About}/>
               <Route exact path="/service" component={Service}/>
               <Route exact path="/contact" component={Contact}/>
               <Redirect to="/"/>
           </Switch> 
          <Footer/>
        </>
    );
};
export default App