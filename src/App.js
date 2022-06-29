import React, { useReducer, createContext } from "react";

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
  return <div className='App'></div>;
}

export default App;
