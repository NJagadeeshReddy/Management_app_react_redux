import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./Type";


const intialstate = {
  tasks: [],
}

const todoReducer = (state = intialstate, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log(action.payload)
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => index !== action.payload),
      };
    case EDIT_TODO:
      const { index, task } = action.payload;
      const updatedTasks = state.tasks.map((t, i) =>( i!==index ? t:task));
      return {
        ...state,
        tasks: updatedTasks
      };
    default:
      return state;
  }
};

export default todoReducer;
