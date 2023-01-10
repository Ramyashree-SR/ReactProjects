import React, { useCallback, useState } from 'react'
import Button from './Button'
import Count from './Count'

function Parent() {
    const [age, setage] = useState(10)
    const [salary, setsalary] = useState(1000)
    //incrementAge variable will be reassigned with the function only
    //when the age value is changed (which is passed as dependency)

    // let incrementAge=()=>{
    //     setage(age+1)
    // }

     let incrementAge=useCallback(()=>{
         setage(age+1)
     },[age])

    // incrementSalary variable will be reassigned with the function only 
    // when the salary value is changed (which is passed as dependancy)

    let incrementSalary=useCallback(()=>{
        setsalary(salary+100)
    },[salary])
  return (
    <div>
        <h1><u>useCallback</u></h1>
        <Count text="Age" count={age}/>
        <Button handleClick={incrementAge}>increment Age</Button>
        <Count text="Salary" count={salary}/>
        <Button handleClick={incrementSalary}>increment Salary</Button>
    </div>
  )
}

export default Parent