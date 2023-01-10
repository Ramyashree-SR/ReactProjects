import React from 'react'
import ButtonComponent from '../atom/ButtonComponent';

const ComponentA = () => {
 
    const handleSubmit=()=>{
        console.log("This data is from component");
        
    }
  return (
    <div>
        <ButtonComponent label='Submit' onSubmit={()=>{handleSubmit()}}/>
    </div>
  )
}
export default ComponentA