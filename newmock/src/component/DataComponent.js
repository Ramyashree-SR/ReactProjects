import React from 'react'
import ButtonComponent from '../atom/ButtonComponent'

const DataComponent = ({setState}) => {
   const handleSubmit=()=>{
        console.log("Hello");
        setState(false);
    };
  return (
    <div>
        <ButtonComponent label='Create' onSubmit={()=>{handleSubmit()}}/>
    </div>
  )
}

export default DataComponent