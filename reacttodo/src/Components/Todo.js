import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo, resetTodo } from "../Action/Action";

function Todo() {
  const [todoData, setTodoData] = useState("");
  let dispatch = useDispatch();

  let fruitsFromStore=useSelector(state=>state.todo.list);
  
  return (
    <div>
      <h1>REDUX TODO LIST</h1>
      <input
        type="text"
        placeholder="Enter Your ToDO"
        value={todoData}
        name="todoData"
        onChange={(e) => {
          setTodoData(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(todoData));
          setTodoData("");
        }}
      >
        👍 ADD TODO
      </button>
      <div>
        {fruitsFromStore.map((val, idx) => {
          return (
            <div key={idx}>
              <li>{val}</li>
              <button
                onClick={() => {
                  dispatch(editTodo(idx));
                }}
              >
                📝 EDIT
              </button>
              <button
                onClick={() => {
                  dispatch(deleteTodo(idx));
                }}
              >
                ❌ DELETE
              </button>
            </div>
          );
        })}
      </div>
      <br />
      <button
        onClick={() => {
          dispatch(resetTodo());
        }}
      >
        🧹 RESET TODO
      </button>
    </div>
  );
}

export default Todo;
