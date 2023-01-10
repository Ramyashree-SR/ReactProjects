import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [userData, setuserData] = useState({
        fullName:"",
        userName:"",
        password:"",
        confirmPassword:""
    })

    let updateDetails=(e)=>{
        setuserData({
            ...userData,
            [e.target.name]:e.target.value
        })
    }
    let navigate=useNavigate()
    let navigteToLogin=()=>{
        navigate("/login")
    }
  return (
    <div>
        <h1 className="login_heading">SignUp Form</h1>
       <form className='container border' >
        <div className="m-3">
          <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" 
          value={userData.fullName} name="fullName"
          onChange={(e)=>{updateDetails(e)}} aria-describedby="emailHelp" />
          
        </div>
        <div className="m-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="text" className="form-control" id="exampleInputEmail1" 
          value={userData.userName} name="userName"
          onChange={(e)=>{updateDetails(e)}} aria-describedby="emailHelp" />
          
        </div>
        <div className="m-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
          <input type="text" className="form-control" id="exampleInputEmail1" 
          value={userData.password}name="password"
          onChange={(e)=>{updateDetails(e)}} aria-describedby="emailHelp" />
          
        </div>
        <div className="m-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Confirm Password</label>
          <input type="text" className="form-control" id="exampleInputEmail1" 
          value={userData.confirmPassword}name="confirmPassword"
          onChange={(e)=>{updateDetails(e)}} aria-describedby="emailHelp" />
          
        </div>
       
        
        <button type="submit" className="btn btn-primary mb-3" >Login</button>
        <h4 style={{cursor:"pointer"}} onClick={navigteToLogin}>Already have an account!? login..</h4>
      </form>
    </div>
  )
}

export default SignUp