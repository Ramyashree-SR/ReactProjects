import React, { useReducer } from "react";

function COunterOne() {
  let initialValue = {firstCounter: 0, secondCounter: 10};
  let reducer = (Previousstate, action) => {
    switch (action) {
    // switch (action.payload) {
      case "INCREMENT":
        return {...Previousstate,firstCounter:Previousstate.firstCounter+1};
    //   case "INCREMENT":
    //     return {...Previousstate,firstCounter:Previousstate.firstCounter+action.payload};
      case "DECREMENT":
        return {...Previousstate,firstCounter:Previousstate.firstCounter-1};
      case "RESET":
        return {...Previousstate,firstCounter:0};
      case "INCREMENT2":
        return {...Previousstate,secondCounter:Previousstate.secondCounter+1};
      case "DECREMENT2":
        return {...Previousstate,secondCounter:Previousstate.secondCounter-1};
      case "RESET2": 
        return {...Previousstate,secondCounter:initialValue.secondCounter};
      default:
        return Previousstate;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>Counter1:{state.firstCounter}</h1>
      <button
        onClick={() => {
          dispatch("INCREMENT");
        }}
      >
        Increment
      </button>
      {/* <button
        onClick={() => {
          dispatch({type:"INCREMENT",payload:10});
        }}
      >
        Increment
      </button> */}
      <button
        onClick={() => {
          dispatch("DECREMENT");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("RESET");
        }}
      >
        Reset
      </button>
      <h1>Counter2:{state.secondCounter}</h1>
      <button
        onClick={() => {
          dispatch("INCREMENT2");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("DECREMENT2");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("RESET2");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default COunterOne;
