import React, { useState } from "react"

const Contact =()=>{

    const [data, setData] =useState({
        fullname: '',
        phone:"",
        email:"",
        msg: ''

    })
    const InputEvent=(event)=>{
       const {name, value} = event.target;

       setData((preVal)=>{
          return{
              ...preVal,
              [name]:value,
          }
       })
    }

   const formSubmit=(event)=>{
     event.preventDefault();
     alert("hello")
    }
return(
<>
    <div className="my-5 text-center">
        <h1> Contact US</h1>
    </div>
    <div className="container container_contact my-5">
        <div className="row">
            < div className=" col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">FullName</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" 
                        name="fullname"
                        value={data.fullname}
                        aria-describedby="emailHelp"
                        onChange={InputEvent} />
                        
                    </div>
                    
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="text" class="form-control" id="exampleInputEmail1"
                         name="Email"
                        value={data.email}
                        aria-describedby="emailHelp"
                        onChange={InputEvent} />
                        
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Phone</label>
                        <input type="number" class="form-control" 
                         value={data.phone}
                         name="phone"
                        id="exampleInputPassword1" 
                        onChange={InputEvent}
                        name="phone"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">msg</label>
                        <textarea class="form-control" 
                         value={data.msg}
                         name="msg"
                         id="exampleFormControlTextarea1" rows="3"
                         onChange={InputEvent}></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary mt-2">Submit</button>

                </form>
        </div>
    </div>
    </div>
</>
)
}
export default Contact