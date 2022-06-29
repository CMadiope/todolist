import React, { useReducer, createContext } from "react";
import ToDoList from "./components/ToDoList";
import "bootstrap/dist/css/bootstrap.min.css";

function todosReducer(state, action) {
  switch (action.type) {
    case "delete":
      const filteredTodoState = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return { ...state, todos: filteredTodoState };
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
  const [state, dispatch] = useReducer(todosReducer, todosInitialState);
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <ToDoList />
    </TodosContext.Provider>
  );
}

export default App;
