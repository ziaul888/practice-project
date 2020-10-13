import React from "react"
import { NavLink } from "react-router-dom"
import wed from "../src/imgs/img1.svg"

const Home =()=>{
    return(
        <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0  order-2 order-lg-1 d-flex  justify-content-center flex-column ">
                            <h1> 
                                Grow your business with <strong className="brand-name"> Awesome11</strong>
                            </h1>
                            <h2 className ="my-3">we are the team of telented developer making websites</h2>
                            <div className="mt-3">
                            <NavLink to="/service"  className="btn-get-started"> Getting start </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={wed} className="img-fluid animated"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Home