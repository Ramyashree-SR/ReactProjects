import React, { useState } from 'react'

function Data(){

  const [array,setarray] = useState([
    arr=10,
    arr1=20,
    arr2=30,
    arr3=40,
    arr4=50
])
     
  let updatearray=()=>{
    setarray({
        ...array,
       arr5=60
    })
  }
  return (
    <div>
        <h1>array value:{array}</h1>
        <button onClick={()=>{updatearray()}}>Addarray</button>
        
    </div>
  )
}

export default Data