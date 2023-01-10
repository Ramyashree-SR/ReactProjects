import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [userData, setuserData] = useState({
        userName:"",
        password:""
    })
  
    let updateDetails=(e)=>{
        setuserData({
            ...userData,
            [e.target.name]:e.target.value
        })
    }
    let navigate=useNavigate()
    let navigteToSignup=()=>{
        navigate("/signup")
    }
    

  return (
    <div>
        <h1 className="login_heading">Login Form</h1>
       <form className='container border' >
        <div className="m-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="text" className="form-control" id="exampleInputEmail1" 
          value={userData.userName}name="userName"
          onChange={(e)=>{updateDetails(e)}} aria-describedby="emailHelp" />
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name="password" className="form-control" 
          id="exampleInputPassword1"value={userData.password}
          onChange={(e)=>{updateDetails(e)}} />
        </div>
        
        <button type="submit" className="btn btn-primary mb-3" >Login</button>
        <h4 style={{cursor:"pointer"}} onClick={navigteToSignup}>Don't have an an account ! signup Here..</h4>
      </form>
    </div>
  )
}

export default Login