let initialState = { list: [] };

let TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "DELETE_TODO":
      state.list.splice(action.payload, 1);
      return {
        list: [...state.list],
      };
    case "RESET_TODO":
      return {
        list: [],
      };
    default:
      return state;
  }
};
export default TodoReducer;
