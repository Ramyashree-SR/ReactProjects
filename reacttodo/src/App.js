
import "./App.css";
import Todo from "./Components/Todo";
import { useEffect } from "react";
import { fetchApi } from "./Action/Action";
import { useDispatch, useSelector } from "react-redux";

function App() {
  let dispatch = useDispatch();
  let users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchApi());
  }, []);

  return (
    <div className="App">
      {/* <COunterOne/>
    <Fetch/> */}
      {/* <FetchRandomApi/> */}
      {/* <Fetch2/> */}
      <Todo />
      {users.map((val, idx) => {
        return <li key={idx}>{val.name}</li>;
      })}
    </div>
  );
}

export default App;
