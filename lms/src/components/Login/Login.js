import React from 'react'
import './Login.css'

function Login() {
  return (
    <div>
           <div className='bg-image' >
          <img src='./assets/IMG_0534.png' className='img-fluid' alt='Sample' />
          {/* <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}> */}
          {/* </div> */}
          </div>

         <div className='bg-image' >
          <img src='./assets/wepik-2022319-214333.png' className='img-fluid1' alt='' />
          {/* <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          </div> */}
          </div>

            <div >
           <div className="fig">
           <figure>
           <img src='./assets/wepik-2022319-214333-1.png' className='img shadow-2-strong'
            alt='' />
           <figcaption><h1>Good things on <br/> your way!</h1></figcaption>
            </figure>
           </div>
           <div className="data">
           <div className='column col-md-4 col-sm-4 ms-5'>
          <img src='./assets/Artboard – 2.png' className='img1' alt='' height="10px"  /> 
         </div>
           <h5 className='name' >Login</h5>
           </div> 


            <form>
        <div className="mb-4 md-4 ms-1">
          <label htmlFor="exampleInputEmail1" className="form-label">EmployeeID</label>
          <input type="text" className="form-control" id="EmployeeId" aria-describedby="emailHelp" />
        </div>
        <br/>
        <div className="mb-4 md-4 ms-2 ">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Password'/>
        </div>
        <br/>
        <div className='btn'>
          <button type="login" className="d" >Login </button>
          <button type="cancel" className="d1">Cancel</button> 
         </div>

           <div>
            {/* <hr style={{color:'white'}}/>  */}
            <p><pre>Copyright &copy;2018Alerico.com  Terms&condition|Privacy Policy</pre></p>
          </div>
        
         </form>
        </div>
        </div>
      
       
      
    )
}

export default Login;