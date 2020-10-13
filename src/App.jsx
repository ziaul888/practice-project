import React from 'react'
import { Redirect, Route, Switch,  } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from "./Home"
import Navber from './Navbar'
const App =  ()=>{
    return (
        <>
        <Navber/>
           <Switch>
               <Route exact path="/" component={Home}/>
               <Route exact path="/about" component={About}/>
               <Route exact path="/sevice" component={Service}/>
               <Route exact path="/contact" component={Contact}/>
               <Redirect to="/"/>
           </Switch> 

        </>
    );
};
export default App