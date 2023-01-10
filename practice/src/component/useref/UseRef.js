import React, { useEffect, useRef } from 'react'

function UseRef() {
    let newRef=useRef()

    useEffect(()=>{
        console.log("newRef",newRef)
        focusInput()
    },[])

    let focusInput=()=>{
        newRef.current.focus()
    }
  return (
    <div>
        <input ref={newRef} placeholder="useRef"/>
    </div>
  )
}

export default UseRef