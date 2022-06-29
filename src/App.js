import React, { useReducer, createContext } from "react";
import ToDoList from "./components/ToDoList";

function todosReducer(state, action) {
  switch (action.type) {
    default:
      return todosInitialState;
  }
}

export const TodosContext = createContext();

const todosInitialState = {
  todos: [
    { id: 1, text: "finish writing code" },
    { id: 2, text: "play a video game" },
    { id: 3, text: "read a novel" },
  ],
};
function App() {
  const[state, dispatch] = useReducer(todosReducer, todosInitialState)
  return (
  <TodosContext.Provider value={{state, dispatch}}>
    <ToDoList/>
  </TodosContext.Provider>
  )
}

export default App;
