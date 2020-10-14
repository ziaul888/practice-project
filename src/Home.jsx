import React from "react"
import web from "../src/imgs/img1.svg"
import Common from "./Common"

const Home =()=>{
    return(
        <>
        <Common name="Grow your business with" imgsrc={web} visit="/service" btnname="Get Started"/>
        </>
    )
}
export default Home