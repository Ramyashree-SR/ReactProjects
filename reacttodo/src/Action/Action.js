export let addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: data,
  };
};
export let editTodo = (data) => {
  return {
    type: "EDIT_TODO",
    payload: data,
  };
};
export let deleteTodo = (data) => {
  return {
    type: "DELETE_TODO",
    payload: data,
  };
};
export let resetTodo = () => {
  return {
    type: "RESET_TODO",
  };
};
export let fetchApi = () => {
  return async (dispatch) => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data=await response.json()
    dispatch(setUsers(data));
  };
};
export let setUsers = (data) => {
  if (data) {
    return {
      type: "SET_USERS",
      payload: data,
    };
  } else {
    return {
      type: "SET_USERS",
      payload: [],
    };
  }
};
