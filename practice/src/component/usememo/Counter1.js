import React, { useMemo, useState } from 'react'

function Counter() {
   const [counterOne, setcounterOne] = useState(0)
   const [counterTwo, setcounterTwo] = useState(10)

   let incrementCounterOne=()=>{
    setcounterOne(counterOne+10)
   }
   let incrementCounterTwo=()=>{
    setcounterTwo(counterTwo+1)
   }

   let isEven=useMemo(()=>{
    console.log("isEven Executed");
    let i=0;
    while(i<20000000) i++;
    return counterTwo%2===0;
   },[counterTwo])

  return (
    <div>
        <hr></hr>
        <h1><u>useMemo</u> </h1>
        {isEven?"Even":"Odd"}
        <h2>Counter 1:{counterOne}</h2>
        <button onClick={incrementCounterOne}>Increment Counter One</button>
        <h2>Counter 2:{counterTwo}</h2>
        <button onClick={incrementCounterTwo}>Increment Counter Two</button>
    </div>
  )
}

export default Counter