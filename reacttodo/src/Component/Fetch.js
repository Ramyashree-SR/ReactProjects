import React, { useEffect, useReducer } from 'react'

function Fetch() {
    let initialValue = {data:[],error:""};
let reducer=(Previousstate,action)=>{
    switch(action.type){
    case "FETCH_SUCCESS":
        return {data :action.payload};
    case "FETCH_FAILURE":
        return {error :action.payload};
    
        default : return Previousstate;
    }
}


const [state, dispatch] = useReducer(reducer, initialValue);

let fetchApi=async()=>{
    try{
        let response=await fetch("https://jsonplaceholder.typicode.com/users");
        let data=await response.json();
        console.log("data",data);
        dispatch({type:"FETCH_SUCCESS",payload:data});
    }
    catch(error){
        dispatch({type:"FETCH_FAILURE",payload:error});
    }
} 
useEffect(() => {
 fetchApi();
},[])
    return (
    <div>
        {state.data.map((val,ind)=>
        {
            return <li key={ind} >{val.name}</li>
        })}
    </div>
  )
    }

export default Fetch;