import React from "react"
import Common from "./Common"
import web from "../src/imgs/img2.svg"

const About =()=>{
    return(
        <>
        <Common name="Welcome to about page" imgsrc={web} visit="/contact" btnname="Contact Us"/>
        </>
    )
}
export default About