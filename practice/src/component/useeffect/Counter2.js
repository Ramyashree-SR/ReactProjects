import React, { useEffect, useState } from 'react'

function Counter2() {
    const [count, setcount] = useState(0)
    useEffect(()=>{
    setcount(count+1)
    },[count])
  return (
    <div>
        <h1> counter2:{count}</h1>
    </div>
  )
}

export default Counter2