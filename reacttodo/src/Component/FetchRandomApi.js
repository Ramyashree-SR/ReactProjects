import { logDOM } from "@testing-library/react";
import React, { useState } from "react";
// import Feild from "./Atoms/Feild/Feild";
import InputFeild from "./Atoms/InputFeild";

function FetchRandomApi() {
  const [todo, setTodo] = useState("");
  const [newtodo, setNewtodo] = useState([]);

  let check = () => {
    setNewtodo([...newtodo,todo] );
    console.log("todo", todo);
    console.log("newtodo", newtodo);
  };
  return (
    <div>
    {/*<input type="text" onClick={()=>console.log("called")}/>*/}
     {/*in the above line an arrow function is been used even though a function was already associated with it , 
     to save it from rendering even without an event trigger*/}
     <h1>TO-DO List</h1>
      <InputFeild
        className="input"
        name="list"
        value={todo.list}
        onChange={(e) => {
          e.preventDefault();
          setTodo(e.target.value)
        }}
        placeholder="Enter Your TO-DO"
        onClick={check}
      />
      {newtodo.map((val,idx)=>{
        return (
        <li key={idx}>{val}</li>
      )
      })}
      
    </div>
  );
}

export default FetchRandomApi;
