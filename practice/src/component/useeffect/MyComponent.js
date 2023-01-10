import React, { useEffect, useState } from 'react'

function MyComponent() {

    const [name, setname] = useState("")
    const [isAdmin, setisAdmin] = useState(false)

    useEffect(()=>{
        console.log("first Useeffect executed");
        //the below function will get executed before unmounting
        //the component from real dom
        //the below function is equivalent to component will unmount of class component
        return()=>{
            console.log("component unmounted");
        }
    },[])

    // the below use effect will get executed whenever name is updated with different value 
    // note:if name is updated to same value again and again the below useeffect will not get executed and
    // also re-render will not happen i.e return statement will not execute but in case of class component it will execute
    useEffect(()=>{
        if(name){
            console.log("second useeffect executed");
        }
    },[name])
  return (
    <div>
        <h1> Hello {name}</h1>
        {/* <h1>{name}</h1> */}
        <button onClick={()=>{setname("Ramya")}}>Change name</button>
        <h2>{isAdmin?"Admin":"User"}</h2>
        <button onClick={()=>{setisAdmin(true)}}>Change Role</button>
    </div>
  )
}

export default MyComponent